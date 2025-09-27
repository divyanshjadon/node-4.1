const readline = require('readline');

// Employee data storage (in-memory array)
let employees = [
    { name: 'Alice', id: 'E101' },
    { name: 'Bob', id: 'E102' },
    { name: 'Charlie', id: 'E103' }
];

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display main menu
function displayMenu() {
    console.log('\nEmployee Management System');
    console.log('1. Add Employee');
    console.log('2. List Employees');
    console.log('3. Remove Employee');
    console.log('4. Exit');
}

// Add employee function
function addEmployee() {
    rl.question('Enter employee name: ', (name) => {
        rl.question('Enter employee ID: ', (id) => {
            // Check if ID already exists
            const existingEmployee = employees.find(emp => emp.id === id);
            if (existingEmployee) {
                console.log(`Error: Employee with ID ${id} already exists.`);
                showMainMenu();
            } else {
                employees.push({ name, id });
                console.log(`Employee ${name} (ID: ${id}) added successfully.`);
                showMainMenu();
            }
        });
    });
}

// List employees function
function listEmployees() {
    console.log('\nEmployee List:');
    if (employees.length === 0) {
        console.log('No employees found.');
    } else {
        employees.forEach((employee, index) => {
            console.log(`${index + 1}. Name: ${employee.name}, ID: ${employee.id}`);
        });
    }
    showMainMenu();
}

// Remove employee function
function removeEmployee() {
    rl.question('Enter employee ID to remove: ', (id) => {
        const employeeIndex = employees.findIndex(emp => emp.id === id);
        if (employeeIndex === -1) {
            console.log(`Error: Employee with ID ${id} not found.`);
        } else {
            const removedEmployee = employees.splice(employeeIndex, 1)[0];
            console.log(`Employee ${removedEmployee.name} (ID: ${removedEmployee.id}) removed successfully.`);
        }
        showMainMenu();
    });
}

// Main menu handler
function showMainMenu() {
    displayMenu();
    rl.question('Enter your choice: ', (choice) => {
        switch (choice) {
            case '1':
                addEmployee();
                break;
            case '2':
                listEmployees();
                break;
            case '3':
                removeEmployee();
                break;
            case '4':
                console.log('Goodbye!');
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please enter 1, 2, 3, or 4.');
                showMainMenu();
                break;
        }
    });
}

// Start the application
console.log('Welcome to the Employee Management System!');
showMainMenu();


