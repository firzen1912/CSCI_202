// Function to switch language and save preference to local storage
function switchLanguage() {
    var languageSelector = document.getElementById("languageSelector");
    var selectedLanguage = languageSelector.value;
    localStorage.setItem("selectedLanguage", selectedLanguage);
    updateContent(selectedLanguage);
}

// Function to load the selected language from local storage
function loadLanguage() {
    var selectedLanguage = localStorage.getItem("selectedLanguage");
    if (selectedLanguage) {
        var languageSelector = document.getElementById("languageSelector");
        languageSelector.value = selectedLanguage;
        updateContent(selectedLanguage);
    }
}

// Function to update content based on selected language
function updateContent(selectedLanguage) {
    var englishContent = document.getElementById("englishContent");
    var vietnameseContent = document.getElementById("vietnameseContent");
    var englishInstruction = document.getElementById("englishInstruction");
    var vietnameseInstruction = document.getElementById("vietnameseInstruction");
    if (selectedLanguage === "en") {
        englishContent.style.display = "block";
        vietnameseContent.style.display = "none";
        englishInstruction.style.display = "block";
        vietnameseInstruction.style.display = "none";
    } else {
        englishContent.style.display = "none";
        vietnameseContent.style.display = "block";
        englishInstruction.style.display = "none";
        vietnameseInstruction.style.display = "block";
    }
}

// Call loadLanguage() when the page loads
window.onload = loadLanguage;