document.getElementById('bookNowButton').addEventListener('click', function(event) {
    event.preventDefault();
    if (validateForm()) {
        showConfirmationPopup();
    }
});

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var location = document.getElementById('location').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    // Simple validation, you can enhance this based on your requirements
    if (!name || !email || !phoneNumber || !location || !date || !time) {
        document.getElementById('name-error').style.display = name ? 'none' : 'block';
        document.getElementById('email-error').style.display = email ? 'none' : 'block';
        document.getElementById('number-error').style.display = phoneNumber ? 'none' : 'block';
        document.getElementById('location-error').style.display = location ? 'none' : 'block';
        document.getElementById('date-error').style.display = date ? 'none' : 'block';
        document.getElementById('time-error').style.display = time ? 'none' : 'block';
        return false;
    }

    return true;
}

function showConfirmationPopup() {
    var confirmationPopup = document.getElementById('confirmation-popup');
    var confirmationMessage = document.getElementById('confirmation-message');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var location = document.getElementById('location').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    var message = `
        Are you sure you want to submit the following appointment?
        \n\nName: ${name}
        \nEmail: ${email}
        \nContact Number: ${phoneNumber}
        \nLocation: ${location}
        \nDate: ${date}
        \nTime: ${time}
    `;

    confirmationMessage.innerText = message;
    confirmationPopup.style.display = 'block';
}

function showVerificationPopup() {
    var confirmationPopup = document.getElementById('confirmation-popup');
    confirmationPopup.style.display = 'none';

    var verificationPopup = document.getElementById('verification-popup');
    verificationPopup.style.display = 'block';
}

function closeConfirmationPopup() {
    var confirmationPopup = document.getElementById('confirmation-popup');
    confirmationPopup.style.display = 'none';
}


function displayBookingDetails() {
    var bookingDetails = document.getElementById('booking-details');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    var details = `Thank you, ${name}! Your repair appointment has been scheduled for ${date} at ${time}. We will send a confirmation email to ${email}.`;

    bookingDetails.innerText = details;
    closeConfirmationPopup();

}
