const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const conversationArea = document.getElementById("conversation-area");

// Define keywords and responses
const elizaResponses = {
    "sorry": ["No need to apologize.", "It's okay, please go on."],
    "mother": ["Tell me more about your mother.", "How do you feel about your mother?", "What comes to mind when you think about your mother?"],
    "father": ["How does your relationship with your father make you feel?", "Please tell me more about your father."],
    "family": ["Tell me more about your family.", "How do you feel about your family?", "Does anyone in your family stand out to you?"],
    "feel": ["Why do you feel that way?", "Do you often feel this way?", "What do these feelings make you think about?"],
    "sad": ["I'm sorry to hear that. What do you think is causing these feelings?", "Tell me more about what's making you feel sad."],
    "happy": ["What’s making you feel happy?", "How long have you felt this way?", "Do you feel this way often?"],
    "angry": ["Why do you feel angry?", "Tell me more about what’s making you angry.", "What usually helps when you feel angry?"],
    "friend": ["Tell me more about your friends.", "Do you have a best friend?", "What do you value in your friendships?"],
    "relationship": ["What is important to you in a relationship?", "How do you feel about your relationships?", "What does a good relationship look like to you?"],
    "help": ["How can I help you?", "What do you need help with?", "I’m here to help. What’s on your mind?"],
    "why": ["Why do you ask?", "Can you explain why that’s on your mind?", "What do you think the reason is?"],
    "because": ["Is that the only reason?", "Can you think of other reasons?", "What led you to feel that way?"],
    "think": ["What makes you think that?", "Why do you think so?", "Do you often think about this?"],
    "yes": ["I see. Can you tell me more?", "Why do you say yes?", "Can you elaborate on that?"],
    "no": ["Why do you say no?", "What makes you feel that way?", "Is there a reason you disagree?"],
    "dream": ["What did you dream about?", "How did the dream make you feel?", "Do you often remember your dreams?"],
    "life": ["What about your life would you like to discuss?", "Tell me more about your life.", "How do you feel about your life at the moment?"],
    "work": ["How do you feel about your work?", "What kind of work do you do?", "Is work something that’s on your mind a lot?"],
    "anxious": ["What is making you feel anxious?", "How long have you been feeling this way?", "Does talking about it help?"],
    "fear": ["What are you afraid of?", "Why does that cause you fear?", "Have you felt this fear before?"],
    "love": ["Who or what do you love?", "How does love make you feel?", "Can you describe what love means to you?"],
    "hate": ["What makes you feel that way?", "Why do you feel hatred?", "Have you felt this way for a long time?"],
    "bored": ["What usually makes you feel better?", "Why do you feel bored?", "What do you wish you were doing instead?"],
    "alone": ["Do you often feel alone?", "What does being alone mean to you?", "Would you like to talk more about this feeling?"],
    "friend": ["Tell me about your friends.", "What’s something you appreciate about your friends?", "How do your friends make you feel?"],
    "can you": ["What would you like me to do?", "What do you need help with?", "I’m here to listen."],
    "i am": ["Why do you feel this way?", "Is this feeling common for you?", "What makes you say that?"],
    "i want": ["What would it mean if you got what you want?", "Why do you want that?", "How would your life change if you had it?"],
    "i need": ["Why do you need that?", "How does it feel to need this?", "What makes this so important to you?"]
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
