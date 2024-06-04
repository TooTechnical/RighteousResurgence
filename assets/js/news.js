document.addEventListener('DOMContentLoaded', () => {
    const newsForm = document.getElementById('newsForm');
    const newsFeed = document.getElementById('news-feed');
    const allNewsFeed = document.getElementById('all-news-feed');

    // Load and display news articles from localStorage
    function displayNews() {
        const newsArticles = JSON.parse(localStorage.getItem('newsArticles')) || [];
        allNewsFeed.innerHTML = '';
        newsArticles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('news-article');
            articleDiv.innerHTML = `<h3>${article.title}</h3><div>${article.content}</div>`;
            allNewsFeed.appendChild(articleDiv);
        });
    }

    // Handle form submission to create a new news article
    newsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('newsTitle').value;
        const content = document.getElementById('newsContent').innerHTML;
        
        const newArticle = { title: title, content: content };
        let newsArticles = JSON.parse(localStorage.getItem('newsArticles')) || [];
        newsArticles.push(newArticle);
        localStorage.setItem('newsArticles', JSON.stringify(newsArticles));
        
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('news-article');
        articleDiv.innerHTML = `<h3>${title}</h3><div>${content}</div>`;
        newsFeed.appendChild(articleDiv);
        
        newsForm.reset();
        document.getElementById('newsContent').innerHTML = '';
        
        displayNews(); // Update the display of all news articles
    });

    // Display all news articles on initial load
    displayNews();
});

function execCmd(command) {
    if (command === 'createLink') {
        let url = prompt('Enter the link URL:', 'http://');
        document.execCommand(command, false, url);
    } else if (command === 'insertImage') {
        let url = prompt('Enter the image URL:', 'http://');
        document.execCommand(command, false, url);
        let images = document.querySelectorAll('#newsContent img');
        images.forEach(img => {
            img.addEventListener('click', () => {
                resizeImage(img);
            });
        });
    } else {
        document.execCommand(command, false, null);
    }
}

function resizeImage(img) {
    let newSize = prompt('Enter the new size (e.g., 200px or 50%):', img.width);
    img.style.width = newSize;
    let align = prompt('Enter the alignment (left, center, right):', 'center');
    img.style.display = 'block';
    img.style.margin = align === 'center' ? '0 auto' : align === 'left' ? '0 auto 0 0' : '0 0 0 auto';
}
