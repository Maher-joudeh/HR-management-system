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

let counter = 1000;

function IDno() {
    const employeeID = counter;
    counter++;
    return employeeID;
}

let Ghazi = new Employee(
  IDno(),
  "Ghazi Samer",
  "Administration",
  "Senior",
  "./assets/m1.png"
);

let Lana = new Employee(
  IDno(),
  "Lana Ali",
  "Finance",
  "Senior",
  "./assets/w1.png"
);

let Tamara = new Employee(
  IDno(),
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "./assets/w2.png"
);

let Safi = new Employee(
  IDno(),
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "./assets/m2.png"
);

let Omar = new Employee(
  IDno(),
  "Omar Zaid",
  "Development",
  "Senior",
  "./assets/m3.png"
);

let Rana = new Employee(
  IDno(),
  "Rana Saleh",
  "Development",
  "Junior",
  "./assets/w3.png"
);

let Hadi = new Employee(
  IDno(),
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "./assets/m4.png"
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
    document.write(`<p>Employee ID: ${this.id}</p>`);
    document.write(`<p>Employee Name: ${this.name}</p>`);
    document.write(`<p>Employee Department: ${this.department}</p>`);
    document.write(`<p>Employee Salary: ${this.salary}</p>`);
    document.write("<br>");
};

salEmp();
