function Loop(value, testFunc, updateFunc, bodyFunc) {
  if (value === undefined || testFunc === undefined || updateFunc === undefined || bodyFunc === undefined) {
    throw new Error("Error: args. (value, testFunc, upDateFunc, bodyFunc)")
  } else {
    let count = value
    let result = value
    while (testFunc(count) === true){
     let r = bodyFunc(result)
      count = updateFunc(count)
      result = r
    }
    return result
}
}
export {Loop}
