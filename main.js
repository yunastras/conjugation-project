



// fetch('vocab.json')
//     .then(res => res.json())
//     .then(data => {
//     vocab = data;
//     })

let vocab = null;

// API / CALLING FILES / 
async function loadVocab()   {
    try {
        const response = await fetch('vocab.json');
        const data = await response.json();
        vocab = data;
        console.log(vocab);

    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}

loadVocab();

// document.getElementById("showWordsBtn").onclick = 

// document.getElementById("showWordsBtn").onclick = showFrenchWords;

document.getElementById("userSubmit").onclick = function () {
    const userInput = document.getElementById("userInput").value;
    let correctness = "Incorrect";
    for (let i = 0; i <= 20; i++) {
        if (vocab[i] && userInput === vocab[i].answer) {
            correctness = "Correct";
        }
    } }
//     document.getElementById("correctness").textContent = `Answer is: ${correctness}`;
// };

    document.body.style.backgroundColor = "pink";

//     let userAnswer;
    
// function showFrenchWords() {
//     if (!vocab) return;
//     document.getElementById("frenchWords").innerHTML = ""; 
//     for (let i = 0; i <= 20; i++) {
//         if (vocab[i]) {
//             document.getElementById("frenchWords").innerHTML += `${vocab[i].pronoun} ${vocab[i].verb} <br>`;
//         }
//     }
// }


   


