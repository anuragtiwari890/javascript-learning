// console.log(1);
// setTimeout(function () {
//     console.log(2);
// }, 0);
// console.log(3);
// console.log(4);
// console.log(5);

// OP - 1 3 4 5 2

//-----------------------------------------------------------------------------------

// function main(){
//     console.log('A');
//     setTimeout(
//         function exec(){ console.log('B'); }
//     , 0);
//     runWhileLoopForNSeconds(3);
//     console.log('C');
// }
// main();
// function runWhileLoopForNSeconds(sec){
//     let start = Date.now(), now = start;
//     while (now - start < (sec*1000)) {
//         now = Date.now();
//     }
// }

// // OP - A C B

//-----------------------------------------------------------------------------------

// for (var i = 0; i < 5; i++) {
//     setTimeout(function test () {
//         console.log(i);
//     }, 0);
// }

// // OP - 5 5 5 5 5

//-----------------------------------------------------------------------------------

// for (let i = 0; i < 5; i++) {
//     setTimeout(function test () {
//         console.log(i);
//     }, 0);
// }

// OP - 0 1 2 3 4

//-----------------------------------------------------------------------------------

// setTimeout(function temp() {
//     console.log("In temp");
// }, 0);

// // OP - A C B

//-----------------------------------------------------------------------------------
// console.log("In temp");
// setTimeout(() => {
//     console.log("YEs I am ins")
//   }, 1000).unref()

// console.log("In temp2");