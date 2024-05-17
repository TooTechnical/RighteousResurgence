async function fetchData() {
    const response = await fetch('data/polling.json');
    const data = await response.json();
    displayChart(data);
}

function displayChart(data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(entry => entry.date),
            datasets: [{
                label: 'Biden',
                data: data.map(entry => entry.biden),
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Trump',
                data: data.map(entry => entry.trump),
                borderColor: 'rgba(255, 99, 132, 1)',
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
}

async function fetchNews() {
    const apiKey = '9d266754cbfd4eb09dffc289753ebfe0';  // Replace with your NewsAPI key
    const response = await fetch(`https://newsapi.org/v2/everything?q=biden+trump&apiKey=${apiKey}`);
    const data = await response.json();
    displayNews(data.articles);
}

function displayNews(articles) {
    const newsFeed = document.getElementById('news-feed');
    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.innerHTML = `<h3>${article.title}</h3><p>${article.description}</p>`;
        newsFeed.appendChild(articleDiv);
    });
}

document.getElementById('pollForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const candidate = document.getElementById('candidate').value;
    const pollResults = document.getElementById('pollResults');
    pollResults.innerHTML = `You support: ${candidate}`;
});

fetchData();
fetchNews();
