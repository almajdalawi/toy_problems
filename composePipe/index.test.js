/*
 * Write Compose and Pipe functions.
 *
 * Step 1: Implement the function Compose:
 *
 * Compose should return a function that is the composition of a list of
 * functions.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view Compose as moving RIGHT to LEFT through its arguments.
 *
 * Compose Example:
   var greet = function(name){ return 'hello ' + name;}
   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
   var welcome = compose(exclaim, greet);
   welcome('phillip'); // 'hello PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view Pipe as moving LEFT to RIGHT through its arguments.
 *
 * Pipe Example:
  var add2 = function(number){ return number + 2; }
  var multiplyBy3 = function(number){ return number * 3; }
  var addAndMultiply = pipe(add2, multiplyBy3);
  addAndMultiply(5);//should be 21
  var addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);
  addAndMultiplyTwice(5); //should be 63
 */



function compose(...args) {
  return internalFunc

  function internalFunc(str) {
    let func1
    let func2
    for (let i = args.length - 1; i >= 0; i -= 2) {
      if (i == args.length - 1) {
        func1 = args[i](str)
        if (i - 1 >= 0) {
          func2 = args[i - 1](func1)
        } else {
          return func1
        }
      } else {
        func1 = args[i](func2)
        if (i - 1 >= 0) {
          func2 = args[i - 1](func1)
        } else {
          return func1
        }
      }
    }
    return func2
  }
}

function pipe(...args) {
  return internalFunc

  function internalFunc(str) {
    let func1
    let func2
    for (let i = 0; i < args.length; i += 2) {
      if (i == 0) {
        func1 = args[i](str)
        if (i + 1 <= args.length - 1) {
          func2 = args[i + 1](func1)
        } else {
          return func1
        }
      } else {
        func1 = args[i](func2)
        if (i + 1 <= args.length - 1) {
          func2 = args[i + 1](func1)
        } else {
          return func1
        }
      }
    }
    return func2
  }
}


//////////////////


describe('compose', () => {
  var greet = function (name) { return 'hello ' + name; }
  var exclaim = function (statement) { return statement.toUpperCase() + '!'; }
  var abc = function (x) { return 'hi ' + x }
  var xyz = function (x) { return 'second ' + x }

  it('compose multiple functions', () => {
    expect(compose(greet, exclaim, abc, xyz)('emad')).toEqual('hello HI SECOND EMAD!')
    expect(compose(greet, exclaim, abc)('emad')).toEqual('hello HI EMAD!')
    expect(compose(greet, exclaim)('emad')).toEqual('hello EMAD!')
    expect(compose(greet)('emad')).toEqual('hello emad')
  })
})

describe('pipe', () => {
  var greet = function (name) { return 'hello ' + name; }
  var exclaim = function (statement) { return statement.toUpperCase() + '!'; }
  var abc = function (x) { return 'hi ' + x }
  var xyz = function (x) { return 'second ' + x }

  it('compose multiple functions', () => {
    expect(pipe(greet, exclaim, abc, xyz)('emad')).toEqual('second hi HELLO EMAD!')
    expect(pipe(greet, exclaim, abc)('emad')).toEqual('hi HELLO EMAD!')
    expect(pipe(greet, exclaim)('emad')).toEqual('HELLO EMAD!')
    expect(pipe(greet)('emad')).toEqual('hello emad')
  })
})
