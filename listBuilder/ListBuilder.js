const ArrayToList = (arr) => {
  if(arr === undefined || Array.isArray(arr) === false){
    throw new Error("Array to list needs a single array")
  } else {
    const generateList = (arr) => {
      if (arr.length > 0){
      let value = arr.shift()
      let result = {
        value: value,
        rest: arr.length !== 0 ? generateList(arr) : null
      }
        return result
    } else {
      console.log("all done")
    }
    }
    
    const list = generateList(arr)

    return list
  }
}

const ListToArray = (list) => {
  if (list === undefined || typeof list !== 'object'){
    throw new Error('requires list as arg')
  } else {
    console.log(list)
  const getValues = (remainingList, emptyArr) => {
      let eA = emptyArr
      if (remainingList.value !== null || remainingList.value !== undefined) {
        console.log(remainingList)
        let val = remainingList.value
        eA.push(val) 
      }
      if (remainingList.rest === null) {
        return eA
      } else {
        console.log(remainingList.rest)
        getValues(remainingList.rest, eA)
      } 
    }  
    return getValues(list, [])
}
}

export { ArrayToList , ListToArray }
