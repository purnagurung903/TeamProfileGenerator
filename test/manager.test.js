const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", ()=>{
  describe("Initialization",()=>{
    it("Should create an object with a name id email  officeNumber and role if provided valid arguments",()=>{
      const manager = new Manager("purna", 4, "purna@gmail.com", "49");
      expect(manager.name).toEqual("purna");
      expect(manager.id).toEqual(4);
      expect(manager.email).toEqual("purna@gmail.com");
      expect(manager.officeNumber).toEqual("49");

    });
   
  })
  describe("getOfficeNumber method", ()=>{
    it("return the officenumber",()=>{
      const purna = new Manager("purna", 4, "purna@gmail.com","49");
      expect(purna.getOfficeNumber()).toEqual("49");
    })
  })
  describe("getRole method", ()=>{
    it("return the role of employee",()=>{
      const purna = new Manager("purna", 4, "purna@gmail.com","49");
      expect(purna.getRole()).toEqual("Manager");
    })
  })

})