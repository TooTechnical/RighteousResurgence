async function fetchNews() {
    const response = await fetch('https://newsapi.org/v2/everything?q=biden+trump&apiKey=YOUR_API_KEY');
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

fetchNews();
