const SumOfRange = (s, f)=>{
    const args = [...arguments]
    try {
        if (args.length !== 2){
         throw "range only takes 2 int args, start and end"
        }
    }
    catch (err){
       throw err 
    }
}

export { SumOfRange } 

