function Employee(name, profession) {
  this.name = name;
  this.profession = profession;

  this.test = function () {
    console.log('you are in test');
  };
} // Employee () is the constructor function because we use the new keyword below to invoke it.

var richard = new Employee('Richard', 'Developer'); // richard is a new object we create from the Employee () constructor function.

console.log(richard.name); //richard
console.log(richard.profession); // Developer
richard.test();
