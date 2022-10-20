/**
 * Write a function that takes an integer as input,
 * and returns the number of bits
 * that are equal to one in the binary representation of that number.
 * You can guarantee that input is non-negative.
 * Example: The binary representation of 1234 is 10011010010,
 * so the function should return 5 in this case
 */

const bitCounting = (num) => {
  // let binary = num.toString(2)

  let reveresdBinary = []
  while (num > 0) {
    reveresdBinary.push(num % 2)
    num = Math.floor(num / 2);
  }

  // binary = reveresdBinary.reverse()
  let binary = []
  counter = 0
  for (let i = reveresdBinary.length - 1; i >= 0; i--) {
    binary.push(reveresdBinary[i])
    if (reveresdBinary[i]) { counter++ }
  }

  return counter
};


function binaryToDeci(binary) {
  let binaryArr = binary.split('')
  reveresdBinary = binaryArr.reverse()

  deci = 0
  for (let i = 0; i < reveresdBinary.length; i++) {
    if (reveresdBinary[i] == 1) { deci += Math.pow(2, i) }
  }

  return deci
}


///////////


describe('bitCounting', () => {
  it('converts the decimil number to a binary number then returns the number of bits in the binary representative of a number', () => {
    expect(bitCounting(1234)).toEqual(5)
    expect(bitCounting(0)).toEqual(0)
    expect(bitCounting(1)).toEqual(1)
    expect(bitCounting(3)).toEqual(2)
  })
})

describe('binaryToDeci', () => {
  it('converts the binary number to a decimil number', () => {
    expect(binaryToDeci('10011010010')).toEqual(1234)
    expect(binaryToDeci('1001100000010010')).toEqual(38930)
    expect(binaryToDeci('0')).toEqual(0)
    expect(binaryToDeci('1')).toEqual(1)
    expect(binaryToDeci('11')).toEqual(3)
  })
})
