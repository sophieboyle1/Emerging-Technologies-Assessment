# Emerging Technologies Assessment

## Trigram Language Model Project - Sophie Boyle G00410444

This research uses publicly available text data from English publications to construct a third-order letter approximation model. The objective is to learn trigram patterns and use them to produce text that is similar to English.
- https://www.gutenberg.org/

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

### Task 3 -

### Task 4 - 
