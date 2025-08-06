



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
        return vocab;
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }

}



function displayWords() {
    let content = null
    const data = loadVocab(); // be the array that is returned
    console.log(data)

    // get data from load vocab and loop through size of array
    for(i = 0; i < 10; i++) {

    }

    document.getElementById("frenchWords").innerText = content

}

displayWords()