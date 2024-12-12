// Get DOM elements
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const conversationArea = document.getElementById("conversation-area");

// ELIZA response patterns and responses
const elizaResponses = {
    "^\\s*I need ([^.!?]*)[.!?]*\\s*$": [
        "What makes you feel that you need $1?",
        "Why do you believe $1 would help you?",
        "Do you think getting $1 will solve your issue?"
    ],
    "^\\s*Why do I feel ([^.!?]*)[.!?\\s]*$": [
        "What do you think is causing these feelings of $1?",
        "Have you felt $1 before? Why now?",
        "Why do you think you're feeling $1 at the moment?"
    ],
    ".*\\bfriend\\b.*": [
        "Tell me more about your friendship.",
        "How do you feel about your friends?",
        "Are there particular friends who make you feel this way?"
    ],
    "^\\s*(?:I am|I'm) ([^.!?]*)[.!?\\s]*$": [
        "How long have you been feeling $1?",
        "What do you think causes you to feel $1?",
        "Have you tried anything to feel less $1?"
    ],
    "^\\s*Are you\\b([^.!?]*)[.!?\\s]*$": [
        "Would it change things if I were $1?",
        "Why are you curious if I'm $1?",
        "Does my identity as $1 matter to you?"
    ],
    "^\\s*What should I ([^.!?]*)[.!?\\s]*$": [
        "Why are you unsure if you should $1?",
        "What would it mean for you to $1?",
        "What do you think will happen if you decide to $1?"
    ],
    "^\\s*How .*": [
        "How would you feel if you were me?",
        "What do you think?",
        "Perhaps you already know the answer."
    ],
    "^\\s*I don't know\\b.*$": [
        "Why do you feel uncertain?",
        "Can you elaborate on why you don’t know?",
        "What do you think would help you find an answer?"
    ],
    ".*family.*": [
        "How does your family affect your feelings?",
        "What is it about your family that stands out?",
        "What role does family play in your life?"
    ],
    "^\\s*Can you ([^.!?]*)[.!?\\s]*$": [
        "What kind of help do you need with $1?",
        "What makes you think I could assist you with $1?",
        "How would you like me to help you?"
    ],
    "^\\s*(Hello|Hi)\\b.*$": [
        "Hi there! How can I assist you today?",
        "Hello! What’s on your mind?",
        "Hey! How’s it going?"
    ],
    "^.*$": [
        "Please tell me more about that.",
        "Let's explore this further.",
        "I'm here to listen; please go on.",
        "That’s interesting. Can you expand on that?"
    ]
};

// Utility to pick a random response
function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

// Generate a response based on user input
function generateElizaResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    for (const [pattern, responses] of Object.entries(elizaResponses)) {
        try {
            const regex = new RegExp(pattern, "i"); // Create regex from the pattern
            const match = lowerCaseMessage.match(regex); // Check for a match

            if (match) {
                let response = getRandomResponse(responses); // Select a random response
                // Replace placeholders (e.g., $1) with matched groups
                response = response.replace(/\$(\d+)/g, (_, index) => match[parseInt(index, 10)] || '');
                return response;
            }
        } catch (error) {
            console.error("Regex error:", error, "Pattern:", pattern);
        }
    }

    // Default response if no patterns matched
    return "Please tell me more about that.";
}

// Display a message in the chat area
function displayMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    conversationArea.appendChild(messageElement);
    conversationArea.scrollTop = conversationArea.scrollHeight; // Auto-scroll to latest message
}

// Handle user input and ELIZA response
function handleUserMessage() {
    const message = userInput.value.trim();

    if (message) {
        displayMessage(message, "user-message"); // Display user's message
        userInput.value = ""; // Clear input field

        const elizaResponse = generateElizaResponse(message); // Get ELIZA's response
        displayMessage(elizaResponse, "eliza-message"); // Display ELIZA's response
    }
}

// Attach event listeners for input submission
sendButton.addEventListener("click", handleUserMessage);
userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        handleUserMessage();
    }
});
