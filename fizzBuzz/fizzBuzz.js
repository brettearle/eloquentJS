export default function FizzBuzz(countArg) {
  const buzz = "buzz";
  const fizz = "fizz";
  let str = "";
  let arr = [];
  for (let count = 1; count <= countArg; count++) {
    str = `${count}`;
    if (count % 3 === 0) {
      str = fizz;
    }
    if (count % 5 === 0) {
      str = buzz;
    }
    if (count % 3 === 0 && count % 5 === 0) {
      str = fizz + buzz;
    }
    arr.push(str);
  }
  console.log(arr);
  return arr;
}
