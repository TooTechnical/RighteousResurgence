document.addEventListener('DOMContentLoaded', () => {
    const newsFeed = document.getElementById('news-feed');

    // Function to fetch news articles
    async function fetchNews() {
        const apiKey = 'YOUR_NEWS_API_KEY'; // Replace with your News API key
        const url = `https://newsapi.org/v2/everything?q=Trump OR Biden&apiKey=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            displayNews(data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
            newsFeed.innerHTML = '<p>Failed to load news articles. Please try again later.</p>';
        }
    }

    // Function to display news articles
    function displayNews(articles) {
        if (articles.length === 0) {
            newsFeed.innerHTML = '<p>No news articles found.</p>';
            return;
        }

        articles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            const articleTitle = document.createElement('h3');
            const articleLink = document.createElement('a');
            articleLink.href = article.url;
            articleLink.textContent = article.title;
            articleLink.target = '_blank';
            articleTitle.appendChild(articleLink);

            const articleDescription = document.createElement('p');
            articleDescription.textContent = article.description;

            const articleSource = document.createElement('p');
            articleSource.innerHTML = `<small>Source: ${article.source.name}</small>`;

            articleDiv.appendChild(articleTitle);
            articleDiv.appendChild(articleDescription);
            articleDiv.appendChild(articleSource);

            newsFeed.appendChild(articleDiv);
        });
    }

    // Fetch news on page load
    fetchNews();
});
