function openReviewPopup() {

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '999';

    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = '#f9f9f9';
    popup.style.padding = '20px';
    popup.style.borderRadius = '8px';
    popup.style.boxShadow = '0px 0px 20px rgba(100, 102, 16, 1)';
    popup.style.width = '400px';
    popup.style.zIndex = '1000';

    const title = document.createElement('h2');
    title.innerText = 'Write a Review';
    title.style.marginBottom = '15px';
    title.style.color = '#333';

    const nameLabel = document.createElement('label');
    nameLabel.innerText = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Enter your name';
    nameInput.style.width = '100%';
    nameInput.style.marginBottom = '10px';
    nameInput.style.padding = '8px';
    nameInput.style.border = '1px solid #ccc';
    nameInput.style.borderRadius = '4px';

    const reviewLabel = document.createElement('label');
    reviewLabel.innerText = 'Review:';
    const reviewTextBox = document.createElement('textarea');
    reviewTextBox.placeholder = 'Write your review here...';
    reviewTextBox.style.width = '100%';
    reviewTextBox.style.height = '100px';
    reviewTextBox.style.marginBottom = '10px';
    reviewTextBox.style.padding = '8px';
    reviewTextBox.style.border = '1px solid #ccc';
    reviewTextBox.style.borderRadius = '4px';

    const submitButton = document.createElement('button');
    submitButton.innerText = 'Submit';
    submitButton.style.padding = '10px 20px';
    submitButton.style.backgroundColor = '#4CAF50';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '4px';
    submitButton.style.cursor = 'pointer';
    submitButton.onclick = () => {
        const name = nameInput.value;
        const reviewText = reviewTextBox.value;
        if (name && reviewText) {
            alert('Review Submitted by ' + name + ': ' + reviewText);
            closePopup();
        } else {
            alert('Please fill in both your name and review.');
        }
    };

    const cancelButton = document.createElement('button');
    cancelButton.innerText = 'Cancel';
    cancelButton.style.padding = '10px 20px';
    cancelButton.style.backgroundColor = '#f44336';
    cancelButton.style.color = 'white';
    cancelButton.style.border = 'none';
    cancelButton.style.borderRadius = '4px';
    cancelButton.style.marginLeft = '10px';
    cancelButton.style.cursor = 'pointer';
    cancelButton.onclick = closePopup;

    popup.appendChild(title);
    popup.appendChild(nameLabel);
    popup.appendChild(nameInput);
    popup.appendChild(reviewLabel);
    popup.appendChild(reviewTextBox);
    popup.appendChild(submitButton);
    popup.appendChild(cancelButton);

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            closePopup();
        }
    });

    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    function closePopup() {
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    }
}

document.querySelector('.give').addEventListener('click', openReviewPopup);


function openLoginSignupPopup() {

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '999';



    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = '#f9f9f9';
    popup.style.padding = '20px';
    popup.style.borderRadius = '8px';
    popup.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.2)';
    popup.style.width = '400px';
    popup.style.zIndex = '1000';



    const title = document.createElement('h2');
    title.innerText = 'Login / Sign Up';
    title.style.marginBottom = '15px';
    title.style.color = '#333';



    const usernameLabel = document.createElement('label');
    usernameLabel.innerText = 'Username:';
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.placeholder = 'Enter your username';
    usernameInput.style.width = '100%';
    usernameInput.style.marginBottom = '10px';
    usernameInput.style.padding = '8px';
    usernameInput.style.border = '1px solid #ccc';
    usernameInput.style.borderRadius = '4px';



    const emailLabel = document.createElement('label');
    emailLabel.innerText = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Enter your email';
    emailInput.style.width = '100%';
    emailInput.style.marginBottom = '10px';
    emailInput.style.padding = '8px';
    emailInput.style.border = '1px solid #ccc';
    emailInput.style.borderRadius = '4px';



    const passwordLabel = document.createElement('label');
    passwordLabel.innerText = 'Password:';
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Enter your password';
    passwordInput.style.width = '100%';
    passwordInput.style.marginBottom = '10px';
    passwordInput.style.padding = '8px';
    passwordInput.style.border = '1px solid #ccc';
    passwordInput.style.borderRadius = '4px';



    const loginButton = document.createElement('button');
    loginButton.innerText = 'Login';
    loginButton.style.padding = '10px 20px';
    loginButton.style.backgroundColor = '#4CAF50';
    loginButton.style.color = 'white';
    loginButton.style.border = 'none';
    loginButton.style.borderRadius = '4px';
    loginButton.style.cursor = 'pointer';
    loginButton.onclick = () => {
        const username = usernameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        if (username && email && password) {
            alert('Logged in as ' + username);
            closePopup();
        } else {
            alert('Please fill in all fields.');
        }
    };



    const signupButton = document.createElement('button');
    signupButton.innerText = 'Sign Up';
    signupButton.style.padding = '10px 20px';
    signupButton.style.backgroundColor = '#f44336';
    signupButton.style.color = 'white';
    signupButton.style.border = 'none';
    signupButton.style.borderRadius = '4px';
    signupButton.style.marginLeft = '10px';
    signupButton.style.cursor = 'pointer';
    signupButton.onclick = () => {
        const username = usernameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        if (username && email && password) {
            alert('Signed up as ' + username);
            closePopup();
        } else {
            alert('Please fill in all fields.');
        }
    };



    popup.appendChild(title);
    popup.appendChild(usernameLabel);
    popup.appendChild(usernameInput);
    popup.appendChild(emailLabel);
    popup.appendChild(emailInput);
    popup.appendChild(passwordLabel);
    popup.appendChild(passwordInput);
    popup.appendChild(loginButton);
    popup.appendChild(signupButton);



    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            closePopup();
        }
    });


    document.body.appendChild(overlay);
    document.body.appendChild(popup);



    function closePopup() {
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    }
}



document.querySelector('.buton').addEventListener('click', openLoginSignupPopup);
