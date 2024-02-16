document.addEventListener('DOMContentLoaded', function () {
    // Define the JSON data including image URLs and descriptors
    const jsonData = {
        "message": "success",
        "people": [
            {"name": "Jasmin Moghbeli", "craft": "ISS", "image": "../Images/jasmin_moghbeli.jpg", "descriptor": "Jasmin Moghbeli was born in Bad Nauheim, West Germany, on June 24, 1983. Her father, Kamran (Kamy) Moghbeli, was an architect who immigrated to Germany in 1980 from Tehran, Iran. He and his family lived in Bad Nauheim, where Jasmin was born, until the beginning of 1984 when they immigrated to the United States. Her mother is Fereshta (Fery) Moghbeli.Moghbeli has an older brother, Kaveh, specialist in pulmonary and intensive care medicine. Moghbeli speaks Persian (Farsi),English, and learned Russian during her astronaut training. Moghbeli attended Baldwin Senior High School in New York. She earned a bachelor's degree in aerospace engineering with information technology at the Massachusetts Institute of Technology (MIT), and played volleyball, lacrosse, and basketball for the MIT Engineers."},

            {"name": "Andreas Mogensen", "craft": "ISS", "image": "../Images/andreas_mogensen.jpg", "descriptor": "Andreas Mogensen was born in Copenhagen. Mogensen attended primary school at Rygaards International School in Hellerup, where he graduated in 1992. He received an International Baccalaureate from Copenhagen International School in 1995. He then went to the Imperial College London where he obtained an MEng degree in Aeronautical Engineering in 1999. Between 2001 and 2003 he worked as an engineer in the R&D department of Vestas Wind Systems in Denmark. Subsequently, Mogensen earned a PhD degree in Aerospace Engineering at the University of Texas at Austin in 2007. Furthermore, as part of his studies, he spent a semester at the Instituto Superior Técnico - University of Lisbon in Lisbon, Portugal."},

            {"name": "Satoshi Furukawa", "craft": "ISS", "image": "../Images/satoshi_furukawa.jpg", "descriptor": "Satoshi Furukawa graduated from Eiko high school, Kamakura, in 1983; he received a Doctor of Medicine degree from the University of Tokyo in 1989, and a Doctor of Philosophy degree in Medical Science from the same in 2000. From 1989 to 1999, Furukawa worked in the Department of Surgery at the University of Tokyo, as well as the Department of Anesthesiology at JR Tokyo General Hospital, the Department of Surgery at Ibaraki Prefectural Central Hospital, and at Sakuragaoka Hospital. "},

            {"name": "Konstantin Borisov", "craft": "ISS", "image": "../Images/konstantin_borisov.jpg", "descriptor": "Konstantin Borisov has received a Bachelor of Economics from the Plekhanov Russian University of Economics on June 27, 2007. From September 27, 2006 to December 3, 2007, he studied at University of Warwick, Coventry, UK, where he received his Master of Science in Operations Research and Systems Analysis. In June 2018, he completed his studies at the Moscow Aviation Institute on the Master Program Life Support Systems for Aircraft (2016-2018), with the qualification Master in the direction of Aircraft Building."},

            {"name": "Oleg Kononenko", "craft": "ISS", "image": "../Images/oleg_kononenko.jpg", "descriptor": "Oleg Kononenko was born on 21 June 1964 in Chardzhou, Turkmen SSR (now Türkmenabat, Turkmenistan) to a simple family. His father Dmitry Ivanovich Kononenko worked as a driver in a freight trucking company, and his mother Taisiya Stepanovna Churakova was a communications operator at the Türkmenabat Airport. Kononenko graduated from high school No. 15 of Turkmenabat city, where he received excellent marks in the subject of the Turkmen language."},

            {"name": "Nikolai Chub", "craft": "ISS", "image": "../Images/nikolai_chub.jpg", "descriptor": "Nikolai Chub has passions for flying and hiking. Born in 1984 in the south of Russia, he holds several records for wingsuit flying in Europe and his native country. Like many space travelers, Nikolai dreamed of space all his life. He became a cosmonaut when he was only 28 years old. Since then, this computer engineer and parachutist has completed winter, desert and mountain survival trainings. Caption courtesy of ESA."},

            {"name": "Loral O'Hara", "craft": "ISS", "image": "../Images/loral_ohara.jpg", "descriptor": "Loral Ashley O'Hara was born on May 3, 1983, in Houston, Texas, to Cindy and Steve O'Hara. She grew up in Sugar Land, Texas, where she attended Clements High School. She earned a Bachelor of Science degree in aerospace engineering from the University of Kansas in 2005, and a Master of Science in aeronautics and astronautics from Purdue University in 2009. While she was a student, O'Hara participated in the KC-135 Reduced Gravity Student Flight Opportunities Program."}
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
            <p>${person.name}</p>
            <img src="${person.image}" alt="${person.name}" width="100">
            <p>${person.descriptor}</p>
            <p>Craft: ${person.craft}</p>
        `;
        peopleContainer.appendChild(personElement);
    });
});
