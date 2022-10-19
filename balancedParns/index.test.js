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
 *   make your solution work for all types of brackets
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


class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}


class Stack {
  constructor() {
    this.top = null
  }

  isEmpty() {
    if (this.top === null) return true
    else return false
  }

  push(newValue) {
    if (newValue instanceof Node) return 'Please enter a value and it will converted to Node automaticly'

    let newNode = new Node(newValue)
    newNode.next = this.top
    this.top = newNode
  }

  pop() {
    if (this.isEmpty()) return 'The stack is empty!'

    let oldTop = this.top
    this.top = this.top.next
    oldTop.next = null

    return oldTop.value
  }
}


function balancedParens(input) {
  let inputArr = input.split('')
  if (inputArr.length < 1) return 'Empty string!'

  let stack = new Stack()

  let char
  for (let i = 0; i < inputArr.length; i++) {
    char = inputArr[i]

    if (char == '(' || char == '{' || char == '[') {
      stack.push(char)
    } else if (char == ')' || char == '}' || char == ']') {
      if (stack.isEmpty()) return false
      else {
        if (char == ')' && stack.top.value == '(') stack.pop()
        else if (char == '}' && stack.top.value == '{') stack.pop()
        else if (char == ']' && stack.top.value == '[') stack.pop()
        else return false
      }
    }
  }

  if (stack.isEmpty()) return true
  else return false
}



//////////////



describe('Stack', () => {
  let stack = new Stack()
  stack.push(5)
  stack.push(true)
  stack.push('abc')
  stack.push('emad')
  stack.pop()

  let stack2 = new Stack()

  it('Creates new stack, push into it, and pop from it', () => {
    expect(stack.top.value).toEqual('abc')
    expect(stack.top.next.value).toEqual(true)
    expect(stack.top.next.next.value).toEqual(5)
  })

  it('Create empty stack', () => {
    expect(stack2.top).toEqual(null)
  })
})


describe('balancedParens', () => {
  it('Checks if all the brackets in a string are closed correctly', () => {
    expect(balancedParens('[()]')).toEqual(true)
    expect(balancedParens('{}{abc}[123](())')).toEqual(true)
    expect(balancedParens('[(])')).toEqual(false)
    expect(balancedParens('[')).toEqual(false)
    expect(balancedParens('}{')).toEqual(false)
    expect(balancedParens(')')).toEqual(false)
    expect(balancedParens('')).toEqual('Empty string!')
  })
})