const SumOfRange = (s, f)=>{
    if ( s === undefined || f === undefined){
     throw "range only takes 2 int args, start and end"
    } else {
        let result = 0
        for(let i = s; i <= f; i++){
            result = result + i  
        }
        return result
    }
}

const Range = (s, f, step)=>{ 
   if (s === undefined || f === undefined){
       throw new Error("start or finished undefined")
   } else {
    if (step === undefined){
     let result = []
     for(let i = s; i <= f; i++) {
         result.push(i)
      }
         return result
    } else {
      let r = []
      for(let i = s; i <= f; i += step) {
        r.push(i)        
      }
      return r
    }
   }
}

export { SumOfRange, Range } 

