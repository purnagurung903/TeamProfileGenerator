const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", ()=>{
  describe("Initialization",()=>{
    it("Should create an object with a name id email role and github if provided valid arguments",()=>{
      const engineer = new Engineer("purna", 4, "purna@gmail.com", "purnagurung903");
      expect(engineer.name).toEqual("purna");
      expect(engineer.id).toEqual(4);
      expect(engineer.email).toEqual("purna@gmail.com");
      expect(engineer.github).toEqual("purnagurung903");

    });

  })
  describe("getGithub method", ()=>{
    it("return the github username", ()=>{
      const purna = new Engineer("purna", 4, "purna@gmail.com", "purnagurung903")
      expect(purna.getGithub()).toEqual("purnagurung903")
    })
  })
  describe("getRole method", ()=>{
    it("return the role of the  employee", ()=>{
      const purna = new Engineer("purna", 4, "purna@gmail.com", "purnagurung903")
      expect(purna.getRole()).toEqual("Engineer")
    })
  })
  
})