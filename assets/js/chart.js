document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('geoChart').getContext('2d');
    const geoChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [{
                label: 'Number of Events',
                data: [50, 60, 70, 90],
                backgroundColor: 'rgba(0, 119, 204, 0.5)',
                borderColor: 'rgba(0, 119, 204, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
