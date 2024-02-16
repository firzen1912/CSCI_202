document.addEventListener('DOMContentLoaded', function () {
    // Define the JSON data directly
    const jsonData = {
        "message": "success",
        "people": [
            {"name": "Jasmin Moghbeli", "craft": "ISS"},
            {"name": "Andreas Mogensen", "craft": "ISS"},
            {"name": "Satoshi Furukawa", "craft": "ISS"},
            {"name": "Konstantin Borisov", "craft": "ISS"},
            {"name": "Oleg Kononenko", "craft": "ISS"},
            {"name": "Nikolai Chub", "craft": "ISS"},
            {"name": "Loral O'Hara", "craft": "ISS"}
        ],
        "number": 7
    };

    // Process the JSON data
    const peopleContainer = document.getElementById('people');
    const people = jsonData.people;
    const totalCount = jsonData.number;

    peopleContainer.innerHTML = `<p>Total people in space: ${totalCount}</p>`;

    people.forEach(person => {
        const personElement = document.createElement('div');
        personElement.classList.add('person');
        personElement.innerHTML = `
            <p>Name: ${person.name}</p>
            <p>Craft: ${person.craft}</p>
        `;
        peopleContainer.appendChild(personElement);
    });
});
