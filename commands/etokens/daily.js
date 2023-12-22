module.exports = {
  name : "checkin",
  aliases : ["daily","claim"],
  code : ` $color[#FFF00]$description[ **$username** Just Claimed <:christmascap:1181939715646177340> Christmas Token]$setGlobalUserVar[diya;$sum[$getGlobalUserVar[diya];1]]$globalCooldown[3hr;{description:<:christmascap:1181939715646177340> | There Are No More Tokens To Claim , Try After **%time%**}{color:#FFF00}]`
}