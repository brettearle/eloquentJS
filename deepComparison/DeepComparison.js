const DeepComparison = (a, b) => {
  if (a === undefined || b === undefined) {
    throw new Error("Error: args list");
    
  } else {
    if (a !== null && b !== null){
    return a === b 
    }
  }
} 

export {DeepComparison}
