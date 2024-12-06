const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const conversationArea = document.getElementById("conversation-area");

// Embedded ELIZA responses
let elizaResponses = {
    "(?i)^\\s*I need ([^.!?]*)[.!?]*\\s*$": [
        "What makes you feel that you need $1?",
        "Why do you believe $1 would help you?",
        "Do you think getting $1 will solve your issue?"
    ],
    "(?i)^\\s*Why do I feel ([^.!?]*)[.!?\\s]*$": [
        "What do you think is causing these feelings of $1?",
        "Have you felt $1 before? Why now?",
        "Why do you think you're feeling $1 at the moment?"
    ],
    "(?i)^.*\\bfriend\\b.*$": [
        "Tell me more about your friendship.",
        "How do you feel about your friends?",
        "Are there particular friends who make you feel this way?"
    ],
    "(?i)^\\s*(?:I am|I'm) ([^.!?]*)[.!?\\s]*$": [
        "How long have you been feeling $1?",
        "What do you think causes you to feel $1?",
        "Have you tried anything to feel less $1?"
    ],
    "(?i)^\\s*Are you\\b([^.!?]*)[.!?\\s]*$": [
        "Would it change things if I were $1?",
        "Why are you curious if I'm $1?",
        "Does my identity as $1 matter to you?"
    ],
    "(?i)^\\s*What should I ([^.!?]*)[.!?\\s]*$": [
        "Why are you unsure if you should $1?",
        "What would it mean for you to $1?",
        "What do you think will happen if you decide to $1?"
    ],
    "(?i)^\\s*How .*": [
        "How would you feel if you were me?",
        "What do you think?",
        "Perhaps you already know the answer."
    ],
    "(?i)^\\s*I don't know\\b.*$": [
        "Why do you feel uncertain?",
        "Can you elaborate on why you don’t know?",
        "What do you think would help you find an answer?"
    ],
    "(?i)^.*family.*$": [
        "How does your family affect your feelings?",
        "What is it about your family that stands out?",
        "What role does family play in your life?"
    ],
    "(?i)^\\s*Can you ([^.!?]*)[.!?\\s]*$": [
        "What kind of help do you need with $1?",
        "What makes you think I could assist you with $1?",
        "How would you like me to help you?"
    ],
    "(?i)^\\s*Hello|Hi\\b.*$": [
        "Hi there! How can I assist you today?",
        "Hello! What’s on your mind?",
        "Hey! How’s it going?"
    ],
    "(?i)^.*$": [
        "Please tell me more about that.",
        "Let's explore this further.",
        "I'm here to listen; please go on.",
        "That’s interesting. Can you expand on that?"
    ]
};

// Function to generate a response based on user input
function generateElizaResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // Iterate through each keyword and pattern
    for (const [pattern, responses] of Object.entries(elizaResponses)) {
        const regex = new RegExp(pattern, "i"); // Create a case-insensitive regex
        const match = lowerCaseMessage.match(regex); // Match user input with the pattern
        
        if (match) {
            // Select a random response
            let response = responses[Math.floor(Math.random() * responses.length)];
            
            // Replace placeholders like $1 with the actual matched groups
            for (let i = 1; i < match.length; i++) {
                response = response.replace(`$${i}`, match[i]);
            }
            
            return response;
        }
    }
    
    // Default response if no patterns matched
    return "Please tell me more about that.";
}

// Function to display a message
function displayMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    conversationArea.appendChild(messageElement);
    conversationArea.scrollTop = conversationArea.scrollHeight;
}

// Function to handle user message submission and response
function handleUserMessage() {
    const message = userInput.value.trim();
    if (message) {
        displayMessage(message, 'user-message');
        userInput.value = '';

        const elizaResponse = generateElizaResponse(message);
        displayMessage(elizaResponse, 'eliza-message');
    }
}

// Attach the function to send button click
sendButton.addEventListener("click", handleUserMessage);

// Allow pressing Enter to send the message
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleUserMessage();
    }
});