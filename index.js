const  aoijs  = require('aoi.js')

const bot = new aoijs.Bot({
  
  token : process.env['TOKEN'] ,
  
 prefix : ["<@879567178809114634>","+","$getServerVar[prefix]"]
    
})
const { keepalive } = require('./keep-alive.js');
bot.status({
  
  text : "Santa Arrives At RedLand 🎄",
  type: "STREAMING",
  url : "https://www.twitch.tv/nano", 
 
  time : 12
})

bot.loadCommands('./commands/')
bot.onMessage()


bot.command({
  name : "eval",
  code : `$eval[$message]$onlyForIDs[843396638679498773; :x: | You are Not My Developer]$deletecommand`
})
bot.variables({
  admin : "843396638679498773",
  status : "Red Land Battle Royale",
  prefix : "#",
  cash : "150",
  days : "0",
  badges : "<:user:906602490282262619>",
  verify : "1",
  voted : "",
  unlock : "no",
  tv2 : "0", 
  tv3 : "0",
  diya : "0",
  
  
})



