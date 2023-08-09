// function changeHeaderWithArrow() {
//     this.headerColor = "white"
//     this.main = "main";
    
//     setTimeout(() => {
//       this.headerColor = "red";
  
//       return false;
//     }, 100);
  
//     return false;
//   }

// function changeHeaderWithFunction() {
//     this.headerColor = "white";
//     this.main = "main";
    
//     setTimeout(function test() {
//       this.headerColor = "red";
  
//       return false;
//     }, 100);
  
//     return false;
//   }
  
//   let cha = new changeHeaderWithArrow();
//   let chf = new changeHeaderWithFunction();
  
//   setTimeout(() => {
//     console.log(cha.headerColor);   // red
//     console.log(cha.main);   // main
//     console.log(chf.headerColor);   // white
//     console.log(chf.main);   // main
//   }, 200);

// --------------------------------------------------------------------------------
// Nested Arrow

// function level1() {
//     this.l1 = '2';
//     (function level() {
//         this.l2 = '2';
//         (() => {
//             console.log(this.l1);    // 1
//             console.log(this.l2);    // 2
//         })()
//     })();
// }
// level1();