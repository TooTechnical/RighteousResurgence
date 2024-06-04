document.addEventListener('DOMContentLoaded', () => {
    // Select and store various form elements and buttons by their IDs.
    const signupForm = document.getElementById('signupForm'); // Form for signing up new users.
    const loginForm = document.getElementById('loginForm'); // Form for user login.
    const commentForm = document.getElementById('commentForm'); // Form for submitting comments.
    const passwordForm = document.getElementById('passwordForm'); // Form for changing passwords.
    const logoutButton = document.getElementById('logoutButton'); // Button for logging out.
    const profilePicInput = document.getElementById('profilePicInput'); // Input for uploading profile pictures.
    const profilePic = document.getElementById('profilePic'); // Image element to display profile pictures.
    const commentsSection = document.getElementById('comments'); // Section to display comments.
    const commentsDiv = document.getElementById('comments'); // Div to display individual comments.

    // Retrieve stored users and the logged-in user from local storage, or initialize empty data if not present.
    let users = JSON.parse(localStorage.getItem('users')) || []; // Array to store user data.
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')); // Object for the currently logged-in user.

    // Function to display comments from local storage.
    function displayComments() {
        commentsDiv.innerHTML = ''; // Clear current comments.
        const comments = JSON.parse(localStorage.getItem('comments')) || []; // Retrieve comments from local storage.
        comments.forEach(comment => {
            const commentDiv = document.createElement('div'); // Create a new div for each comment.
            commentDiv.classList.add('comment'); // Add 'comment' class to the div.
            commentDiv.innerHTML = `
                <h4>${comment.username}</h4>
                <p>${comment.comment}</p>
            `; // Set inner HTML of the div with the comment's username and text.
            commentsDiv.appendChild(commentDiv); // Append the comment div to the comments section.
        });
    }

    // Function to control the display of the comment form and related elements based on login state.
    function displayCommentForm() {
        if (loggedInUser) {
            commentForm.style.display = 'block'; // Show comment form if a user is logged in.
            document.getElementById('signup').style.display = 'none'; // Hide signup section.
            document.getElementById('login').style.display = 'none'; // Hide login section.
            document.getElementById('profile').style.display = 'block'; // Show profile section.
            profilePic.src = loggedInUser.profilePic || 'assets/images/default-profile.png'; // Set profile picture.
        } else {
            commentForm.style.display = 'none'; // Hide comment form if no user is logged in.
            document.getElementById('signup').style.display = 'block'; // Show signup section.
            document.getElementById('login').style.display = 'block'; // Show login section.
            document.getElementById('profile').style.display = 'none'; // Hide profile section.
        }
    }

    // Event listener for the signup form submission.
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission behavior.
        const username = document.getElementById('username').value; // Get username input value.
        const email = document.getElementById('email').value; // Get email input value.
        const password = document.getElementById('password').value; // Get password input value.

        const user = { username, email, password, profilePic: 'assets/images/default-profile.png' }; // Create a new user object.
        users.push(user); // Add the new user to the users array.
        localStorage.setItem('users', JSON.stringify(users)); // Save updated users array to local storage.
        alert('Sign up successful!'); // Alert user of successful signup.
        signupForm.reset(); // Reset the signup form.
    });

    // Event listener for the login form submission.
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission behavior.
        const username = document.getElementById('loginUsername').value; // Get username input value.
        const password = document.getElementById('loginPassword').value; // Get password input value.

        const user = users.find(user => user.username === username && user.password === password); // Find user with matching username and password.
        if (user) {
            loggedInUser = user; // Set the logged-in user.
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser)); // Save logged-in user to local storage.
            alert('Login successful!'); // Alert user of successful login.
            loginForm.reset(); // Reset the login form.
            displayCommentForm(); // Update the display to show the comment form.
        } else {
            alert('Invalid username or password'); // Alert user of invalid login credentials.
        }
    });

    // Event listener for the comment form submission.
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission behavior.
        const commentText = document.getElementById('comment').value; // Get comment text input value.
        const comments = JSON.parse(localStorage.getItem('comments')) || []; // Retrieve existing comments from local storage.

        const comment = { username: loggedInUser.username, comment: commentText }; // Create a new comment object with the logged-in user's username.
        comments.push(comment); // Add the new comment to the comments array.
        localStorage.setItem('comments', JSON.stringify(comments)); // Save updated comments array to local storage.
        displayComments(); // Update the comments display.
        commentForm.reset(); // Reset the comment form.
    });

    // Event listener for the password change form submission.
    passwordForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission behavior.
        const newPassword = document.getElementById('newPassword').value; // Get new password input value.

        loggedInUser.password = newPassword; // Update the logged-in user's password.
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser)); // Save updated logged-in user to local storage.
        users = users.map(user => user.username === loggedInUser.username ? loggedInUser : user); // Update users array with the new password.
        localStorage.setItem('users', JSON.stringify(users)); // Save updated users array to local storage.
        alert('Password changed successfully!'); // Alert user of successful password change.
        passwordForm.reset(); // Reset the password change form.
    });

    // Event listener for the logout button click event.
    logoutButton.addEventListener('click', () => {
        loggedInUser = null; // Clear the logged-in user.
        localStorage.removeItem('loggedInUser'); // Remove logged-in user from local storage.
        displayCommentForm(); // Update the display to hide the comment form.
    });

    // Event listener for the profile picture input change event.
    profilePicInput.addEventListener('change', () => {
        const file = profilePicInput.files[0]; // Get the selected file.
        const reader = new FileReader(); // Create a new FileReader object.
        reader.onload = function (e) {
            profilePic.src = e.target.result; // Set the profile picture source to the file's data URL.
            loggedInUser.profilePic = e.target.result; // Update the logged-in user's profile picture.
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser)); // Save updated logged-in user to local storage.
            users = users.map(user => user.username === loggedInUser.username ? loggedInUser : user); // Update users array with the new profile picture.
            localStorage.setItem('users', JSON.stringify(users)); // Save updated users array to local storage.
        }
        reader.readAsDataURL(file); // Read the selected file as a data URL.
    });

    // Initial calls to set up the comments display and comment form visibility based on login state.
    displayComments(); // Display comments on page load.
    displayCommentForm(); // Display the appropriate form (comment or login/signup) on page load.
});
