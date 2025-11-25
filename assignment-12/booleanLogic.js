
// check Security function to determine if the system is secure
function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Status: Secure");
  } else {
    console.log("Status: Unsafe");
  }
}

// Case 1: All conditions met
console.log("Test 1: All conditions met");
checkSecurity(true, true, true, true);

// Case 2: Alarm is off
console.log("\nTest 2: Alarm is off");
checkSecurity(true, true, false, true);

// Case 3: Door is unlocked
console.log("\nTest 3: Door is unlocked");
checkSecurity(false, true, true, true);

// Case 4: Owner is outside
console.log("\nTest 4: Owner is outside");
checkSecurity(true, true, true, false);

// Case 5: Multiple issues
console.log("\nTest 5: Multiple issues");
checkSecurity(false, false, true, false);
