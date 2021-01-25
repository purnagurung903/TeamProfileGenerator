const Employee = require("../lib/Employee");

describe("Employee", ()=>{
  describe("Initialization", ()=>{
    it("should create an object with a name, id and email  if provided valid arguments", ()=>{
      const employee = new Employee("purna", 4, "purna@gmail.com");
      expect(employee.name).toEqual("purna")
      expect(employee.id).toEqual(4)
      expect(employee.email).toEqual("purna@gmail.com");

    });
    })
    describe("getName method", () => {
      it('returns the name of the employee', () => {
          const purna = new Employee("purna", 4, "purna@gmail.com");
          expect(purna.getName()).toEqual("purna")
          });
      });
     describe("getId method", () => {
      it('returns the ID of the employee', () => {
          const purna = new Employee("purna", 4, "purna@gmail.com");
          expect(purna.getId()).toEqual(4) 
          });
      });
     describe("getEmail method", () => {
      it('returns the Email of the employee', () => {
          const purna = new Employee("purna", 4, "purna@gmail.com");
          expect(purna.getEmail()).toEqual("purna@gmail.com");
          });
      });
      describe("getRole method", () => {
          it('returns the role of the employee', () => {
          const purna = new Employee("purna", 4, "purna@gmail.com");
          expect(purna.getRole()).toEqual("Employee");
          });

  })
})