"use strict";

/* Employee object constructor */

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
    if (this.level === "Senior") {
    let net = Math.floor(Math.random() * (2000 - 1500)) + 1500;
    this.salary = (net * (1 - 0.075)).toFixed(2);
  } else if (this.level === "Mid-Senior") {
    let net = Math.floor(Math.random() * (1500 - 1000)) + 1000;
    this.salary = (net * (1 - 0.075)).toFixed(2);
  } else if (this.level === "Junior") {
    let net = Math.floor(Math.random() * (1000 - 500)) + 500;
    this.salary = (net * (1 - 0.075)).toFixed(2);
  }

  return this.salary;
};

function salEmp() {
  for (let i = 0; i < WyEmployee.length; i++) {
    WyEmployee[i].salNet();
  }
}

function renderEmployeesByDepartment() {
  let departments = {};

  for (let i = 0; i < WyEmployee.length; i++) {
    let employee = WyEmployee[i];
    if (!departments[employee.department]) {
      departments[employee.department] = [];
    }
    departments[employee.department].push(employee);
  }

  for (let department in departments) {
    let employees = departments[department];

    let section = document.createElement("section");
    section.style.marginBottom = "50px";
    section.style.paddingTop = "20px";
    section.style.borderTop = "2px solid rgba(24, 32, 65, 0.5)";

    let h2 = document.createElement("h2");
    h2.textContent = department;
    h2.style.marginTop = "10px";
    h2.style.marginBottom = "20px";
    h2.style.color = "rgba(24, 32, 65, 0.8)";

    section.appendChild(h2);

    for (let i = 0; i < employees.length; i++) {
      let employee = employees[i];

      let card = document.createElement("div");
      card.style.backgroundColor = "rgba(65, 11, 46, 0.19)";
      card.style.display = "inline-block";
      card.style.width = "200px";
      card.style.borderColor = "black";
      card.style.margin = "30px";
      card.style.padding = "10px";
      card.style.display = "inline-block";
      card.style.borderRadius = "5px";
      card.style.fontFamily = "";

      let cardimg = document.createElement("img");
      let cardname = document.createElement("p");
      let cardid = document.createElement("p");
      let cardepartment = document.createElement("p");
      let cardlevel = document.createElement("p");
      let cardsalary = document.createElement("p");

      cardimg.src = employee.image;
      cardimg.style.width = "160px";
      cardimg.style.height = "160px";

      cardname.textContent = "Name: " + employee.name;
      cardid.textContent = "Id: " + employee.id;
      cardepartment.textContent = "Department: " + employee.department;
      cardlevel.textContent = "Level: " + employee.level;
      cardsalary.textContent = "Salary: " + employee.salNet();

      card.appendChild(cardimg);
      card.appendChild(cardname);
      card.appendChild(cardid);
      card.appendChild(cardepartment);
      card.appendChild(cardlevel);
      card.appendChild(cardsalary);
      section.appendChild(card);
    }

    container.appendChild(section);
  }
}

salEmp();

let container = document.createElement("div");
document.body.appendChild(container);

let h1El = document.createElement("h1");
h1El.textContent = "Employee Cards";
container.appendChild(h1El);
h1El.style.paddingTop = "20px";
h1El.style.color = "rgba(24, 32, 65, 0.5)";

container.style.width = "800px";
container.style.marginLeft = "250px";
container.style.marginTop = "-300px";
container.style.marginBottom = "100px";
container.style.textAlign = "center";
container.style.display = "inline-block";
container.style.borderRadius = "80px";

renderEmployeesByDepartment();
