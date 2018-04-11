function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = []; 
  for (var i = 0; i < musicians.length; i++) {
    whoPlaysWhat.push(musicians[i] + " plays " + instruments[i])
  }
  return whoPlaysWhat
}
function johnLennonFacts(facts) {
  var johnLennonFactsAgain = []; 
  var i = 0
  while (i < facts.length) {
    johnLennonFactsAgain.push(facts[i] + "!!!");
    i++
    }
    return johnLennonFactsAgain
  }
function iLoveTheBeatles(n) {
  var love = [];
  var i = 0
  do { 
    love.push("I love the Beatles!"); i++ 
  }
  while (i < love.length)
}