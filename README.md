# twitch-chat-log
Log twitch chat to txt file (TEMPLATE) - tmi.js

### Install - Clone
```
git clone https://github.com/encoderpie/twitch-chat-log.git
```

### Install - Edit config
```
npm i
```

Edit `config.json`

config.json:
```
{
   "channel": "channel_name",
   "log_file_name": "log", // filename to save logs
   "log_file_line_limit": 100
}
```
`log_file_line_limit`: When the maximum number of lines of the created log file reaches the number you specify, it creates a new log file. Like 'log1.txt'.

### Run
```
node main.js
```

### Contact
Bug reports and feedback for: Discord Server & Discord Username: discord.com/invite/Rnny2wF9MD & encoderpie#3312
