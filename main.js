/*
You have to use .then with loadVocabWithPromises because it returns a Promise, not the actual data.
The fetch API is asynchronous—it starts loading the file and immediately returns a Promise that will eventually contain the data.
The .then method lets you specify what to do when the data is ready, without blocking the rest of your code.
This is how JavaScript handles operations that take time, like loading files or making network requests, so your page stays responsive.
*/


// Example usage of loadVocabWithPromises
loadVocabWithPromises().then(data => {
    console.log('Data loaded with promises:', data);
    // You can use the data here
});


// Function to load vocab.json using fetch with promises (no async/await)
function loadVocabWithPromises() {
    return fetch('vocab.json')
        .then(response => response.json())
        .then(data => {
            vocab = data;
            return vocab;
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
} 

// Variable to store the loaded vocabulary data
let vocab = null;


// Async/await is a way to write asynchronous code in JavaScript that looks and behaves more like regular, synchronous code.
// When you use 'await' in front of a Promise (like fetch), JavaScript pauses the function at that line until the Promise resolves,
// then continues with the result. This makes it easier to read and write code that deals with things that take time, like loading files or data from a server.
// The function using 'await' must be marked as 'async'.
// You muse use await anytime you call an asynchronous function.
// Function to load vocab.json asynchronously
async function loadVocab()   {
    try {
        // Fetch the vocab.json file
        const response = await fetch('vocab.json');
        // Parse the response as JSON
        const data = await response.json();
        // Store the data in the vocab variable
        vocab = data;
        // Return the loaded data
        return vocab;
    } catch (error) {
        // Log any errors that occur during fetch or parsing
        console.error('Error fetching JSON:', error);
    }
}



displayWords()
// Function to display the first 10 vocab entries on the page
async function displayWords() {
    // Initialize an empty string to build the output
    let content = '';
    // Load the vocab data (waits for the async function to complete)
    const data = await loadVocab();
    // Loop through the first 10 items (or less if not enough data)
    for (let i = 0; i < 10 && i < data.length; i++) {
        const item = data[i]; // Get the current vocab object
        // Add a formatted string for this vocab entry to the content
        content += `Pronoun: ${item.pronoun}, Verb: ${item.verb}, Tense: ${item.tense}, Answer: ${item.answer}\n`;
    }
    // Set the text of the element with id 'frenchWords' to the content string
    document.getElementById("frenchWords").innerText = content;
}

// Call the displayWords function to show the vocab on page load
displayWords();