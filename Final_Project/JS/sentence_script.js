const vocabulary = {
    "Xin chào": "Hello",
    "Tôi làm việc": "I work",
    "Cái bút": "The pen",
    "Điều kiện": "Condition",
    "Thành phố": "City",
    // Add more Vietnamese words and their English translations here
};

function translateSentence(sentence) {
    const words = sentence.split(" ");
    const translatedWords = words.map(word => {
        const translatedWord = vocabulary[word];
        return translatedWord ? translatedWord : word; // Use translated word if found in vocabulary, otherwise keep original word
    });
    return translatedWords.join(" ");
}

function translate() {
    const sentenceInput = document.getElementById("sentence");
    const translatedSentenceOutput = document.getElementById("translatedSentence");

    const sentence = sentenceInput.value.trim();
    if (sentence === "") {
        translatedSentenceOutput.textContent = "Please enter a sentence.";
        return;
    }

    const translatedSentence = translateSentence(sentence);
    translatedSentenceOutput.textContent = translatedSentence;
}