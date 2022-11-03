const ReverseArr = (arr)=>{
  let result = []
  if (arr === undefined || Array.isArray(arr) === false){
    throw new Error("one array as param")
  } else {
    arr.map((e)=>{
    result.unshift(e)
    })
    return result
  }
}

const ReverseArrInPlace = (arr)=>{
  const arrLength = arr.length -1
  for (let i=0; i < arrLength; i++){
    const valHolder = arr.pop()
    arr.push(valHolder)
  }
  return arr
}

export { ReverseArr, ReverseArrInPlace };
