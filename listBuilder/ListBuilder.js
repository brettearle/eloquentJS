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
    if(list.value !== undefined){
      let ll = list
      let head = [list.value]
      while (ll.rest !== null){
       ll = ll.rest
       head.push(ll.value)
    }
      return head
    } else {
      return []
    }  
    }
}

const Prepend = (value, list) => {
  if(value === undefined || list === undefined || typeof list !== 'object'){
    throw new Error('needs a value and list')
  } else {
    return {value: value, rest: list}
  }
}

const GetNth = (nth, list) => {
  let ll = list.rest
  for(let i = 0; i <= nth ; i++){
   ll.rest ? ll = ll.rest : console.log('rest is null') 
   if(i === nth ){
    return {
      value: ll.value,
      rest: ll.rest
    }     
   } 
  }
  }

export { ArrayToList , ListToArray, Prepend, GetNth }
