import {expect, test} from "@jest/globals"
import { Every } from "./every"

describe("Every", ()=>{

  test("is a function", ()=>{
    expect(typeof Every).toEqual("function")
  })

  test("when called without arr and func throws",()=>{
    expect(()=>{
      Every()
    }).toThrow("Error: args")
  })

  
})
