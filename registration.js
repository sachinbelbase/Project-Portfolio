function validateForm() {
  var fname = document.getElementById("fname").value.trim();
  document.getElementById("fnameError").innerText = "";
  if (fname === "") {
    document.getElementById("fnameError").innerText = "First Name Required";
    return false;
  }

  var lname = document.getElementById("lname").value.trim();
  document.getElementById("lnameError").innerText = "";
  if (lname === "") {
    document.getElementById("lnameError").innerText = "Last Name Required";
    return false;
  }

  var gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    alert("Please select your gender");
    return false;
  }

  var phone = document.getElementById("phone").value.trim();
  document.getElementById("phoneError").innerText = "";
  if (phone === "") {
    document.getElementById("phoneError").innerText =
      "Phone number is required.";
    return false;
  }
  if (phone.length !== 10 || isNaN(phone)) {
    document.getElementById("phoneError").innerText =
      "Enter 10 digit valid number";
    return false;
  }

  var email = document.getElementById("mail").value.trim();
  document.getElementById("emailError").innerText = "";
  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required.";
    return false;
  }
  if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("emailError").innerText = "Enter valid Email";
    return false;
  }

  var course = document.getElementById("course").value;
  document.getElementById("courseError").innerText = "";
  if (course === "") {
    document.getElementById("courseError").innerText =
      "Please select a course.";

    return false;
  }
  var hobby = document.getElementById("hobby").value;
  if (hobby === "") {
    alert("Please select your Hobby");
    return false;
  }

  var about = document.getElementById("aboutme").value.trim();
  if (about === "") {
    alert("Tell us about yourself");
    return false;
  }
  var interest = document.querySelectorAll('input[name="interest"]:checked');
  if (interest.length === 0) {
    alert("Please select at least one Interest");
    return false;
  }

  alert("Form submitted successfully");
  return true;
}
