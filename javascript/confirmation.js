document.addEventListener('DOMContentLoaded', function () {
    // You can fetch booking details from a server or local storage
    // and display them on the confirmation page.
    // For this example, we'll assume data is available in localStorage.
    const bookingData = localStorage.getItem('bookingData');
    if (bookingData) {
        document.getElementById('booking-details').textContent = bookingData;
    }
});