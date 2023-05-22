"use strict";

function getRandomWithinRange(min, max) {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
  }
  

let counter = 1000;

function IDno() {
  const employeeID = counter;
  counter++;

return employeeID;
}


function salNet (taxed) {
taxed = taxed-(0.075 * taxed )
return taxed
}

let SalEmp1=getRandomWithinRange (1500,2000)
let Ghazi = {
    EmployeeID:IDno(),
    FullName:"Ghazi Samer",
    Department:"Administration",
    Level:"Senior",
    Image:"https://images.generated.photos/cEWnnxhFyK2uNDAjuurBIzN7R0ACVsn9DLwLXHMHoVY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzE5NDQ0LmpwZw.jpg",
    Salary:SalEmp1,
    netSalary:taxed(SalEmp1)
}


document.write("Employee name:" + Ghazi.FullName) ;
document.write('<br/>');
document.write("Employee salary:" + Ghazi.netSalary);
document.write('<br/><br/>');

