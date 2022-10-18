/**
 * Given a single input string, write a function that outputs an array of strings with every possible
 * combination of letters.
 *
 * At first, don't worry about repeated (duplicate) strings.
 *
 * What time complexity is your solution?
 *
 * Extra credit: De-duplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */




// const allAnagrams = function (string) {
//   // https://stackoverflow.com/questions/39927452/recursively-print-all-permutations-of-a-string-javascript

//   if (string.length < 2) return string

//   let anagrams = []
//   for (let i = 0; i < string.length; i++) {
//     if (string.indexOf(string[i]) != i) continue

//     let remainingString = string.slice(0, i) + string.slice(i + 1, string.length)

//     for (let subPermutation of allAnagrams(remainingString)) {
//       anagrams.push(string[i] + subPermutation)
//     }
//   }

//   return anagrams
// };


const allAnagrams = function (string) {
  let arraySrt = string.split("");
  let uniqeStr = []
  arraySrt.forEach(element => {
    if (!uniqeStr.includes(element)) uniqeStr.push(element)
  })

  let anagrams = [];

  const word = (arr) => {
    if (arr.length === uniqeStr.length) {
      anagrams.push(arr.join(""));
      return;
    }
    uniqeStr.forEach((element) => {
      if (arr.indexOf(element) === -1) {
        word(arr.concat(element));
      }
    });
  };

  word([]);
  return anagrams;
};


///////////////////


describe('allAnagrams', () => {
  it('Returnts all possible anagrams using the unique characters', () => {
    expect(allAnagrams('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
    expect(allAnagrams('abca')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
    expect(allAnagrams('abcd')).toEqual([
      'abcd', 'abdc', 'acbd',
      'acdb', 'adbc', 'adcb',
      'bacd', 'badc', 'bcad',
      'bcda', 'bdac', 'bdca',
      'cabd', 'cadb', 'cbad',
      'cbda', 'cdab', 'cdba',
      'dabc', 'dacb', 'dbac',
      'dbca', 'dcab', 'dcba'
    ])
  })

})