const SumOfRange = (s, f) => {
  if (s === undefined || f === undefined) {
    throw "range only takes 2 int args, start and end";
  } else {
    let result = 0;
    for (let i = s; i <= f; i++) {
      result = result + i;
    }
    return result;
  }
};

const Range = (s, f, step) => {
  const starter = s > f ? f : s
  const finisher = s > f ? s : f
  if (s === undefined || f === undefined) {
    throw new Error("start or finished undefined");
  } else {
    if (step === undefined) {
      let result = [];
      for (let i = starter; i <= finisher; i++) {
        result.push(i);
      }
      return result;
    } else {
      let r = [];
      const abStep = Math.abs(step)
      for (let i = starter; i <= finisher; i+= abStep) {
        r.push(i);
      }
      r = step > -1 ? r.sort((a,b)=>a-b) : r.sort((a,b)=>b-a)
      return r;
    }
  }
};

export { SumOfRange, Range };
