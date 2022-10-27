/**
 * Write a function `commonCharacters(str1, str2)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `str1`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

const commonCharacters = (str1, str2) => {
  let result = ''
  let setOfCharStr2 = new Set()
  let arrOfCharStr1 = str1.split('')
  let arrOfCharStr2 = str2.split('')

  arrOfCharStr2.forEach(char => {
    setOfCharStr2.add(char)
  });

  arrOfCharStr1.forEach(char => {
    if (setOfCharStr2.has(char)) { result += char }
  })

  return result
};


const commonCharactersManyStrings = (str1, ...args) => {
  let result = ''
  let arrayOfSets = []
  let arrOfCharStr1 = str1.split('')
  let unique

  for (let i = 0; i < args.length; i++) {
    unique = new Set()
    arrayOfChar = args[i].split('')

    arrayOfChar.forEach(char => {
      unique.add(char)
    });
    arrayOfSets.push(unique)
  }

  arrOfCharStr1.forEach(char => {
    let isCommon = true
    for (let i = 0; i < arrayOfSets.length; i++) {
      if (!arrayOfSets[i].has(char)) { isCommon = false }
    }
    if (isCommon) { result += char }
  })

  return result
};

console.log(commonCharacters('acexivou', 'aegihobu'))

console.log(commonCharactersManyStrings('acexivou', 'aegihobu'))
