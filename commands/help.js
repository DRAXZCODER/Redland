module.exports = {
  name : "help",
  code : `$description[Hello Dear **$username** , Welcome To The HelpDesk of RedLand Official Bot]$addField[🤖 Bot Stats;>>> \`Ping : $ping Ms\nUptime : $uptime\nRam : $ram\nCPU : $cpu\n\`]$addField[👨‍🔧 Assistive Commands ;>>> \`info :- Get Info Regarding The Game And The Official Bot\n\nhelp :- Returns This Command (helpdesk)\n\`] $addField[🎄 X-MAS Celebration Event;>>> \`claim :- Claim Your Free X-MAS Tokens Every 3hr\n\nbag :- Check Your Backpack And How Many Tokens You Have\n\nlb :- Check The Leaderboard For The Top Tokens Collectors\`]$color[#fff00]$globalCooldown[5s;{description: :x: | Kindly Wait For **%time%** before trying again}]`
  
}