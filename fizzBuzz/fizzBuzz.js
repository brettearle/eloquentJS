console.log("hello fizz buzz");

const fizzBuzz = () => {
  const buzz = "buzz";
  const fizz = "fizz";
  let str = "";
  for (let count = 0; count <= 100; count++) {
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
    console.log(str);
  }
};

fizzBuzz();
