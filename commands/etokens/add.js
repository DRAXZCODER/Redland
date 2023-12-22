module.exports = ({
  name: "add",
  code: `$color[#fff00]$description[Bonus Token's Has Been Added To $username[$mentioned[1;yes]]$setGlobalUserVar[diya;$sum[$getGlobalUserVar[diya;$mentioned[1;yes]];$noMentionMessage];$mentioned[1;yes]]
  $onlyForIDs[$getVar[admin];:x: | You are Not My Developer]
  `
})