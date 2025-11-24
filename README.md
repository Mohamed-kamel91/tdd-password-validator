# TDD Password Validator

A simple Password Validator built using Test-Driven Development (TDD).

## Project Overview (TDD)

This project is a simple Password Validator built using Test-Driven Development (TDD).  
The goal of the project is to practice writing tests first, then implementing the validation logic to make the tests pass.

## What is Password Validation?

Password validation is the process of checking if a password meets a predefined set of security rules.

This project validates passwords based on the following rules:

- Must be between **5 and 15 characters**
- Must contain **at least one digit**
- Must contain **at least one uppercase letter**

If the password is invalid, the function returns **all errors at once**.

## Validation Rules

A valid password must:

- Be 5–15 characters long
- Contain at least one number
- Contain at least one uppercase letter

## Features

The password validator supports:

- Length validation
- Numeric character validation
- Uppercase character validation
- Multiple error reporting at once
- Built with TypeScript for type safety

## Tech Stack

- TypeScript
- Node.js
- Jest (testing)

## Project Structure

```

tdd-password-validator/
├── src/
│   └── passwordValidator.spec.ts
│   └── passwordValidator.ts
│   └── FIND.md
├── package.json
└── README.md

```

## Approach

This project follows the classic TDD cycle:

1. Write a failing test (**Red**)
2. Write the minimal code to make the test pass (**Green**)
3. Refactor the code while keeping tests green (**Refactor**)

## Getting Started

### Installation

```bash
git clone https://github.com/Mohamed-kamel91/tdd-password-validator.git
cd tdd-password-validator
npm install
```

### Running Tests

```bash
npm test
npm run test:dev
```

## API

### `validatePassword(password: string): ValidationResult`

**Parameters:**

- `password` (string): The password to validate

**Returns:**

```ts
{
  result: boolean,
  errors: string[]
}
```

- `result`: `true` if the password passes all rules
- `errors`: A list of all validation errors (empty if valid)

## Usage

### Basic Usage

```ts
import { validatePassword } from "./src/passwordValidator";

console.log(validatePassword("Abc12"));
/*
{
  result: true,
  errors: []
}
*/

console.log(validatePassword("abc"));
/*
{
  result: false,
  errors: [
    'InvalidLength',
    'MissingUppercase',
    'MissingDigit'
  ]
}
*/
```

## Learning Goals

- Practice real-world TDD workflow
- Improve test-driven thinking
- Learn how to return structured validation errors
- Build predictable and maintainable code
