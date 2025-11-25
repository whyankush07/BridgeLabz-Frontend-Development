// Declare variables of different data types
const userName = "Charlie";
const userAge = 20;
const isActive = true;
const hobbies = ["reading", "coding", "gaming"];
const userProfile = { name: "Charlie", role: "Developer" };
const deletedAccount = null;
let pendingVerification;

// Create data summary with type identification
const dataSummary = [
  { Label: "User Name", Value: userName, Type: typeof userName },
  { Label: "User Age", Value: userAge, Type: typeof userAge },
  { Label: "Is Active", Value: isActive, Type: typeof isActive },
  {
    Label: "Hobbies",
    Value: JSON.stringify(hobbies),
    Type: Array.isArray(hobbies) ? "array" : typeof hobbies,
  },
  {
    Label: "User Profile",
    Value: JSON.stringify(userProfile),
    Type: typeof userProfile,
  },
  {
    Label: "Deleted Account",
    Value: deletedAccount,
    Type: typeof deletedAccount,
  },
  {
    Label: "Pending Verification",
    Value: pendingVerification,
    Type: typeof pendingVerification,
  },
];

// Display formatted report with table()
console.table(dataSummary);
