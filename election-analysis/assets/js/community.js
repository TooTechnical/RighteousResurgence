document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const commentForm = document.getElementById('commentForm');
    const passwordForm = document.getElementById('passwordForm');
    const logoutButton = document.getElementById('logoutButton');
    const profilePicInput = document.getElementById('profilePicInput');
    const profilePic = document.getElementById('profilePic');
    const commentsSection = document.getElementById('comments');
    const commentsDiv = document.getElementById('comments');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

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
            document.getElementById('signup').style.display = 'none';
            document.getElementById('login').style.display = 'none';
            document.getElementById('profile').style.display = 'block';
            profilePic.src = loggedInUser.profilePic || 'assets/images/default-profile.png';
        } else {
            commentForm.style.display = 'none';
            document.getElementById('signup').style.display = 'block';
            document.getElementById('login').style.display = 'block';
            document.getElementById('profile').style.display = 'none';
        }
    }

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const user = { username, email, password, profilePic: 'assets/images/default-profile.png' };
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
            loggedInUser = user;
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
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

        const comment = { username: loggedInUser.username, comment: commentText };
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
        displayComments();
        commentForm.reset();
    });

    passwordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newPassword = document.getElementById('newPassword').value;

        loggedInUser.password = newPassword;
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        users = users.map(user => user.username === loggedInUser.username ? loggedInUser : user);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Password changed successfully!');
        passwordForm.reset();
    });

    logoutButton.addEventListener('click', () => {
        loggedInUser = null;
        localStorage.removeItem('loggedInUser');
        displayCommentForm();
    });

    profilePicInput.addEventListener('change', () => {
        const file = profilePicInput.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePic.src = e.target.result;
            loggedInUser.profilePic = e.target.result;
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
            users = users.map(user => user.username === loggedInUser.username ? loggedInUser : user);
            localStorage.setItem('users', JSON.stringify(users));
        }
        reader.readAsDataURL(file);
    });

    displayComments();
    displayCommentForm();
});
