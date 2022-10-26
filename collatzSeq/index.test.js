/*
The following iterative sequence is defined for the set of positive integers:
n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
Which starting number, under one million, produces the longest chain?
NOTE: Once the chain starts the terms are allowed to go above one million.
*/

/**
 * Wiki link
 * https://en.wikipedia.org/wiki/Collatz_conjecture
 */

/**
 * What is the time complexity for your solution ?
 */

/**
 * Write the unit tests that cover your solution
 */


// Loop solution
function collatzSeq(number) {
    let result = []
    while (number != 1) {
        result.push(number)

        if (number % 2 != 0) {
            number = 3 * number + 1
        } else
            number = parseInt(number / 2)
    }

    result.push(number)

    return result
}


// Recarsion solution
function collatz(num) {
    let result = []
    result.push(num)
    recurse(num)

    function recurse(num) {
        if (num == 1) {
            return result
        } else {
            if (num % 2 != 0) {
                num = 3 * num + 1
                result.push(num)
                return recurse(num)
            } else {
                num = parseInt(num / 2)
                result.push(num)
                return recurse(num)
            }
        }
    }
    return result
}


///////////

describe('collatzSeq', () => {
    it('creates a Collatz Seq starting from the given number', () => {
        expect(collatzSeq(13)).toEqual([13, 40, 20, 10, 5, 16, 8, 4, 2, 1])
        expect(collatz(13)).toEqual([13, 40, 20, 10, 5, 16, 8, 4, 2, 1])
        expect(collatzSeq(27)).toEqual([27, 82, 41, 124, 62, 31, 94, 47, 142, 71, 214, 107, 322, 161, 484, 242, 121, 364, 182, 91,
            274, 137, 412, 206, 103, 310, 155, 466, 233, 700, 350, 175, 526, 263, 790, 395, 1186, 593, 1780, 890, 445, 1336, 668,
            334, 167, 502, 251, 754, 377, 1132, 566, 283, 850, 425, 1276, 638, 319, 958, 479, 1438, 719, 2158, 1079, 3238, 1619,
            4858, 2429, 7288, 3644, 1822, 911, 2734, 1367, 4102, 2051, 6154, 3077, 9232, 4616, 2308, 1154, 577, 1732, 866, 433,
            1300, 650, 325, 976, 488, 244, 122, 61, 184, 92, 46, 23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1])
        expect(collatz(27)).toEqual([27, 82, 41, 124, 62, 31, 94, 47, 142, 71, 214, 107, 322, 161, 484, 242, 121, 364, 182, 91,
            274, 137, 412, 206, 103, 310, 155, 466, 233, 700, 350, 175, 526, 263, 790, 395, 1186, 593, 1780, 890, 445, 1336, 668,
            334, 167, 502, 251, 754, 377, 1132, 566, 283, 850, 425, 1276, 638, 319, 958, 479, 1438, 719, 2158, 1079, 3238, 1619,
            4858, 2429, 7288, 3644, 1822, 911, 2734, 1367, 4102, 2051, 6154, 3077, 9232, 4616, 2308, 1154, 577, 1732, 866, 433,
            1300, 650, 325, 976, 488, 244, 122, 61, 184, 92, 46, 23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1])
    })
})
