// ====================
// Part 1: Variable Declarations & Conditionals
// ====================
let age = 27;
let name = "Panther";

if (age >= 18) {
    console.log(name + " is an adult.");
} else {
    console.log(name + " is not an adult.");
}

// ====================
// Part 2: Custom Functions
// ====================

// Function to greet a user
function greetUser(userName) {
    return `Hello, ${userName}! Welcome to my first JavaScript demo.`;
}

// Function to calculate square of a number
function squareNumber(num) {
    return num * num;
}

console.log(greetUser(name));
console.log("Square of 5 is:", squareNumber(5));

// ====================
// Part 3: Loops
// ====================

// For loop example
for (let i = 1; i <= 5; i++) {
    console.log("For loop iteration:", i);
}

// While loop example
let count = 1;
while (count <= 5) {
    console.log("While loop iteration:", count);
    count++;
}

// ====================
// Part 4: DOM Interactions
// ====================

// 1. Change text content when button is clicked
document.getElementById("change-text-btn").addEventListener("click", function() {
    document.getElementById("demo-text").textContent = "Text changed by JavaScript!";
});

// 2. Add a new list item dynamically
document.getElementById("add-item-btn").addEventListener("click", function() {
    const ul = document.getElementById("item-list");
    const li = document.createElement("li");
    li.textContent = "New item added!";
    ul.appendChild(li);
});

// 3. Change button color on hover (extra DOM interaction)
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "red";
        button.style.color = "green";
    });
    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "purple";
        button.style.color = "orange";
    });
});
