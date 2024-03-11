const vocabulary = {
    "Subjects": {
        "Tôi": "I",
        "Bạn": "You",
        "Chúng Ta": "We",
        "Cô ấy": "She",
        "Anh ấy": "He",
        "Nó": "It",
        // Add more subjects here
    },
    "Verbs": {
        "chào": "greets",
        "mua": "buys",
        "bán": "sells",
        "chạy": "runs",
        "học": "studies",
        "dạy": "teaches",
        "lái": "drives",
        "nghiên cứu": "researches",
        "ăn": "eats",
        // Add more verbs here
    },
    "Objects": {
        "Cái bút": "the pen",
        "Sách": "the book",
        "Máy tính": "the computer",
        "Quyển sổ": "the notebook",
        "Nhà hàng": "the restaurant",
        "Bàn ăn": "the dining table",
        "Máy ảnh": "the camera",
        "Quần áo": "the clothes",
        "Giày dép": "the shoes",
        "Điện thoại": "the phone",
        // Add more objects here
    }
    // Add more categories if necessary
};


function generateExercise() {
    // Separate vocabulary into subject, verb, and object groups
    const subjects = Object.keys(vocabulary.Subjects);
    const verbs = Object.keys(vocabulary.Verbs);
    const objects = Object.keys(vocabulary.Objects);

    // Randomly select one word from each group
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomObject = objects[Math.floor(Math.random() * objects.length)];

    const exerciseContainer = document.getElementById('exercise');
    exerciseContainer.innerHTML = `
        <div class="sentence">
            <div class="vietnamese">${randomSubject} ${randomVerb} ${randomObject}</div>
            <div class="english">
                <input type="text" id="subjectTranslation" placeholder="Enter English subject">
                <input type="text" id="verbTranslation" placeholder="Enter English verb">
                <input type="text" id="objectTranslation" placeholder="Enter English object">
            </div>
        </div>
        <button onclick="checkTranslation()">Check</button>
        <p id="result"></p>
    `;
}

function checkTranslation() {
    const subject = document.getElementById('subject').value;
    const verb = document.getElementById('verb').value;
    const object = document.getElementById('object').value;
    const subjectTranslation = document.getElementById('subjectTranslation').value;
    const verbTranslation = document.getElementById('verbTranslation').value;
    const objectTranslation = document.getElementById('objectTranslation').value;
    const userTranslation = `${subjectTranslation} ${verbTranslation} ${objectTranslation}`;
    const correctTranslation = vocabulary.Subjects[subject] + ' ' + vocabulary.Verbs[verb] + ' ' + vocabulary.Objects[object];
    const resultContainer = document.getElementById('result');

    if (userTranslation.trim().toLowerCase() === correctTranslation.toLowerCase()) {
        resultContainer.textContent = "Correct!";
    } else {
        resultContainer.textContent = "Incorrect. The correct translation is: " + correctTranslation;
    }
}

// Generate initial exercise
generateExercise();
