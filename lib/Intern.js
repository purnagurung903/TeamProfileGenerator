const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school){
    super(name, id, email);//using super to call function on an objects parent
    this.school;
  }
  getSchool(){
    return this.school;
  }
  gitRole(){
    return "Intern"
  }
}

module.exports = Intern;