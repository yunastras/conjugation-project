/*
You have to use .then with loadVocabWithPromises because it returns a Promise, not the actual data.
The fetch API is asynchronous—it starts loading the file and immediately returns a Promise that will eventually contain the data.
The .then method lets you specify what to do when the data is ready, without blocking the rest of your code.
This is how JavaScript handles operations that take time, like loading files or making network requests, so your page stays responsive.
*/

//sk_a2e15a9d49de39815ef528382a48ebf9904595926fff7350

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
            displayCurrentWord();
            return vocab;
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
} 

// Variable to store the loaded vocabulary data
let vocab = null;
let randomIndex = 0;

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


function displayCurrentWord() {
    if (randomIndex >= vocab.length) {
        document.getElementById("frenchWords").innerText = "All done!";
        return;
    }
    randomIndex = Math.floor(Math.random() * vocab.length);
    const item = vocab[randomIndex];
    document.getElementById("pronouns").innerText =
        `Pronoun: ${item.pronoun}`;
    document.getElementById("verbs").innerText =
        `Verb: ${item.verb}`;
    document.getElementById("tense").innerText =
        `Tense: ${item.tense}`;

    document.getElementById("fillinblankbox").innerText = 
        `${item.pronoun} ____`;
}

function checkAnswer() {
    const userInput = document.querySelector('#submissionBox').value.trim().toLowerCase();
    const correctAnswer = vocab[randomIndex].answer.trim().toLowerCase();
    
    const voices = speechSynthesis.getVoices();
    const utterance = new SpeechSynthesisUtterance(userInput);
    utterance.lang = "fr-FR";
    window.speechSynthesis.speak(utterance);

    if (userInput === correctAnswer) {
        const item = vocab[randomIndex];
        document.getElementById("correctness").innerText = 'Correct!';
        document.querySelector('#submissionBox').value = '';
        document.getElementById("fillinblankbox").innerText = 
        `${item.pronoun} ${item.answer}`;
        // displayCurrentWord();

    document.getElementById("nextbutton")
      .addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      displayCurrentWord();      
      event.preventDefault(); 
    }
  });

  document.getElementById("nextbutton")
  .addEventListener("click", displayCurrentWord);
  
        
    } else {
        document.getElementById("correctness").innerText = 'Try again!';
    }
}




document.getElementById("submissionBox")
  .addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      checkAnswer();      
      event.preventDefault(); 
    }
  });

loadVocab();