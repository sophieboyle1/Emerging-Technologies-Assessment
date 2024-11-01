const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const conversationArea = document.getElementById("conversation-area");

// function to handle user message submission
function handleUserMessage() {
    const message = userInput.value.trim(); // get the user input and trim whitespace
    if (message) {
        // create a new message element
        const userMessage = document.createElement("div");
        userMessage.className = "message user-message";
        userMessage.textContent = message;
        
        // append the new message
        conversationArea.appendChild(userMessage);

        // clear the input field after sending
        userInput.value = "";

        // scroll to the bottom
        conversationArea.scrollTop = conversationArea.scrollHeight;
    }
}

// attach the function
sendButton.addEventListener("click", handleUserMessage);
