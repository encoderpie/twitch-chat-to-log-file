const tmi = require('tmi.js')
const fs = require('fs')
const config = require('./config.json')

const client = new tmi.Client({
   connection: { reconnect: true },
   channels: [config.channel]
})

client.connect(console.log(`Connected to ${config.channel}`))

function getCurrentTime() {
   const currentTime = new Date()
   let currentHour = currentTime.getHours(),
      currentMinute = currentTime.getMinutes()
   //the code below adds '0' to the left of the clock if it has a single digit value, i.e. it converts '0' to '00'
   //if (currentHour.toString().length == 1) currentHour = `0${currentHour}`
   //if (currentMinute.toString().length == 1) currentMinute = `0${currentMinute}`
   let currentTimeCombined = `${currentHour}:${currentMinute}`
   return currentTimeCombined
}

let logFileNameNumber = 0,
   logFileName = config.log_file_name,
   logFileLineLimit = config.log_file_line_limit
client.on('message', (channel, tags, message, self) => {
   if (self) return;
   let messageSyntax = `[${getCurrentTime()}] ${channel} | ${tags['username']}: ${message}`
   console.log(messageSyntax)
   let logFile = `./${logFileName}${logFileNameNumber}.txt`
   let fileLines
   try {
      fileLines = fs.readFileSync(logFile).toString().split("\n").length
   } catch (err) {
      fileLines = 0
   }
   if (fileLines <= logFileLineLimit) {
      fs.appendFile(logFile,`${messageSyntax}\n`, (err) => {})
   } else {
      logFileNameNumber += 1
      fs.appendFile(logFile,`${messageSyntax}\n`, (err) => {})
   }
})
