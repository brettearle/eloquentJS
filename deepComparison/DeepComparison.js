function checkTypeArray(a,b){
  if (Array.isArray(a) && Array.isArray(b)){
    return true
  } else {
    return false
  }
}

function checkArrayDeep(a,b){
  if (a.length !== b.length){
    return false
  } else {
    let result = true
    const length = a.length
    for (let index = 0; index < length; index++) {
      const aEl = a[index]
      const bEl = b[index]
      if (aEl !== bEl){
        result = false
      } 
    }
    return result
  }
}

function checkObjectDeep(a,b){
  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)
  const aVals = Object.values(a)
  const bVals = Object.values(b)
  if (checkArrayDeep(aKeys, bKeys) === false){
    return false
  } else {
    return checkArrayDeep(aVals, bVals)
  }
}

const DeepComparison = (a, b) => {
  if (a === undefined || b === undefined) {
    throw new Error("Error: args list");
    
  } else {
    if (a === null && b !== null || a !== null && b === null){
      return false
    } else if (a === null && b === null) {
      return true
    } else if (typeof a === 'object' && typeof b === 'object') {
      if (checkTypeArray(a,b)){
       return checkArrayDeep(a,b)
      } else {
       return checkObjectDeep(a,b)
      }  
    } else if (a !== null && b !== null){
    return a === b 
    }
  }
} 

export {DeepComparison}
