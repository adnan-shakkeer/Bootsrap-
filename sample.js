var form = document.getElementById("subscribeForm");
var emailInput = document.getElementById("emailInput");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from refreshing

  var email = emailInput.value;

  if (email) {
    console.log("Subscribed with email:", email);
    alert("Thank you for subscribing with " + email + "!");
    form.reset(); // clears the input box after submission
  } else {
    alert("Please enter a valid email address.");
  }
});