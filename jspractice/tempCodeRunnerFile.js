const empId = Symbol("empId");
const employee = {
  name: "Alice Johnson",
  email: "alice.johnson@example.com",
  phoneNumber: "123-456-7890",
  [empId]: "EMP12345"
};

console.log("Employee Data:");
console.log(`Name: ${employee.name}`);
console.log(`Email: ${employee.email}`);
console.log(`Phone Number: ${employee.phoneNumber}`);
console.log(`Employee ID (Symbol): ${employee[empId]}`);