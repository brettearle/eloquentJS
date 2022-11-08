function Every(arr, func) {
  if (arr === undefined || func === undefined) {
    throw new Error("Error: args");
  } else {
    let falsey = null
    arr.forEach(element => {
      if (func(element) === false) {
        falsey = true
      } else {
        //do nothing
      }
    });
    return falsey !== null ? false : true
  }
}

function EverySome(arr, func){
  return arr.some(e=>!func(e)) ? false : true
}

export { Every, EverySome };
