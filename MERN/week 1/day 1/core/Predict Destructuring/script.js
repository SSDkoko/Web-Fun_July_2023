const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
};
const { name: otherName } = employee;

// Predict the output
console.log(employee.name); // Output: 'Elon'
console.log(otherName); // Output: 'Elon'
