const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const conversationArea = document.getElementById("conversation-area");

let elizaResponses = {};

// function to fetch and parse responses.txt
async function loadResponses() {
    try {
        const response = await fetch("responses.txt");
        const text = await response.text();
        parseResponses(text);
    } catch (error) {
        console.error("Error loading responses:", error);
    }
}

// function to parse the responses.txt content
function parseResponses(text) {
    const lines = text.split("\n");
    let keyword = null;
    elizaResponses = {};

    lines.forEach(line => {
        line = line.trim();
        if (line.startsWith("#") || line === "") {
            return; // skip comments and empty lines
        }

        if (line.startsWith("(?i)")) {
            // line is a keyword
            keyword = line.replace("(?i)", "").trim();
            elizaResponses[keyword] = [];
        } else if (keyword) {
            // line is a response for the current keyword
            elizaResponses[keyword].push(line);
        }
    });
}

// function to generate a response based on user input
function generateElizaResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // iterate through each keyword and pattern
    for (const [pattern, responses] of Object.entries(elizaResponses)) {
        const regex = new RegExp(pattern, "i"); // create a case-insensitive regex
        const match = lowerCaseMessage.match(regex); // match user input with the pattern
        
        if (match) {
            // select a random response 
            let response = responses[Math.floor(Math.random() * responses.length)];
            
            // replace placeholders like $1 with the actual matched groups
            for (let i = 1; i < match.length; i++) {
                response = response.replace(`$${i}`, match[i]);
            }
            
            return response;
        }
    }
    
    // default response if no patterns matched
    return "Please tell me more about that.";
}


// function to display a message
function displayMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    conversationArea.appendChild(messageElement);
    conversationArea.scrollTop = conversationArea.scrollHeight;
}

// function to handle user message submission and response
function handleUserMessage() {
    const message = userInput.value.trim();
    if (message) {
        displayMessage(message, 'user-message');
        userInput.value = '';

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

// load responses when the page loads
window.addEventListener("load", loadResponses);
