//oops
let personn = {
  Name: "Sree",
  age: 20,
  interest: ["Creating,teaching"],
  isAlive: true,
  address: {
    city: "Chennai",
    state: "tamil Nadu",
  },
  greeting: function () {
    let mesg = `My name is ${this.Name},i love ${this.interest}`;
    console.log(mesg);
  },
};
console.log(personn.Name);
console.log(personn.address.city);
//console.log(personn.greeting());
personn.greeting();

//factory functions//camel case:myFirstName
function createPerson(name) {
  return {
    name,
    //name: name,
    greeting() {
      let msg = `My name is ${this.name}`;
      console.log(msg);
    },
  };
}
let sai = createPerson("sai");
sai.greeting();
let pranavi = createPerson("pranavika");
pranavi.greeting();

//constructor functions//pascal case:MyFirstName
function Person(name) {
  this.name = name;
  this.greeting = function () {};
}

//class-refer this for class,constructor,this,super
class Student {
  constructor(name, age, roll, mob) {
    this.name = name;
    this.age = age;
    this.roll = roll;
    this.mob = mob;
  }
}
//student1 = new Student("banu", 18, 01, 8098329300);
//student2 = new Student("Ram", 20, 02, 8098356743);
//student3 = new Student("sai", 19, 03, 8098873451);
//
//console.log(student1.name);
//console.log(student3.mob);

class School extends Student {
  constructor(name, student_name, student_age, student_roll, student_mob) {
    super(student_name, student_age, student_roll, student_mob);
    this.school_name = name;
  }
  print() {
    return this.name + "studies in" + this.school_name + "school";
  }
}

school1 = new School("ABC", "jane", 18, 10, 8977544345);
school2 = new School("XYZ", "banu", 20, 09, 8998642717);
console.log(school1.print());
console.log(school2.print());
