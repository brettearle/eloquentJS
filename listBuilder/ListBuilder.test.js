import { ArrayToList , ListToArray, Prepend, GetNth } from './ListBuilder'
import { expect, test } from '@jest/globals'

describe('ArrayToList', () => {
    
  test("type of ArrayToList is a function", ()=>{
    expect(typeof ArrayToList).toEqual('function')
  })

  test("ArrayToList should throw when no arg provided", () => {
    expect(() => {
      expect(ArrayToList())
    }).toThrow("Array to list needs a single array")
  })

  test("ArrayToList should throw when provided with argument other than array", () => {
    expect(() => {
      expect(ArrayToList(''))
    }).toThrow("Array to list needs a single array")
  })

  test("ArrayToList should return a object", () => {
    const got = typeof ArrayToList([1,2,3])
    const exp = 'object'
    expect(got).toEqual(exp)
  })

  test("ArrayToList([1, 2]) returns {value: 1, rest: {value: 2, rest: null}}", () => {
    const got = ArrayToList([1,2])
    const exp = {
      value: 1,
      rest: {
        value: 2,
        rest: null
      }
    }
    expect(got).toEqual(exp)
  })

  test("ArrayToList([1, 2, 3]) returns {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}", () => {
    const got = ArrayToList([1,2,3])
    const exp = {
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null
        }
      }
    }
    expect(got).toEqual(exp)
  })

})

describe('ListToArray', () => {

  test('ListToArray should be a function', () => {
    expect(typeof ListToArray).toEqual('function')
  })

  test('should return a array', () => {
    const got = typeof ListToArray({})
    const exp = typeof []
    expect(got).toEqual(exp)
  })
  
  test('called with no args throws "requires list as arg"', () => {
    expect(() => {
      expect(ListToArray())
    }).toThrow('requires list as arg')
  })

  test('called with some other type than object throws "requires list as arg"', () => {
    expect(() => {
      expect(ListToArray(""))
    }).toThrow('requires list as arg')
  })

 test('given {value: 1, rest: {value: 2, rest: null}} return [1,2]', () => {
   const got = ListToArray({value: 1, rest: {value: 2, rest: null}})
   const exp = [1,2]
   expect(got).toEqual(exp)
 })

 test('given a 3 node list with value 1 v.. 2 v.. 3 return [1,2,3]', () => {
  const got = ListToArray({
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  })
   const exp = [1,2,3]
   expect(got).toEqual(exp)
 }) 

})

describe('Prepend', () => {

  test('prepend is a type function', () => {
    expect(typeof Prepend).toEqual('function')
  })

  test('prepend should return a object', () => {
    const got = Prepend("", {})
    const exp = 'object'
    expect(typeof got).toEqual(exp)
  })

  test('prepend should throw when not called with something other than a value and list', () => {
    expect(() => {
      expect(Prepend())
    }).toThrow('needs a value and list')
  })

  test('prepend should return a added value to list and return new list', () => {
    const got = Prepend('im the new value', {value: "old", rest: {value: "old 2", rest: null}})   
    const exp = {value: "im the new value", rest:{
      value: 'old', rest: {
        value: 'old 2',
        rest: null
      }
    }}
    expect(got).toEqual(exp)
  })
})

describe('GetNth', () => {

  test('type of GetNth is function', () => {
    expect(typeof GetNth).toEqual('function')
  })

  test('GetNth returns the node that nth is starting from 0 index', () => {
    const got = GetNth(1, {value:1, rest:{value:2, rest:null}})
    const exp = {value: 2, rest: null}
    expect(got).toEqual(exp)
  })

})

