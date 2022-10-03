console.log("hello hashPyramid");

const hashPyramid = () => {
  let str = "";

  for (let count = 0; count <= 7; count++) {
    const hash = "#";
    str = str + hash;
    console.log(str);
  }
};

hashPyramid();
