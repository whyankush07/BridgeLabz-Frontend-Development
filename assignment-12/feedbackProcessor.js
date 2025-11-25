// Customer Feedback Processor

const feedback = "Great product! Fast delivery and amazing sound quality!";

const wordCount = feedback.split(" ").length;

const hasBadWords = feedback.includes("bad") || feedback.includes("poor");

console.log("Feedback: " + feedback);
console.log("Word Count: " + wordCount);

if (hasBadWords) {
    console.log("Status: Needs Improvement");
} else {
    console.log("Status: Positive Feedback");
}


