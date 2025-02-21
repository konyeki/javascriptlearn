const employees = [
    {id: 1, name:'Evans Konye', age: 24, department:'IT', salary: 50000},
    {id: 2, name: 'Julius Makungu', age: 34, department: 'HR', salary: 45000},
    {id: 3, name: 'Jane Wairimu', age: 43, department: 'Finance', salary: 60000}
];

function displayEmployees(){
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: - ${employee.department} - Ksh ${employee.salary}</p>`).join(' ');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc, employee)=>acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

//Function to display employees details based on department such as HR department

function displayHREmployees(){
    const hrEmployees = employees.filter(employee => employee.department === "HR");
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: - ${employee.department} - Ksh ${employee.salary}</p>`);
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}


//Function to find employee with the id of 2

function findEmployeeById(employeeId){
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if(foundEmployee){
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: - ${foundEmployee.department} - KSh ${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = "No employee has been found with that ID!";

    }
}