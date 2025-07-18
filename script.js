


function showDateTime() {
    const now = new Date(); // Get current date and time
    const dateTimeString = now.toLocaleString(); // Format to local date and time
    document.getElementById("dateTime").innerHTML = dateTimeString;
  }

  // Call the function when page loads
  showDateTime();

  // Optional: Update every second
  setInterval(showDateTime, 1000);










function greetUser() {
  var firstName = prompt("Enter your first name:");
  var lastName = prompt("Enter your last name:");
  var fullName = firstName + " " + lastName;
  alert("Hello, " + fullName + "! Welcome!");
}

greetUser();






function addTwoNumbers() {
    // Get input from the user
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    // Add the numbers
    let sum = num1 + num2;

    // Return the result
    return sum;
}

// Call the function and display the result
let result = addTwoNumbers();
alert("The sum is: " + result);






function calculator(num1, num2, operator) {
            let result;

            if (operator === '+') {
                result = num1 + num2;
            } else if (operator === '-') {
                result = num1 - num2;
            } else if (operator === '*') {
                result = num1 * num2;
            } else if (operator === '/') {
                result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            } else {
                result = "Invalid operator";
            }

            document.write("Result: " + result);
            return result;
        }

        // Example call:
        calculator(10, 5, '+');  // You can change the values






        function square(num) {
  return num * num;
}

// Example usage:
console.log(square(5)); // Output: 25









function calculateAreaValue(width, height) {
    var area = width * height;
    console.log("Area (Value): " + area);
}

// Call the function with values directly
calculateAreaValue(5, 10);






function calculateAreaValue(width, height) {
    var area = width * height;
    console.log("Area (Value): " + area);
}


function calculateAreaVariable(w, h) {
    var area = w * h;
    console.log("Area (Variable): " + area);
}

// Declare variables
var width = 7;
var height = 4;

// Call the function using variables
calculateAreaVariable(width, height);






function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Reverse the cleaned string
  const reversed = cleaned.split('a-z').reverse().join('');
  
  // Compare original and reversed strings
  return cleaned === reversed;
}





















