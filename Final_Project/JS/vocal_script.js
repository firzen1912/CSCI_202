const vocabulary = {
    "Xin chào": "Hello",
    "Cái bút": "The pen",
    "Điều kiện": "Condition",
    "Thành phố": "City",
    "Bàn": "Table",
    "Sách": "Book",
    "Máy tính": "Computer",
    "Quyển sổ": "Notebook",
    "Nhà hàng": "Restaurant",
    "Con chó": "Dog",
    "Con mèo": "Cat",
    "Trái cây": "Fruit",
    "Máy ảnh": "Camera",
    "Học sinh": "Student",
    "Gia đình": "Family",
    "Bác sĩ": "Doctor",
    "Hoa": "Flower",
    "Trời": "Sky",
    "Biển": "Sea",
    "Ngôi nhà": "House",
    "Trường học": "School",
    "Bể bơi": "Swimming pool",
    "Cửa hàng": "Shop",
    "Sân bay": "Airport",
    "Bếp": "Kitchen",
    "Phòng ngủ": "Bedroom",
    "Phòng tắm": "Bathroom",
    "Quần áo": "Clothes",
    "Giày": "Shoes",
    "Tivi": "TV",
    "Điện thoại": "Phone",
    "Xe hơi": "Car",
    "Xe bus": "Bus",
    "Đường phố": "Street",
    "Bình minh": "Sunrise",
    "Hoàng hôn": "Sunset",
    "Công viên": "Park",
    "Dãy núi": "Mountain",
    "Sông": "River",
    "Đồng cỏ": "Grassland",
    "Máy giặt": "Washing machine",
    "Máy sấy": "Dryer",
    "Nước": "Water",
    "Nước mắt": "Tears",
    "Nắng": "Sunshine",
    "Mưa": "Rain",
    "Gió": "Wind",
    "Tuyết": "Snow",
    "Mây": "Cloud",
    // Add more Vietnamese words and their English translations here
};

function generateExercise() {
    const vietnameseWords = Object.keys(vocabulary);
    const randomIndex = Math.floor(Math.random() * vietnameseWords.length);
    const randomVietnameseWord = vietnameseWords[randomIndex];
    const englishTranslation = vocabulary[randomVietnameseWord];

    const exerciseContainer = document.getElementById('exercise');
    exerciseContainer.innerHTML = `
        <p><strong>Translate the Vietnamese word:</strong></p>
        <p>${randomVietnameseWord}</p>
        <input type="text" id="userTranslation" placeholder="Enter English translation">
        <button onclick="checkTranslation('${englishTranslation}')">Check</button>
        <p id="result"></p>
    `;
}

function checkTranslation(correctTranslation) {
    const userTranslation = document.getElementById('userTranslation').value;
    const resultContainer = document.getElementById('result');
    if (userTranslation.trim().toLowerCase() === correctTranslation.toLowerCase()) {
        resultContainer.textContent = "Correct!";
    } else {
        resultContainer.textContent = "Incorrect. The correct translation is: " + correctTranslation;
    }
}

// Generate initial exercise
generateExercise();
