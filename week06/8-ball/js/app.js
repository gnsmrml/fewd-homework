// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {
  var eightBallMessages = ["yes", "no", "maybe", "perhaps", "it will not"]

  $('#getMsg').click(displayMessage);

  function displayMessage() {
     eightBallMessage = eightBallMessages[Math.floor(Math.random() * eightBallMessages.length)];
     $('.message').text(eightBallMessage);
  };

});
