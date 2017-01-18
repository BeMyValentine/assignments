var employees = [];

function Employee(name, title, salary, status) {

    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = "Full-time";

    this.printEmployeeForm = function () {
        console.log(
            "Name: " + this.name +
            ", Job Title: " + this.title +
            ", Salary:  " + this.salary +
            ", Staus: " + this.status
        );
    }

}
var gabe = new Employee("Gabe Hare", "Student", "$$$$$");
var nate = new Employee("Nate Booleon", "Operator", "40,000");
var colby = new Employee("Colby Array", "Security Guard", "50,000");

gabe.printEmployeeForm();
nate.printEmployeeForm();
colby.printEmployeeForm();

nate.status = "Part Time";

employees.push(gabe);
employees.push(nate);
employees.push(colby);
console.log(employees);