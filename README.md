# Emerging Technologies Assessment

## Trigram Language Model & ElIZA Chatbot Project - Sophie Boyle G00410444

### Table of Contents

1. [Installation](#Installation)
2. [Task 1: Third-Order Letter Approximation Model](#task-1)
3. [Task 2: Third-Order Letter Approximation Generation](#task-2)
4. [Task 3: Analyzing the Generated Text](#task-3)
5. [Task 4: Exporting the Model as JSON](#task-4)
6. [Eliza Chatbot](#eliza-chatbot)
7. [Testing](#Testing)
8. [References](#references)

### Installation and Setup

To get started with this project, follow the steps below:

1. Clone the repository
2. Clone the GitHub repository to your local machine: git clone https://github.com/sophieboyle1/Emerging-Technologies-Assessment.git
3. Navigate to the project directory.
4. Change into the project directory: cd Emerging-Technologies-Assessment
5. Run the Trigram Notebook
6. Open the trigrams.ipynb file in Jupyter Notebook or a compatible Python environment.
7. Execute the cells sequentially to explore the trigram language model.

### Overview 

- **For my Emerging Technologies Project, I worked on two key components - a trigram language model and an implementation of the ELIZA chatbot.**
- **The first part of the project involved creating a third-order letter approximation model. Using text data from public domain English texts from Project Gutenberg, I analyzed patterns of three consecutive characters to better understand the structure of written English. The model generates text based on these patterns, producing outputs that resemble natural English.**
- **The second part of the project was building a modern version of the classic ELIZA chatbot. This involved creating a responsive chatbot in JavaScript. ELIZA responds to user input using pre-defined patterns and reflections, making the interaction feel conversational. I also deployed the chatbot using GitHub Pages, making it accessible online.**

### ELIZA Chatbot

The ELIZA Chatbot is live and accessible via GitHub Pages.

🔗 [Access the ELIZA Chatbot](https://sophieboyle1.github.io/Emerging-Technologies-Assessment/)

### Task 1 -

#### Third-Order Letter Approximation Model
The main goal here is to create a trigram model based on five books from Project Gutenberg. By analyzing sequences of three characters, the model can predict the next letter in a text, which allows to generate sentences that somewhat resemble English writing.

#### Data Collection and Preprocessing
I selected five English texts from Project Gutenberg in UTF-8 format. To prepare the texts:

Preamble and postamble removal: I cleaned the text by removing introductory and closing content using the markers `*** START OF THIS PROJECT GUTENBERG EBOOK` and `*** END OF THIS PROJECT GUTENBERG EBOOK`
Text cleaning: All non-letter characters, except for spaces and periods, were removed. Letters were converted to uppercase to simplify trigram counting.

#### Trigram Model Construction
The model captures every sequence of three characters along with its frequency in the text. A dictionary stores these counts, where each trigram is a key, and its frequency is the value.

```
{
    "THE": 8476,
    "HE ": 7226,
    " IS": 5423
}
```
#### Text Generation
To generate text, I start with two characters, then use the model to predict the next character based on what trigrams start with that two-character seed. The model picks the next character based on how often it appears, and this process continues until I get a full text 10,000 characters long.

#### Research and Related Work
Trigram models are a well-established technique in natural language processing, commonly used for tasks like text prediction. For example, Shannon's Entropy Experiment used similar principles. While I didn’t choose this approach myself, trigrams were a requirement for this project. I followed the same core ideas, focusing on character sequences to keep it manageable.

Although the task specified using trigrams, I’m aware of other n-gram models like bigrams or unigrams. Trigrams offer a good middle ground, capturing enough context from the text without making the model too complex or computationally heavy.

This project draws from research on statistical language models, particularly Markov chains and Shannon’s information theory. These approaches are all about predicting sequences based on historical data, which is exactly what the trigram model is designed to do.

#### Building on Literature
This project is based on research in statistical language models, especially Markov chains and Shannon’s information theory, which both focus on predicting future data based on past data. While these theories have been developed further in more advanced machine learning models, the core idea of using past sequences to generate future ones is still what drives the trigram model.

Additional References:<br>
-Shannon, C. E. (1948). A Mathematical Theory of Communication.
Available online at: https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf

-Jelinek, F. (1990). Self-organized Language Modeling for Speech Recognition.
Available online at: https://www.sciencedirect.com/science/article/abs/pii/S0885230885800351

-Jurafsky, D., & Martin, J. H. (2008). Speech and Language Processing.
Available online at: https://web.stanford.edu/~jurafsky/slp3/

### Task 2 -

#### Goal

The goal of this task is to create 10,000 characters of text that resembles English using the trigram model from task 1. The model starts with "TH" as a seed and uses patterns in the original text to predict each subsequent character, producing an output that should sound substantially like English.

#### How It Works

#### Predicting Characters:
I start the text generating process with "TH" and work my way up from there.
The code looks for trigrams in the model that begin with the string's final two characters for every new character.
More frequent patterns in the original text have a higher chance of being selected as the following character because it is determined by the trigram frequency. As a result, the created text has a natural flow that mimics typical English letter pairings.

#### Creating the Text: 
This procedure keeps going until the text reaches 10,000 characters, adding one character at a time.
By adhering to these probabilities, I can produce a text that has words and sequences that are fairly familiar and reads like genuine English.

#### Testing the Output:
To see if the output looks like English, the first 1,000 characters are printed. This demonstrates that the generating is operating as planned.
Character selection will be somewhat random because it is dependent on probability. The material may appear to be in English, yet it may contain odd sentences or gibberish.
By calculating the quantity of identifiable English terms, Task 3 will examine the created text's resemblance to authentic English in greater detail.

### Task 3 -

#### Goal

For this task, my goal was to evaluate how effective my trigram model is at generating realistic text. To do this, I analyzed the text output by comparing it against a list of valid English words provided in the 'words.txt' file. The idea is to see what percentage of the generated words were actual English words.

#### How It Works

#### Loaded the Word List: 
First, I loaded the words.txt file, which contains a list of valid English words. I stored these words in a Python set for quick lookups.

```
with open("data/words.txt", "r") as file:
    valid_words = set(file.read().splitlines())
```

#### Generated a Block of Text: 
Using the trigram model I created in Task 1, I generated a 10,000-character block of text. The generation started with the seed "TH" and added one character at a time, based on the probabilities from the trigram model.

```
generated_text = generate_text(trigram_model, seed="TH", length=10000)
```

#### Analyzed the Text: 
I split the generated text into seperate words and checked each one against the valid words in words.txt. This allowed me to count how many of the words were valid English words. Then, I calculated the percentage of valid words in the total text.

```
valid_word_count, total_word_count = count_valid_words(generated_text, valid_words)
valid_word_percentage = (valid_word_count / total_word_count) * 100

```

### Task 4 - 

#### Goal

For this task, I exported the trigram model as a JSON file, making it reusable for future analyses or integrations. This step ensures that the model can be shared or utilized without needing to regenerate it.

#### Implementation

I used Python’s json module to serialize the trigram model into a structured file called trigrams.json. The JSON format provides a lightweight, human-readable way to store the trigram data. To keep the output organized, I included formatting like sorted keys and indentation.

The JSON file, trigrams.json, contains all the trigrams and their frequencies, structured for easy access. Here’s a sample of the output:

```
{
    "THE": 8476,
    "HE ": 7226,
    " IS": 5423
}

```

### Eliza Chatbot -

#### Overview

For this part of the project, I recreated a modern version of the ELIZA chatbot. ELIZA is one of the earliest examples of natural language processing, designed to simulate a conversation by responding to user inputs based on pre-defined patterns.

The chatbot uses JavaScript to match user inputs with patterns using regular expressions. It responds with reflective or pre-programmed messages, creating a conversational experience that feels dynamic. The project is fully self-contained and can be run directly in a browser without relying on any external libraries or APIs.

#### Features

- **Dynamic Pattern Matching:**
 The chatbot uses regex patterns to interpret user inputs and provide meaningful responses.
- **Reflections:**
 Pronouns like "I" and "you" are swapped dynamically to make responses feel more natural.
- **Easy Deployment:**
 The chatbot is hosted on GitHub Pages for quick access online.

#### File Structure
The ELIZA chatbot is located in the eliza folder of the repository. Here's what each file does:

- **index.html:**
 The main interface for the chatbot. It contains the structure of the page where you can interact with ELIZA.
- **style.css:**
 Adds styling to the chatbot, making the conversation area and input field visually appealing.
- **eliza.js:**
 Contains all the logic for the chatbot, including pattern matching and generating responses.

#### Live Demo

[Access the ELIZA Chatbot](https://sophieboyle1.github.io/Emerging-Technologies-Assessment/)

#### How It Works

The chatbot logic is based on pattern matching and text transformations:

- **Pattern Matching:**
 User input is compared against a series of regular expressions.
- **Responses:**
 Each pattern has a set of pre-defined responses, with placeholders to adapt dynamically based on user input.
- **Reflections:**
 Key words and pronouns are mirrored (e.g., "I" becomes "you") to make the conversation feel more natural.

#### Pattern Matching and Responses
```
const patterns = [
    { pattern: /I feel (.*)/i, response: ["Why do you feel $1?", "What makes you feel $1?"] },
    { pattern: /hello|hi/i, response: ["Hello! How can I help you today?", "Hi there! What's on your mind?"] }
];
```

#### Dynamic Reflections
```
const reflections = {
    "I": "you",
    "me": "you",
    "my": "your",
    "am": "are"
};
```

### Testing

To ensure the chatbot performs as expected:

1. Test Regular Expressions: Validate that patterns correctly match inputs.
2. Browser Compatibility: Test the chatbot on different browsers to confirm consistent behavior.
3. User Input Scenarios: Input diverse phrases to evaluate ELIZA's responses.


### References - 

- **Reading and Writing Files in Python**  
  - [Python File I/O Documentation](https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files)  
  - [W3Schools - Python File Handling](https://www.w3schools.com/python/python_file_handling.asp)

- **Working with Directories in Python**  
  - [Python OS Module Documentation](https://docs.python.org/3/library/os.html#module-os)  
  - [GeeksforGeeks - Iterate over files in a directory](https://www.geeksforgeeks.org/how-to-iterate-over-files-in-directory-using-python/)

- **String Processing in Python**  
  - [Python String Methods Documentation](https://docs.python.org/3/library/stdtypes.html#string-methods)  
  - [Using Regex in Python](https://www.w3schools.com/python/python_regex.asp)  
  - [Python re Module Documentation](https://docs.python.org/3/library/re.html)  
  - [StackOverflow - Finding substrings with Python](https://stackoverflow.com/a/51456576)

- **Data Structures and Iterables in Python**  
  - [Python Dictionary Documentation](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)  
  - [Python enumerate() Function](https://docs.python.org/3/library/functions.html#enumerate)

- **JSON Manipulation in Python**  
  - [Python JSON Library Documentation](https://docs.python.org/3/library/json.html)

- **Probability and Weighted Random Sampling**  
  - [Python Random Library Documentation](https://docs.python.org/3/library/random.html#random.choices)  
  - [StackOverflow - Weighted Random Choices](https://stackoverflow.com/a/3679747)

- **Eliza Chatbot and NLP Fundamentals**  
  - [Weizenbaum, J. (1966). ELIZA - A Computer Program for the Study of Natural Language Communication Between Man and Machine.](https://dl.acm.org/doi/10.1145/365153.365168)  
  - [NLP Fundamentals - NLTK Documentation](https://www.nltk.org/)

- **N-Gram Models and Language Modeling**  
  - [Shannon, C. E. (1948). A Mathematical Theory of Communication.](https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf)  
  - [Jurafsky, D., & Martin, J. H. (2008). Speech and Language Processing.](https://web.stanford.edu/~jurafsky/slp3/)

- **AI Tools Used in Research**  
  - [OpenAI ChatGPT](https://openai.com/chatgpt): Used for research purposes and for generating test conversations in the Eliza chatbot.  
  - [GitHub Copilot](https://github.com/features/copilot): : Assisted with brainstorming and refining explanations.


