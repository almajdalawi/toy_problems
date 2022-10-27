/*
Write a function pingPongTracker that accepts no arguments and returns an object with the
following methods:
- timeSpentPlaying() should return the total amount of time you have played pingpong.
- playOneGame() should increase the total time you played pingpong by 15 minutes
  and return a string "Game played"
- myLevel() should return your experience level based on how much time you have spent playing
  pingpong. These are the levels: a) Less than 30 minutes - "I need to improve my game"
                                  b) 30-100 minutes - "You need to improve your game"
                                  c) More than 100 minutes - "Wow, I have wasted a lot of time"
Example:
var myGame = pingPongTracker();
myGame.playOneGame();//should return "Game played";
myGame.playOneGame();//should return "Game played";
myGame.timeSpentPlaying(); //should return 30;
myGame.myLevel(); //should return "You need to improve your game"
*/

function pingPongTracker() {
  let time = 0

  function timeSpentPlaying() {
    return time
  }

  function playOneGame() {
    time += 15
    return 'Game played'
  }

  function myLevel() {
    if (time < 30) { return 'I need to improve my game' }
    else if (time >= 30 && time < 100) { return 'You need to improve your game' }
    else { return 'Wow, I have wasted a lot of time' }
  }

  return { timeSpentPlaying, playOneGame, myLevel }
}


///////////////


describe('pingPongTracker', () => {
  let myGame = new pingPongTracker()
  let myGame2 = new pingPongTracker()
  it('plays one game many times', () => {
    expect(myGame.playOneGame()).toEqual('Game played')
    expect(myGame.playOneGame()).toEqual('Game played')
  })

  it('checks the playing time', () => {
    expect(myGame.timeSpentPlaying()).toEqual(30)
  })

  it('returns the level of the player', () => {
    expect(myGame2.myLevel()).toEqual('I need to improve my game')
    myGame2.playOneGame()
    myGame2.playOneGame()
    expect(myGame2.myLevel()).toEqual('You need to improve your game')
    myGame2.playOneGame()
    myGame2.playOneGame()
    myGame2.playOneGame()
    myGame2.playOneGame()
    myGame2.playOneGame()
    myGame2.playOneGame()
    expect(myGame2.myLevel()).toEqual('Wow, I have wasted a lot of time')
  })
})
