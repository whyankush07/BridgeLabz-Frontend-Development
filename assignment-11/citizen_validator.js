// Evaluates eligibility for voting, driving, and passport based on age and citizenship

// Input values
const age = 19; 
const isCitizen = true;

// Determine eligibility 
let eligibilityStatus;

if (isCitizen && age >= 18) {
    if (age >= 21) {
        eligibilityStatus = "Eligible for all services.";
    } else {
        // Age is between 18-20
        eligibilityStatus = "Eligible to vote only.";
    }
} else if (!isCitizen && age >= 18) {
    eligibilityStatus = "Only age criteria met.";
} else {
    eligibilityStatus = "Not eligible yet.";
}

// Display results
console.log("=== Citizen Eligibility Validator ===");
console.log(`Age: ${age}`);
console.log(`Citizen: ${isCitizen ? "Yes" : "No"}`);
console.log(`Status: ${eligibilityStatus}`);
