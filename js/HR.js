"use strict";

//Functions
let counter = 1000;
function IDno() {
    const employeeID = counter;
    counter++;
return employeeID;
}

function getRandomWithinRange(min, max) {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
  }
  

 function salNet (taxed) {
    taxed = taxed-(0.075 * taxed )
    return taxed
    }

//Employee Objects

let salEmp1=getRandomWithinRange(1500,2000);
let Ghazi= {

    EmployeeID:IDno(),
    FullName:"Ghazi Samer",
    Department:"Administration",
    Level:"Senior",
    Image:"https://images.generated.photos/cEWnnxhFyK2uNDAjuurBIzN7R0ACVsn9DLwLXHMHoVY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzE5NDQ0LmpwZw.jpg",
    Salary:salEmp1,
    netSalary:salNet(salEmp1)
}

let salEmp2=getRandomWithinRange(1500,2000);
let Lana= {

    EmployeeID:IDno(),
    FullName:"Lana Ali",
    Department:"Finance",
    Level:"Senior",
    Image:"https://images.generated.photos/cvq6LWDzOZpqJKti2NToA8JdTc8OvUgn-5NfThtcQL4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzI2NjgxLmpwZw.jpg",
    Salary:salEmp2,
    netSalary:salNet(salEmp2)
}

let salEmp3=getRandomWithinRange(1500,2000);
let Tamara= {

    EmployeeID:IDno(),
    FullName:"Tamara Ayoub",
    Department:"Marketing",
    Level:"Senior",
    Image:"https://images.generated.photos/m6LxtP61qAzW6x7XNMzpRlfSApgBnW8xbkyt5t7Zqtc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTA2NzE3LmpwZw.jpg",
    Salary:salEmp3,
    netSalary:salNet(salEmp3)
}

let salEmp4=getRandomWithinRange(1000,1500);
let Safi= {

    EmployeeID:IDno(),
    FullName:"Safi Walid",
    Department:"Administration",
    Level:"Mid-Senior",
    Image:"https://images.generated.photos/EHVS5ybKF60Ze54674EpqqOLvbapaIpQ6YI9NadGQZc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDI3MTUwLmpwZw.jpg",
    Salary:salEmp4,
    netSalary:salNet(salEmp4)
}

let salEmp5=getRandomWithinRange(1500,2000);
let Omar= {

    EmployeeID:IDno(),
    FullName:"Omar Zaid",
    Department:"Development",
    Level:"Senior",
    Image:"https://images.generated.photos/7V1UoepW0Rr3fPn99kc2_RsIMKIwVE6KC4Xnami9mzo/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODE5MTI2LmpwZw.jpg",
    Salary:salEmp5,
    netSalary:salNet(salEmp5)
}

let salEmp6=getRandomWithinRange(500,1000);
let Rana= {

    EmployeeID:IDno(),
    FullName:"Rana Saleh",
    Department:"Development",
    Level:"Junior",
    Image:"https://images.generated.photos/CBGV36MPauV6-n-2Xah-JKXDMJvkFRMC0E1vHcq8cbk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTUzNjA5LmpwZw.jpg",
    Salary:salEmp6,
    netSalary:salNet(salEmp6)
}

let salEmp7=getRandomWithinRange(1000,1500);
let Hadi= {

    EmployeeID:IDno(),
    FullName:"Hadi Ahmad",
    Department:"Finance",
    Level:"Mid-Senior",
    Image:"https://images.generated.photos/H7dzJWsjBmM4YIdI1YqFW5fzvNc3ScKEiLgGP-uczOk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTgwMjk2LmpwZw.jpg",
    Salary:salEmp7,
    netSalary:salNet(salEmp7)
}

// Rendering each employee's name with their department and salary

        document.write("Employee Name:" + Ghazi.FullName);
        document.write('<br/>');
        document.write("Department:" + Ghazi.Department);
        document.write('<br/>');
        document.write("Employee Salary:" + Ghazi.netSalary);
        document.write('<br/>');
        document.write('<br/>');


        document.write("Employee Name:" + Lana.FullName);
        document.write('<br/>');
        document.write("Department:" + Lana.Department);
        document.write('<br/>');
        document.write("Employee Salary:" + Lana.netSalary);
        document.write('<br/>');
        document.write('<br/>');


        document.write("Employee Name:" + Tamara.FullName);
        document.write('<br/>');
        document.write("Department:" + Tamara.Department);
        document.write('<br/>');
        document.write("Employee Salary:" + Tamara.netSalary);
        document.write('<br/>');
        document.write('<br/>');


        document.write("Employee Name:" + Safi.FullName);
        document.write('<br/>');
        document.write("Department:" + Safi.Department);
        document.write('<br/>');
        document.write("Employee Salary:" + Safi.netSalary);
        document.write('<br/>');
        document.write('<br/>');


        document.write("Employee Name:" + Rana.FullName);
        document.write('<br/>');
        document.write("Department:" + Rana.Department);
        document.write('<br/>');
        document.write("Employee Salary:" + Rana.netSalary);
        document.write('<br/>');
        document.write('<br/>');


        document.write("Employee Name:"+ Hadi.FullName);
        document.write('<br/>');
        document.write("Department:" + Hadi.Department);
        document.write('<br/>');
        document.write("Employee Salary:"+ Hadi.netSalary);
        document.write('<br/>');
        document.write('<br/>');

