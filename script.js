function moveButton() {
    var button = document.getElementById("noBtn");
    var maxX = window.innerWidth - button.clientWidth;
    var maxY = window.innerHeight - button.clientHeight;
  
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
  
    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
  }
  
  function showMessage() {
    var mainContainer = document.getElementById("main-container");
    var messageContainer = document.getElementById("message-container");
  
    mainContainer.classList.add("hidden");
    messageContainer.classList.remove("hidden");
  }
  
  function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value;
  
    alert("Message sent: " + message);
  }
