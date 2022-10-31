const SumOfRange = (s, f)=>{
    try {
        if ( s === undefined || f === undefined){
         throw "range only takes 2 int args, start and end"
        } else {
            let result = 0
            for(let i = s; i <= f; i++){
                result = result + i  
            }
            return result
        }
    } catch (err){
       throw err 
    }
}

const Range = (s, f)=>{ 
   if (s === undefined || f === undefined){
       throw new Error("start or finished undefined")
   } else {
    let result = []
    for(let i = s; i <= f; i++) {
        result.push(i)
    }
       return result
   }
}

export { SumOfRange, Range } 

