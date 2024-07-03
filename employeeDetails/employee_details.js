const employees = [
    {id: 1, name:'Evans Konye', age: 24, department:'IT', salary: 50000},
    {id: 2, name: 'Julius Makungu', age: 34, department: 'HR', salary: 45000},
    {id: 3, name: 'Jane Wairimu', age: 43, department: 'Finance', salary: 60000}
];

function displayEmployees(){
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join(' ');
    document.getElementById(employeesDetails).innerHTML = totalEmployees;
}

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc, employee)=>acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}