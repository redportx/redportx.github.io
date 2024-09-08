document.addEventListener("DOMContentLoaded", function() {
  // Define a single countdown target date
  var targetDate = "Sep 14, 2024 16:00:00 GMT-0400";
  var countDownDate = new Date(targetDate).getTime();

  // Find all elements with the class 'counterDown-display'
  var countdownElements = document.querySelectorAll(".counterDown-display");

  // Function to update the countdown
  function updateCountdown() {
    // Get the current date and time
    var now = new Date().getTime();
    
    // Calculate the remaining time
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update all countdown elements
    countdownElements.forEach(function(element) {
      element.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    });

    // Check if the countdown is finished
    if (<distance < 0) {
      clearInterval(intervalId);
      countdownElements.forEach(function(element) {
        element.innerHTML = "I love you Mollie❤️";
      });
    }
  }

  // Update countdown every 1 second
  var intervalId = setInterval(updateCountdown, 1000);

  // Initial call to display the countdown immediately
  updateCountdown();
});
