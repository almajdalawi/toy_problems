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
  result = ''
  set = new Set()
  arr1 = str1.split('')
  arr2 = str2.split('')

  arr2.forEach(char => {
    set.add(char)
  });

  arr1.forEach(char => {
    if (set.has(char)) { result += char }
  })

  return result
};

console.log(commonCharacters('acexivou', 'aegihobu'))
