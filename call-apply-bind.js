var person = {
  name: 'James Smith',
  firstName: this.name,
  marks: function(math, english) {
    console.log(
      `${this.name} has scored math - ${math} and english - ${english}`,
    );
  },
};

person.marks(90, 70);
// output: "James Smith of class 5th has scored math - 90 and english - 70

/**
 * call example
 * it call is the function instantly
 */
person.marks.call({ name: 'Jim Smith' }, 90, 70);
// output: "Jim Smith has scored math - 90 and english - 70"

/**
 * apply example
 * it call is the function instantly
 * apply is different from bind as it takes array list as the function input
 */
person.marks.apply({ name: 'kim Smith' }, [90, 70]);
// output: "kim Smith has scored math - 90 and english - 70"

/**
 * bind example
 * binds the function with the object, which can be called later
 */
var helloFunc = person.marks.bind({ name: 'Jim Smith' });
helloFunc(90, 70);
// output: Jim Smith has scored math - 90 and english - 70

// bind example 2
var helloFunc2 = person.marks.bind({ name: 'kim Smith' }, 90, 70);
helloFunc2();
// output: kim Smith has scored math - 90 and english - 70

// another example of apply
function personContainer() {
  var person = {
    name: 'James Smith',
    hello: function() {
      console.log(
        `${this.name} has scored math - ${arguments[0]} and english - ${arguments[1]}`,
      );
    },
  };
  person.hello.apply(person, arguments);
}
personContainer(90, 70);
// // output: "James Smith has scored math - 90 and english - 70", note: arguments[0] = 90 , arguments[1] = 70
