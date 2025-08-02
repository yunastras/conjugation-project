

let vocab = [];


fetch('vocab.json')
    .then(res => res.json())
    .then(data => {
    vocab = data;

    


for (let i = 0; i <= 20; i++) {
    console.log(vocab[i].pronoun, vocab[i].verb);

}
 console.log('Vocab data loaded:', vocab);
    });
   