const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const conversationArea = document.getElementById("conversation-area");

// Define keywords and responses
const elizaResponses = {
    "sorry": ["No need to apologize.", "It's okay, please go on."],
    "mother": ["Tell me more about your mother.", "How do you feel about your mother?"],
    "father": ["How does your relationship with your father make you feel?", "Please tell me more about your father."],
    "family": ["Tell me more about your family.", "How do you feel about your family?"],
    "feel": ["Why do you feel that way?", "Do you often feel this way?"],
    "sad": ["I'm sorry to hear that. What do you think is causing these feelings?", "Tell me more about what's making you feel sad."]
};

// function to display a message in the conversation area
function displayMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    conversationArea.appendChild(messageElement);
    conversationArea.scrollTop = conversationArea.scrollHeight;
}

// function to generate a response based on user input
function generateElizaResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // check for keywords in the user's message
    for (const keyword in elizaResponses) {
        if (lowerCaseMessage.includes(keyword)) {
            const responses = elizaResponses[keyword];
            return responses[Math.floor(Math.random() * responses.length)]; // Select a random response
        }
    }
    
    // default response
    return "Please tell me more about that.";
}

// function to handle user message submission and response
function handleUserMessage() {
    const message = userInput.value.trim(); // get the user input and trim whitespace
    if (message) {
        displayMessage(message, 'user-message');

        // clear the input field
        userInput.value = '';

        // generate and display ELIZA's response
        const elizaResponse = generateElizaResponse(message);
        displayMessage(elizaResponse, 'eliza-message');
    }
}

// attach the function to send button click
sendButton.addEventListener("click", handleUserMessage);

// allow pressing Enter to send the message
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleUserMessage();
    }
});
