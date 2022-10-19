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
  let flag = true
  inputArr.forEach(char => {
    flag = true
    if (char == '(' || char == '{' || char == '[') stack.push(char)
    else if (char == ')' || char == '}' || char == ']') {

      if (flag && stack.isEmpty()) { console.log('aaaaaaaaaa'); { flag = false; return false } }

      else {
        switch (true) {
          case (char == ')' && stack.top.value == '('):
            stack.pop()
            break
          case (char == '}' && stack.top.value == '{'):
            stack.pop()
            break
          case (char == ']' && stack.top.value == '['):
            stack.pop()
            break
          default:
            flag = false
            return false
        }
      }
    }
  })

  if (flag && stack.isEmpty()) return true
  else return false
}



//////////////



