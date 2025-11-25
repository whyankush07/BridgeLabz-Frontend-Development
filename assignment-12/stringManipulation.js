const productName = "  wireless headphones PRO  ";

// Trim extra spaces
let cleaned = productName.trim();

// Convert to lowercase
cleaned = cleaned.toLowerCase();

// Capitalize first letter of each word
const words = cleaned.split(" ");
const capitalizedWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});
let finalTitle = capitalizedWords.join(" ");

// Replace "Pro" with "Pro Edition"
finalTitle = finalTitle.replace("Pro", "Pro Edition");

console.log("Original: '" + productName + "'");
console.log("Cleaned Title: " + finalTitle);
console.log("Length: " + finalTitle.length);
