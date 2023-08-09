var v = '45';

var v = '65'; // var can be re-declared

let l = 45;

l = 65; // let can be re assigned

const c = 65; // value can't be changed

console.log(v);
console.log(l);
console.log(c);


function test() {
    for (let i = 0; i < 2; i++) {
        var test = "abc";
    }
    console.log(test);
}
test();
