module.exports = {
  name : "buymb",
  code : `  $if[$randomText[yes;no;yes;no]==yes]
  $description[<:mysterybox:1172791189322346517> | Yes , you won the price of **$random[1;5]** <:christmascap:1181939715646177340> X-MAS Token'S]]
  $setGlobalUserVar[diya;$sum[$getGlobalUserVar[diya];$random[1;10]]]
  $else
  $footer[10 TOKENS HAVE BEEN DEDUCTED AS A CHARGE FOR MYSTERY BOX]$description[<:mysterybox:1172791189322346517> | No , you lost the price of **-$random[1;10]** <:christmascap:1181939715646177340> X-MAS Token'S]
  $setGlobalUserVar[diya;$sub[$getGlobalUserVar[diya];$sum[10;$random[1;10]]]]
  $endif $image[https://cdn.discordapp.com/attachments/1147785396265160784/1173895563402551377/giphy.gif?ex=65659e70&is=65532970&hm=f1c4154e17121f0728bc3c91bd4728c25d1cb9d3f70c4c36dabf8419881147f4&]$onlyIf[$getGlobalUserVar[diya]>=10;{description::x: | Oh You Do Not Have The Right Amount <:christmascap:1181939715646177340> To Buy And Open A Mystery Box 🎁}]
  `
}
  