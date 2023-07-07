// // constructor function
// function Person() {
//   this.name = 'John';
// }

// // add a property
// Person.prototype.age = 20;

// // eslint-disable-next-line prettier/prettier
// Person.prototype.printAge = function() {
//   console.log(`${this.name} has aged - ${this.age}`);
// };

// // creating an object
// const person1 = new Person();

// person1.printAge(); // 20

// // changing the property value of prototype
// Person.prototype = { age: 50 };

// // eslint-disable-next-line prettier/prettier
// Person.prototype.printAge = function() {
//   console.log(`${this.name} new age is - ${this.age}`);
// };

// // creating new object
// const person3 = new Person();

// person3.printAge(); // 50
// person1.printAge(); // 20

// ---------------------------------------------------------------------------------------

// // *** Inheritence example ***
// function Parent() {
//   // child won't have access to parentVar unil constructor is called
//   this.parentVar = 'parent variable';
//   console.log('inside parent');
// }

// Parent.prototype = {
//   constructor: Parent,
//   // child can access parentVar2 varianle without calling the parent constructor
//   parentVar2: 'parent variable2',
// };

// function Child() {
//   this.childVar = 'child variable';
//   console.log('inside child');
//   // this.__proto__.constructor();
// }

// Child.prototype = Object.create(Parent.prototype);

// var childObj = new Child();

// function Parent2() {
//   this.parentVar = 'parnet2 variable';
//   console.log('inside parent2');
// }

// Child.prototype = Object.create(Parent2.prototype);

// var childObj2 = new Child();

// console.log(childObj.parentVar);
// console.log(childObj.parentVar2);
// console.log(childObj2.parentVar);

// var childObj3 = new Child();

// console.log(childObj3.parentVar);
// console.log(childObj2 instanceof Parent2);

// ---------------------------------------------------------------------------------------

// *** prototype with objects ***
// const parent = {
//   value: 2,
//   method() {
//     console.log('value in parent is - ', this.value);
//     return this.value + 1;
//   },
// };

// const child = {
//   // override the value
//   value: 3,
//   // override the parent method
//   // method() {
//   //   return this.value + 1;
//   // },
//   childMethod() {
//     // this.__proto__.method will call the parent method;
//     return this.value + 1 + this.__proto__.method();
//   },
// };

// child.__proto__ = parent;

// console.log(parent.method());
// console.log(child.method());
// console.log(child.childMethod());

// ---------------------------------------------------------------------------------------

// *** one more example of prototype ***

// let animal = {
//   name: 'Animal',
//   eat() {
//     console.log(`${this.name} eats.`);
//   },
// };

// let rabbit = {
//   __proto__: animal,
//   name: 'Rabbit',
//   eat() {
//     // that's how super.eat() could presumably work
//     this.__proto__.eat.call(this); // (*)
//   },
// };

// rabbit.eat();
// animal.eat();

// --------------------------------------------------------------------------------------

// *** one more example of prototype ***

// let animal = {
//   name: 'Animal',
//   eat() {
//     console.log(`${this.name} eats.`);
//   },
// };

// let rabbit = {
//   __proto__: animal,
//   eat() {
//     // ...bounce around rabbit-style and call parent (animal) method
//     this.__proto__.eat.call(this); // (*)
//   },
// };

// let longEar = {
//   __proto__: rabbit,
//   eat() {
//     // ...do something with long ears and call parent (rabbit) method
//     this.__proto__.eat.call(this); // (**)
//   },
// };

// longEar.eat(); // Error: Maximum call stack size exceeded
// because - rabbit.eat calls itself in the endless loop, because it can’t ascend any further.

// Solution of above -

let animal = {
  name: 'Animal',
  eat() {
    // animal.eat.[[HomeObject]] == animal
    console.log(`${this.name} eats.`);
  },
};

let rabbit = {
  __proto__: animal,
  name: 'Rabbit',
  eat() {
    // rabbit.eat.[[HomeObject]] == rabbit
    super.eat();
  },
};

let longEar = {
  __proto__: rabbit,
  name: 'Long Ear',
  eat() {
    // longEar.eat.[[HomeObject]] == longEar
    super.eat();
  },
};

// works correctly
longEar.eat(); // Long Ear eats.
