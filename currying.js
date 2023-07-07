var add = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};
console.log(add(2)(3)(4)); //output 9
console.log(add(3)(4)(5)); //output 12
