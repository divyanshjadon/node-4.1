# CLI Employee Management System

A simple Node.js command-line interface application for managing employees using in-memory arrays.

## Features

- Add new employees with name and ID
- List all employees
- Remove employees by ID
- Interactive menu-driven interface
- Data stored in memory (no external database required)

## Prerequisites

- Node.js installed on your system

## How to Run

1. Navigate to the project directory
2. Run the application using one of these methods:

```bash
# Method 1: Using npm start
npm start

# Method 2: Direct node execution
node employee-management.js
```

## Usage

The application provides a menu with the following options:

1. **Add Employee** - Add a new employee with name and ID
2. **List Employees** - Display all current employees
3. **Remove Employee** - Remove an employee by their ID
4. **Exit** - Close the application

## Sample Data

The application starts with three sample employees:
- Alice (ID: E101)
- Bob (ID: E102)
- Charlie (ID: E103)

## Features Implemented

- Input validation for duplicate IDs
- Error handling for invalid choices and non-existent employees
- Clean, user-friendly interface
- Proper array management for CRUD operations


