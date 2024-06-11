document.addEventListener('DOMContentLoaded', () => {
    const userInputs = [];
    const form = document.getElementById('userInputForm');
    const resultsDiv = document.getElementById('results');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const candidate = document.getElementById('candidate').value;
        userInputs.push(candidate);
        displayResults();
    });

    function displayResults() {
        const totalVotes = userInputs.length;
        const bidenVotes = userInputs.filter(vote => vote === 'Biden').length;
        const trumpVotes = userInputs.filter(vote => vote === 'Trump').length;
        const bidenPercentage = ((bidenVotes / totalVotes) * 100).toFixed(2);
        const trumpPercentage = ((trumpVotes / totalVotes) * 100).toFixed(2);

        resultsDiv.innerHTML = `
            <p>Total Votes: ${totalVotes}</p>
            <p>Joe Biden: ${bidenVotes} votes (${bidenPercentage}%)</p>
            <p>Donald Trump: ${trumpVotes} votes (${trumpPercentage}%)</p>
        `;

        // Update the chart
        updateChart(bidenPercentage, trumpPercentage);
    }

    // Chart.js setup
    const ctx = document.getElementById('probabilityChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'pie',
        maintainAspectRatio: false,
        responsive: true,
        data: {
            labels: ['Joe Biden', 'Donald Trump'],
            datasets: [{
                label: 'Election Probability',
                data: [0, 0],
                backgroundColor: ['#00AEF3', '#E81B23'],
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                    top: 10,
                    bottom: 10
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    });

    function updateChart(bidenPercentage, trumpPercentage) {
        chart.data.datasets[0].data = [bidenPercentage, trumpPercentage];
        chart.update();
    }
});
