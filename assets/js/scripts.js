// Event listener that runs the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const userInputs = []; // Hover: Array to store user input for candidate votes
    const form = document.getElementById('userInputForm'); // Hover: Get the form element by its ID
    const resultsDiv = document.getElementById('results'); // Hover: Get the results div element by its ID

    // Event listener for form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Hover: Prevent the default form submission behavior
        const candidate = document.getElementById('candidate').value; // Hover: Get the selected candidate value
        userInputs.push(candidate); // Hover: Add the selected candidate to the userInputs array
        displayResults(); // Hover: Call the function to display the results
    });

    // Function to display the voting results
    function displayResults() {
        const totalVotes = userInputs.length; // Hover: Calculate the total number of votes
        const bidenVotes = userInputs.filter(vote => vote === 'Biden').length; // Hover: Count the number of votes for Biden
        const trumpVotes = userInputs.filter(vote => vote === 'Trump').length; // Hover: Count the number of votes for Trump
        const bidenPercentage = ((bidenVotes / totalVotes) * 100).toFixed(2); // Hover: Calculate the percentage of votes for Biden
        const trumpPercentage = ((trumpVotes / totalVotes) * 100).toFixed(2); // Hover: Calculate the percentage of votes for Trump

        resultsDiv.innerHTML = `
            <p>Total Votes: ${totalVotes}</p>
            <p>Joe Biden: ${bidenVotes} votes (${bidenPercentage}%)</p>
            <p>Donald Trump: ${trumpVotes} votes (${trumpPercentage}%)</p>
        `; // Hover: Display the total votes, votes for Biden, and votes for Trump in the results div

        // Update the chart with the new data
        updateChart(bidenPercentage, trumpPercentage); // Hover: Call the function to update the chart with the new percentages
    }

    // Chart.js setup
    const ctx = document.getElementById('probabilityChart').getContext('2d'); // Hover: Get the context for the chart canvas element
    const chart = new Chart(ctx, {
        type: 'pie', // Hover: Define the type of chart as a pie chart
        maintainAspectRatio: false, // Hover: Disable maintaining aspect ratio
        responsive: true, // Hover: Enable responsive design for the chart
        data: {
            labels: ['Joe Biden', 'Donald Trump'], // Hover: Labels for the chart segments
            datasets: [{
                label: 'Election Probability', // Hover: Label for the dataset
                data: [0, 0], // Hover: Initial data values for the chart
                backgroundColor: ['#00AEF3', '#E81B23'], // Hover: Colors for the chart segments (Biden and Trump)
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                    top: 10,
                    bottom: 10 // Hover: Padding around the chart
                }
            },
            plugins: {
                legend: {
                    position: 'top' // Hover: Position of the chart legend
                },
                tooltip: {
                    enabled: true // Hover: Enable tooltips on the chart
                }
            }
        }
    });

    // Function to update the chart with new data
    function updateChart(bidenPercentage, trumpPercentage) {
        chart.data.datasets[0].data = [bidenPercentage, trumpPercentage]; // Hover: Update the chart data with new percentages
        chart.update(); // Hover: Update the chart to reflect the new data
    }
});
