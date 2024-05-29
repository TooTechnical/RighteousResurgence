document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const commentForm = document.getElementById('commentForm');
    const commentsSection = document.getElementById('comments');
    const commentsDiv = document.getElementById('comments');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let loggedInUser = localStorage.getItem('loggedInUser');

    function displayComments() {
        commentsDiv.innerHTML = '';
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `
                <h4>${comment.username}</h4>
                <p>${comment.comment}</p>
            `;
            commentsDiv.appendChild(commentDiv);
        });
    }

    function displayCommentForm() {
        if (loggedInUser) {
            commentForm.style.display = 'block';
        } else {
            commentForm.style.display = 'none';
        }
    }

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const user = { username, email, password };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Sign up successful!');
        signupForm.reset();
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            loggedInUser = username;
            localStorage.setItem('loggedInUser', loggedInUser);
            alert('Login successful!');
            loginForm.reset();
            displayCommentForm();
        } else {
            alert('Invalid username or password');
        }
    });

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const commentText = document.getElementById('comment').value;
        const comments = JSON.parse(localStorage.getItem('comments')) || [];

        const comment = { username: loggedInUser, comment: commentText };
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
        displayComments();
        commentForm.reset();
    });

    displayComments();
    displayCommentForm();
});
