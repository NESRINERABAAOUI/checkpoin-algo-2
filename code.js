function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to count the number of characters in a string
function countCharacters(str) {
    return str.length;
}

// Function to capitalize the first letter of each word in a sentence
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
const characterCount = countCharacters(originalString);
const capitalizedString = capitalizeWords(originalString);

console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);
console.log("Character Count:", characterCount);
console.log("Capitalized String:", capitalizedString);
