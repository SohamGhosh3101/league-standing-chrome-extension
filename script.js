async function fetchStandings() {
    const url = 'https://api-football-v1.p.rapidapi.com/v3/standings?season=2023&league=39';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ad8a2f66e3msh39b3b51809a8d84p197dbejsnb0c16fdca1d2',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        displayStandings(data); // Call the function to display the data
    } catch (error) {
        console.error(error);
    }
}

function displayStandings(data) {
    const standingsList = document.getElementById('standings-list');

    // Assuming the data is structured as an array of standings
    // You'll need to adjust this based on the actual structure of the API response
    const standingsHTML = data.response[0].league.standings[0].map((standing, index) => {
        return `${index + 1}. ${standing.team.name}: ${standing.points}<br>`;
    }).join('');

    standingsList.innerHTML = standingsHTML; // Populate the list items
}

// Call the function to fetch and display standings
fetchStandings();
