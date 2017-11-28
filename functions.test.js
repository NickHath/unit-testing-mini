const functions = require('./functions');

test('returnTwo returns 2', () => {
  let result = functions.returnTwo();
  expect(result).toBe(2);
})

describe('greeting returns correct string', () => {
  test('greeting properly greets Jill', () => {
    let name = 'James';
    let result = functions.greeting(name);
    expect(result).toBe('Hello, James.');
  })  
  test('greeting properly greets Jill', () => {
    let name = 'Jill';
    let result = functions.greeting(name);
    expect(result).toBe('Hello, Jill.');
  })  
})

describe('math functions', () => {
  describe('add works with two numbers', () => {
    test('adds 1 and 2 to get 3', () => {
      let num1 = 1, num2 = 2;
      let result = functions.add(num1, num2);
      expect(result).toBe(3);
    })
    test('adds 5 and 9 to get 14', () => {
      let num1 = 5, num2 = 9;
      let result = functions.add(num1, num2);
      expect(result).toBe(14);
    })  
  })  

  describe('multiplication works with two numbers', () => {
    test('multiplies -1 and 15 to get -15', () => {
      let num1 = -1, num2 = 15;
      let result = functions.multiply(num1, num2);
      expect(result).toBe(-15);
    })
    test('multiplies 6 and 0 to get 0', () => {
      let num1 = 6, num2 = 0;
      let result = functions.multiply(num1, num2);
      expect(result).toBe(0);
    }) 
  }) 

  describe('division works with two numbers', () => {
    test('divides 15 by 3 to get 5', () => {
      let num1 = 15, num2 = 3;
      let result = functions.divide(num1, num2);
      expect(result).toBeCloseTo(5);
    })
    test('divides 6 by 1 to get 6', () => {
      let num1 = 6, num2 = 1;
      let result = functions.divide(num1, num2);
      expect(result).toBe(6);
    })
  })

  describe('subtraction works with two numbers', () => {
    test('subtracts 9 from 15 to get 6', () => {
      let num1 = 15, num2 = 9;
      let result = functions.subtract(num1, num2);
      expect(result).toBe(6);
    })
    test('subtracts -10 from -5 to get 5', () => {
      let num1 = -5, num2 = -10;
      let result = functions.subtract(num1, num2);
      expect(result).toBe(5);
    })
    test('new form: subtracts 16 from 20 to get 4', () => {
      expect(functions.subtract(20, 16)).toBe(4);
    })
  })
})
