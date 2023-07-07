// // *** Normal extend ***

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} runs with speed ${this.speed}.`);
//   }
//   stop() {
//     this.speed = 0;
//     console.logg(`${this.name} stands still.`);
//   }
// }

// let animal = new Animal('My animal');

// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} hides!`);
//   }
// }

// let rabbit = new Rabbit('White Rabbit');

// rabbit.run(5); // White Rabbit runs with speed 5.
// rabbit.hide(); // White Rabbit hides!

// ---------------------------------------------------------------------------------------

// *** Any expression is allowed after extends ***
function f(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

class User extends f('Hello') {}

new User().sayHi();
