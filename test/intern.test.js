const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");
 
describe("Intern", ()=>{
  describe("Initialization",()=>{
    it("Should create an object with a name id email  school and role if provided valid arguments",()=>{
      const intern = new Intern("purna", 4, "purna@gmail.com", "columbia engineering");
      expect(intern.name).toEqual("purna");
      expect(intern.id).toEqual(4);
      expect(intern.email).toEqual("purna@gmail.com");
      expect(intern.school).toEqual("columbia engineering");

    });
   
  })
  describe("getSchool method", ()=>{
    it("return the schoolname",()=>{
      const purna = new Intern("purna", 4, "purna@gmail.com","columbia engineering");
      expect(purna.getSchool()).toEqual("columbia engineering");
    })
  })
  describe("getRole method", ()=>{
    it("return the role of employee",()=>{
      const purna = new Intern("purna", 4, "purna@gmail.com","columbia engineering");
      expect(purna.getRole()).toEqual("Intern");
    })
  })
});
