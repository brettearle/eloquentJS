import { expect, test } from '@jest/globals'
import { Flatten } from './Flatten'

describe("Flatten", ()=>{
  test("should be a function", ()=>{
    expect(typeof Flatten).toEqual('function')
  })

  test("should take array as argument and throw if not", ()=>{
    expect(()=>{
      expect(Flatten())
    }).toThrow("Error: args")
  })

  test("if arr arg return arr", ()=>{
    const got = Flatten([1,2])
    const exp = [1,2]
    expect(got).toEqual(exp)
  })

  test("called with array of arrays returns a flattened array", ()=>{
    const got = Flatten([[1,2],[3,4]])
    const exp = [1,2,3,4]
    expect(got).toEqual(exp)
  })
})


