// let user  = {
//     name:'ram',
//     email:'',
//     password:''
// }

let user1 = {
  name: "user",
  email: "",
  password: "",
  getName() {
    // const func = () => {
    //   console.log(this); //
    //   return this.name;
    // };

    // func();
    return this.name;
  },
};

// console.log(user1.getName());

//* this => obj

// function globalFunc() {
//   console.log(this);
// }

// globalFunc();

//! class
class User {
  //   name;
  //   email;
  #password; //? private property
  // constructor
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
  }

  getPassword() {
    return this.#password;
  }
}

const ram = new User("Ram", "ram@gmail.com", "123456");
const hari = new User("hari", "ram@gmail.com", "hari123");

// console.log(ram);
// console.log(ram.name);
console.log(ram.getPassword()); //ram
console.log(hari.getPassword()); // hari
// console.log(ram.#password); //

// class Student -> name email password , roll, phone , faculty

class Student extends User {
  constructor(name, email, password, roll, phone, faculty) {
    super(name, email, password); //? calling parent class constructor
    this.roll = roll;
    this.phone = phone;
    this.faculty = faculty;
  }

  // method
  // getPassword() {
  //   return this.#password;
  // }
}

// instance / obj
const student1 = new Student(
  "john",
  "john@gmail.com",
  "1234567",
  12,
  "98767656546",
  "BCT",
);

// console.log(student1);
// console.log(Student.name);
// console.log(student1.getPassword());

// !static
// properties
// methods

// calculator

class Calculator {
  // add
  static app_name = "Simple Calculator";

  static add(a, b) {
    return a + b;
  }

  // sub
  static sub(a, b) {
    return a - b;
  }
  // div
  static div(a, b) {
    return a / b;
  }
}

//? getter / setter

// const calc1 = new Calculator();
// console.log(calc1.app_name);
// console.log(calc1.add(12, 23));
// console.log(calc1.sub(12, 23));
console.log(Calculator.app_name);
console.log(Calculator.add(12, 3));
