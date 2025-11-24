## Description: 
Write a stateless class for validating passwords. Passwords must meet the following criteria:

- Between 5 and 15 characters long
- Contains at least one digit
- Contains at least one upper case letter
- Return an object containing a boolean result and an errors key that — when provided with an invalid password — contains an error message or type for all errors in occurrence. There can be multiple errors at a single time.

## Password Validation Rules

### **Between 5 and 15 characters long**

**Success**
- jamiE8

**Failure**
- jaE8
- thePhysical1234567


### **Contains at least one digit**

**Success**
- Khalil8

**Failure**
- khalil
- maxwellTheBe


### **Contains at least one upper case letter**

**Success**
- maXwell1_c

**Failure**
- maxwell1_c


### **Return Value Requirements**

Return an object containing:
- a boolean `result`
- an `errors` key that — when provided with an invalid password — contains an error **type** for all errors in occurrence.

There can be **multiple errors at the same time**.

**Success**
/*
{
  result: true,
  errors: []
}
*/

**Failure**
/*
{
  result: false,
  errors: [
    'InvalidLength',
    'MissingUppercase',
    'MissingDigit'
  ]
}
