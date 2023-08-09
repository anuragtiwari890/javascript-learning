// function level1() {
//   this.name = 'Anurag';

//   function level2() {
//     console.log('hwh', this.name);
//   }

//   var level21 = () => {
//     console.log(this.name);
//   };

//   level2();
//   level21();
//   leveloutWithFunction();
//   leveloutWithArrow();
// }

// function leveloutWithFunction() {
//   console.log(this.name);
// }

// leveloutWithArrow = () => {
//   console.log(this.name);
// };

// level1();

// --------------------------------------------------------------------------------

// var myVar = 100;

// function foo() {
//   console.log(myVar);
// }

// foo(); // Static scope: 100; Dynamic scope: 100

// (function () {
//   var myVar = 50;
//   foo(); // Static scope: 100; Dynamic scope: 50
// })();

// // Higher-order function
// (function (arg) {
//   var myVar = 1500;
//   arg(); // Static scope: 100; Dynamic scope: 1500
// })(foo);

// --------------------------------------------------------------------------------

// var result = [];

// for (var i = 0; i < 5; i++) {
//   result[i] = function() {
//     console.log(i);
//   }
// }

// result[0]();
// result[1]();
// result[2]();
// result[3]();
// result[4]();

// var result = [];

// for (var i = 0; i < 5; i++) {
//   result[i] = (function inner(x) {
//     // additional enclosing context
//     return function() {
//       console.log(x);
//     }
//   })(i);
// }

// result[0](); // 0, expected 0
// result[1](); // 1, expected 1
// result[2](); // 2, expected 2
// result[3](); // 3, expected 3
// result[4](); // 4, expected 4

// --------------------------------------------------------------------------------

// function iCantThinkOfAName(num, obj) {
  // This array variable, along with the 2 parameters passed in,
  // are 'captured' by the nested function 'doSomething'
//   var array = [1, 2, 3];
//   function doSomething(i) {
//     num += i;
//     array.push(num);
//     console.log('num: ' + num);
//     console.log('array: ' + array);
//     console.log('obj.value: ' + obj.value);
//   }

//   return doSomething;
// }

// var referenceObject = { value: 10 };
// var foo = iCantThinkOfAName(2, referenceObject); // closure #1
// var bar = iCantThinkOfAName(6, referenceObject); // closure #2

// foo(2);
// console.log('-----------------');
// bar(2);
// console.log('-----------------');
// referenceObject.value++;
// foo(4);
// console.log('-----------------');
// bar(4);
// console.log('-----------------');


