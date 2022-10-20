/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of allBrackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *	"())"
 */


function balancedParens(input) {
  let inputArr = input.split('')
  let char
  let tempBrackets = []

  if (inputArr.length < 1) return 'Empty string!'
  if (inputArr[0] == '}' || inputArr[0] == ')' || inputArr[0] == ']') return false  // to reduce time complixity

  for (let i = 0; i < inputArr.length; i++) {
    char = inputArr[i]

    if (char == '{' || char == '(' || char == '[') {
      tempBrackets.push(char)
    } else if (char == ')' || char == '}' || char == ']') {
      if (char == ')' && tempBrackets[tempBrackets.length - 1] == '(') tempBrackets.pop()
      else if (char == '}' && tempBrackets[tempBrackets.length - 1] == '{') tempBrackets.pop()
      else if (char == ']' && tempBrackets[tempBrackets.length - 1] == '[') tempBrackets.pop()
      else return false
    }
  }

  return !!!tempBrackets.length
}


//////////////


describe('balancedParens', () => {
  it('Checks if all the allBrackets in a string are closed correctly', () => {
    expect(balancedParens('[()]')).toEqual(true)
    expect(balancedParens('{}{abc}[123](())')).toEqual(true)
    expect(balancedParens('[(])')).toEqual(false)
    expect(balancedParens('[')).toEqual(false)
    expect(balancedParens('}{')).toEqual(false)
    expect(balancedParens(')')).toEqual(false)
    expect(balancedParens('([{]')).toEqual(false)
    expect(balancedParens('')).toEqual('Empty string!')
  })
})
