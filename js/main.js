/* This function switches the nav menus */
function myFunction() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


/* This function validates the first name field on the form */
function validateForm() {
  var x = document.forms["theForm"]["firstname"].value;
  if (x == "") {
    alert("Oops! You didn't tell us your name!");
    return false;
  }
}

/* This function prompts an alert to the customer after submitting */
function myfunction() {
var x=document.getElementById('fname').value;
alert("Hello, " +x + "! Your ice cream is being prepared!");
}