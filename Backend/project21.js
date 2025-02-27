Share



Code:

// Function declaration
function writeSentence() {
    console.log("JavaScript is fun and easy to learn!");
}

// (calling the function)
writeSentence();



// Function declaration with parameters
function getFullName(firstName, lastName) {
    return firstName + " " + lastName; // Combines first and last name with a space
}

// Function invocation with arguments
let fullName = getFullName("John", "Doe");

// Output the result
console.log(fullName); // Prints: John Doe




let temperature = 45; // Change this value to test different temperatures

// Check if the temperature is less than 50
if (temperature > 50) {
    console.log("put on a short.");
} else {
    console.log("dress warmly.");
}
if (temperature < 25)   {
    console.log("Stay indoors");
} else { 
    console.log ( "wear a coat")
}

let tipPercentage = 15; // Tip percentage

// Calculate tip amount and new total
let tipAmount = (preTipTotal * tipPercentage) / 100;
let newTotal = preTipTotal + tipAmount;

// Round to 2 decimal places
newTotal = newTotal.toFixed(2);
tipAmount = tipAmount.toFixed(2);

// Output result to the page
document.body.innerHTML = `<p>Your total bill, with tip, is £${newTotal} (Tip: £${tipAmount})</p>`;

// function that returns a % of a number

function getPercentage(number, percentage) {
    return (number * percentage) / 100;
}

// Example usage:
console.log(getPercentage(200, 15)); /


function calculator(number1, number2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 !== 0) {
                result = number1 / number2;
            } else {
                return console.log("Error: Division by zero is not allowed.");
            }
            break;
        default:
            return console.log("Error: Invalid operator. Use +, -, *, or /.");
    }

    console.log(`${number1} ${operator} ${number2} = ${result}`);
}
function drinkOrder(size, buttonName) {
    let softDrinkLabel;

    switch (buttonName) {
        case 'cola':
            softDrinkLabel = 'Cola';
            break;
        case 'lemon':
            softDrinkLabel = 'Lemonade';
            break;
        case 'orange':
            softDrinkLabel = 'Orangeade';
            break;
        default:
            return console.log("Error: Invalid drink selection.");
    }

    let message = `You have ordered a ${size} of ${softDrinkLabel}`;
    console.log(message);
    return message;
}

// Example usage:
drinkOrder('Small', 'cola');    // Output: You have ordered a Small of Cola
drinkOrder('Medium', 'lemon');  // Output: You have ordered a Medium of Lemonade
drinkOrder('Large', 'orange');  // Output: You have ordered a Large of Orangeade
