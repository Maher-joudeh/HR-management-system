"use strict";

/* Employee object  constructor  */

const WyEmployee = [];

function Employee(id, name, department, level, image, salary) {
  this.id = id;
  this.name = name;
  this.department = department;
  this.level = level;
  this.image = image;
  this.salary = 0;
  WyEmployee.push(this);
}

        let Ghazi = new Employee(
        1000,
        "Ghazi Samer",
        "Administration",
        "Senior",
        "./assest/m1.png"
        );

        let Lana = new Employee(
        1001,
        "Lana Ali",
        "Finance",
        "Senior",
        "./assest/w1.png"
        );

        let Tamara = new Employee(
        1002,
        "Tamara Ayoub",
        "Marketing",
        "Senior",
        "./assest/w2.png"
        );

        let Safi = new Employee(
        1003,
        "Safi Walid",
        "Administration",
        "Mid-Senior",
        "./assest/m2.png"
        );

        let Omar = new Employee(
        1004,
        "Omar Zaid	",
        "Development",
        "Senior",
        "./assest/m3.png"
        );

        let Rana = new Employee(
        1005,
        "Rana Saleh",
        "Developmen",
        "Junior",
        "./assest/w3.png"
        );

        let Hadi = new Employee(
        1006,
        "Hadi Ahmad",
        "Finance",
        "Mid-Senior",
        "./assest/m4.png"
        );


Employee.prototype.salNet = function () {
        if (this.level == "Senior") {
            let net = Math.floor(Math.random() * (2000 - 1500)) + 1500;
            this.salary = net * (1 - 0.075);
        } else if (this.level == "Mid-Senior") {
            let net = Math.floor(Math.random() * (1500 - 1000)) + 1000;
            this.salary = net * (1 - 0.075);
        } else if (this.level == "Junior") {
            let net = Math.floor(Math.random() * (1000 - 500)) + 500;
            this.salary = net * (1 - 0.075);
        }

        return this.salary;
};

function salEmp() {
    for (let i = 0; i < WyEmployee.length; i++) {
        WyEmployee[i].salNet();
        WyEmployee[i].render();
    }

}

Employee.prototype.render = function () {
    {
        document.write(`<p>Employee Name:${this.name}</p>`);
        document.write(`<p> Employee Departement:${this.department}</h3>`);
        document.write(`<p>Employee Salary:${this.salary}</p>`);
    }
};
salEmp();


