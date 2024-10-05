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
    popup.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.2)';
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

    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    function closePopup() {
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    }
}

document.querySelector('.give').addEventListener('click', openReviewPopup);
