function Flatten(arr) {
 if (arr === undefined || Array.isArray(arr) === false){
   throw new Error("Error: args")
 } else {
   const result = arr.reduce((p, c) => {
   return p.concat(c) 
   }, [])  
   return result
 }
}

export {Flatten}
