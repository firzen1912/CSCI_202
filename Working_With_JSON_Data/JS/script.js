document.addEventListener('DOMContentLoaded', function () {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        const peopleContainer = document.getElementById('people');
        const people = data.people;
        const totalCount = data.number;
  
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
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  