$(document).ready(function() {
  const registeredEmails = ["test@example.com", "user@gmail.com"];

  function validateName() {
    const name = $("#name").val().trim();
    
    if (name === "") {
      $("#name").addClass("invalid").css("border-color", "red");
      $("#nameError").show();
      return false;
    } else {
      $("#name").removeClass("invalid").css("border-color", "#28a745");
      $("#nameError").hide();
      return true;
    }
  }

  function validateEmail() {
    const email = $("#email").val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      $("#email").addClass("invalid").css("border-color", "red");
      $("#emailError").text("Please enter a valid email address");
      $("#emailError").show();
      return false;
    }
    
    // Check uniqueness
    if (registeredEmails.includes(email)) {
      $("#email").addClass("invalid").css("border-color", "red");
      $("#emailError").text("This email is already registered");
      $("#emailError").show();
      return false;
    }
    
    $("#email").removeClass("invalid").css("border-color", "#28a745");
    $("#emailError").hide();
    return true;
  }

  function validatePassword() {
    const password = $("#password").val();
    
    if (password.length < 8) {
      $("#password").addClass("invalid").css("border-color", "red");
      $("#passwordError").show();
      return false;
    } else {
      $("#password").removeClass("invalid").css("border-color", "#28a745");
      $("#passwordError").hide();
      return true;
    }
  }

  function validateConfirmPassword() {
    const password = $("#password").val();
    const confirmPassword = $("#confirmPassword").val();
    
    if (password !== confirmPassword) {
      $("#confirmPassword").addClass("invalid").css("border-color", "red");
      $("#confirmPasswordError").show();
      return false;
    } else {
      $("#confirmPassword").removeClass("invalid").css("border-color", "#28a745");
      $("#confirmPasswordError").hide();
      return true;
    }
  }

  // Real-time validation on blur
  $("#name").blur(validateName);
  $("#email").blur(validateEmail);
  $("#password").blur(validatePassword);
  $("#confirmPassword").blur(validateConfirmPassword);

  // Form submission
  $("#registrationForm").submit(function(e) {
    e.preventDefault();
    
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    
    if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      $("#successMessage").fadeIn(500);
      
      // Reset form
      setTimeout(function() {
        $("#registrationForm")[0].reset();
        $("input").css("border-color", "#ddd");
        $("#successMessage").fadeOut(500);
      }, 3000);
    }
  });
});
