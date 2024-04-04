// TODO: this file! :)
let numbersBank = [];
let oddNumbers = [];
let evenNumbers = [];

//references
const addNumberButton = document.querySelector("button");
const numbersBankOutput = document.querySelector("#numberBank output");
const oddsOutput = document.querySelector("#odds output");
const evensOutput = document.querySelector("#evens output");

addNumberButton.addEventListener("click", function(e) {
    e.preventDefault();
    numbersBank.push(e.target.parentElement.number.value);
    
    currentDomState();
});

//update DOM to reflect current state of numbers, oddNumbers and evenNumbers

const currentDomState = () => {
    numbersBankOutput.textContent = numbersBank.join(", ");
    
    evensOutput.textContent = evenNumbers.join(", ");

    oddsOutput.textContent = oddNumbers.join(", ");
};

//create event listener to sort first number based on odds/evens
const sortOneButton = document.querySelector("#sortOne");
sortOneButton.addEventListener("click", function(e) {
    e.preventDefault();
    const sortee = numbersBank.shift();
    if (sortee % 2 == 0) {
        evenNumbers.push(sortee);
    } else {
        oddNumbers.push(sortee);
    }
    currentDomState();
});

//create even listener to sort all numbers based on odds and evens
const sortAllButton = document.querySelector("#sortAll");
sortAllButton.addEventListener("click", function (e) {
    e.preventDefault();
    numbersBank.forEach(number => {
        if (number % 2 == 0) {
            evenNumbers.push(number)
        } else {
            oddNumbers.push(number);
        }
    });
    numbersBank = [];
    currentDomState();
});