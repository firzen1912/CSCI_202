const vocabulary = {
    "Phrases": [
        { vietnamese: "Xin chào", english: "Hello there" },
        { vietnamese: "Tên tôi là Linh", english: "My name is Linh" },
        { vietnamese: "Tôi đến từ Việt Nam", english: "I am from Vietnam" },
        { vietnamese: "Tôi đang du lịch tại Mỹ", english: "I am traveling in The USA" },
        // Add more phrases here as objects
    ]
    // Add more categories if necessary
};

let currentPhraseIndex = 0;
let totalPhrases = vocabulary.Phrases.length;

let originalWordIndices = []; // Store original word indices before shuffling
let clickedWordIndices = []; // Store indices of clicked words

let needRefresh = false; // Flag to track if the exercise needs to be refreshed

function generateExercise() {
    // Select the current phrase based on the current index
    const currentPhrase = vocabulary.Phrases[currentPhraseIndex];
    const words = currentPhrase.english.split(" ");
    const wordIndices = Array.from({ length: words.length }, (_, i) => i); // Array of indices

    // Store original order of word indices
    originalWordIndices = wordIndices.slice();

    // Shuffle the order of indices
    const shuffledIndices = shuffleArray(wordIndices);

    // Clear clickedWordIndices array
    clickedWordIndices = [];

    const exerciseContainer = document.getElementById('exercise');
    exerciseContainer.innerHTML = `
        <div class="exercise">
            <div class="full_vietnamese_text">
                ${currentPhrase.vietnamese}
            </div>
            <div class="full_english_audio">
                <button onclick="speak('${currentPhrase.english}', 'en', ${currentPhraseIndex}, 'full')">Âm Thanh Tiếng Anh Đầy Đủ</button>
            </div>
            <div class="scramble_word_audio">
                ${shuffledIndices.map(index => `
                    <button id="wordButton_${index}" onclick="speak('${words[index]}', 'en', ${index})">${words[index]}</button>
                `).join('')}
            </div>
        </div>
        <div id="message"></div>
        <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${((currentPhraseIndex + 1) / totalPhrases) * 100}%"></div>
            <span>${currentPhraseIndex + 1} / ${totalPhrases}</span>
        </div>
        <div class="button-container">
            <button id="prevButton" onclick="prevExercise()">Bài Tập Trước</button>
            <button onclick="refreshExercise()">Làm Mới</button>
            <button id="nextButton" onclick="nextExercise()">Bài Tập Tiếp</button>
        </div>
    `;

    // Set needRefresh to false when generating new exercise
    needRefresh = false;
}


function speak(word, lang, index, type) {
    if (lang === 'en') {
        // For English language
        if (type === 'full') {
            // If index is provided, indicating full phrase audio
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'en-US'; // Set language to English
            window.speechSynthesis.speak(utterance);
        } else {
            // If index is not provided, play the individual word audio
            const button = document.getElementById(`wordButton_${index}`); // Get the button element that was clicked
            button.disabled = true; // Disable the button
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'en-US'; // Set language to English
            window.speechSynthesis.speak(utterance);
            // Store the index of clicked word
            clickedWordIndices.push(index);
            // Check if all buttons have been pressed
            if (clickedWordIndices.length === originalWordIndices.length) {
                // If all buttons are pressed, check the order and display the message
                checkOrder();
                // Set needRefresh to true
                needRefresh = true;
            }
        }
    } else {
        // For other languages, use text-to-speech engine
        const speechSynthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = lang;
        speechSynthesis.speak(utterance);
    }
}

// Add event listener to document to listen for any click event
document.addEventListener('click', function(event) {
    // Check if needRefresh is true and event target is not a button
    if (needRefresh && event.target.tagName !== 'BUTTON') {
        refreshExercise();
    }
});

function checkOrder() {
    // Check if the sequence of clicked word indices matches the original order
    const isCorrectOrder = JSON.stringify(clickedWordIndices) === JSON.stringify(originalWordIndices);
    const messageElement = document.getElementById('message');
    if (isCorrectOrder) {
        messageElement.textContent = "Thứ tự đúng!";
    } else {
        messageElement.textContent = "Thứ tự không đúng!";
    }
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function prevExercise() {
    currentPhraseIndex = (currentPhraseIndex - 1 + totalPhrases) % totalPhrases;
    generateExercise();
}

function refreshExercise() {
    clickedWordIndices = []; // Clear clickedWordIndices array
    generateExercise(); // Generate a new exercise
}

function nextExercise() {
    currentPhraseIndex = (currentPhraseIndex + 1) % totalPhrases;
    generateExercise();
}

// Generate initial exercise
generateExercise();
