/**
 * Write a function that takes an integer as input,
 * and returns the number of bits
 * that are equal to one in the binary representation of that number.
 * You can guarantee that input is non-negative.
 * Example: The binary representation of 1234 is 10011010010,
 * so the function should return 5 in this case
 */

const bitCounting = (num) => {
  let binary = num.toString(2)

  counter = 0
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == 1) { counter++ }
  }

  return counter
};


///////////


describe('bitCounting', () => {
  it('Checks the number of bits in the binary representative of a number', () => {
    expect(bitCounting(1234)).toEqual(5)
    expect(bitCounting(0)).toEqual(0)
    expect(bitCounting(1)).toEqual(1)
    expect(bitCounting(3)).toEqual(2)
  })
})