function updateTimeAndColor(sliderValue, offset, timeId, dateId, timeZone) {
    const currentDate = new Date();
    const utcHour = sliderValue % 24; // Calculate the actual UTC hour based on the slider value

    // Adjust the offset based on whether it's UTC+ or UTC-
    const adjustedOffset = offset >= 0 ? -offset : Math.abs(offset);

    const currentHour = (utcHour + adjustedOffset + 24) % 24; // Ensure the result is non-negative

    const options = { timeZone, hour12: false };
    const timeString = currentDate.toLocaleTimeString('en-US', options);

    // Use Intl.DateTimeFormat to get the date based on the selected time zone
    const dateOptions = { timeZone, year: 'numeric', month: 'numeric', day: 'numeric' };
    const dateString = new Intl.DateTimeFormat('en-US', dateOptions).format(currentDate);

    document.getElementById(timeId).innerText = `Time: ${timeString}`;
    document.getElementById(dateId).innerText = `Date: ${dateString}`;

    const blockElement = document.getElementById(timeId).parentNode;

    if (currentHour >= 6 && currentHour < 12) {
        // Morning (cyan)
        blockElement.style.backgroundColor = '#0095FF'; // Cyan
    } else if (currentHour >= 12 && currentHour < 18) {
        // Afternoon (blue)
        blockElement.style.backgroundColor = '#0000FF'; // Blue
    } else if (currentHour >= 18 && currentHour < 24) {
        // Evening (dark blue)
        blockElement.style.backgroundColor = '#000090'; // Dark Blue
    } else {
        // Midnight to early morning (Black)
        blockElement.style.backgroundColor = '#000000'; // Black
    }
}


function updateWithSlider() {
    const sliderValue = parseInt(document.getElementById('timeSlider').value, 10);

    // Update all UTC time zones dynamically
    for (let i = -12; i <= 12; i++) {
        updateTimeAndColor(sliderValue, i, `time${i}`, `date${i}`, `Etc/GMT${i >= 0 ? '+' : ''}${i}`);
    }
}

function resetToDefault() {
    document.getElementById('timeSlider').value = new Date().getUTCHours();
    updateWithSlider();
}

// Initial update based on the slider value
updateWithSlider();

// Update time and color every second
setInterval(function () {
    updateWithSlider();
}, 1000);

// Update time and color when the slider value changes
document.getElementById('timeSlider').addEventListener('input', updateWithSlider);

// Reset to default button
document.getElementById('resetButton').addEventListener('click', resetToDefault);
