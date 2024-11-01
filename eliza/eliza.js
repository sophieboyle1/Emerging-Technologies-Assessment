const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const conversationArea = document.getElementById("conversation-area");

// function to display a message in the conversation area
function displayMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    conversationArea.appendChild(messageElement);
    conversationArea.scrollTop = conversationArea.scrollHeight;
}

// generate a basic response
function generateElizaResponse(userMessage) {
    // placeholder response
    return "Please tell me more about that.";
}

// function to handle user message submission and response
function handleUserMessage() {
    const message = userInput.value.trim(); // get the user input and trim whitespace
    if (message) {
        displayMessage(message, 'user-message');

        // clear the input field
        userInput.value = '';

        // response
        const elizaResponse = generateElizaResponse(message);
        displayMessage(elizaResponse, 'eliza-message');
    }
}

// attach the function 
sendButton.addEventListener("click", handleUserMessage);

// allow pressing Enter to send the message
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleUserMessage();
    }
});
