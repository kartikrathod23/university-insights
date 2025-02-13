/* File: js/script.js */
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let country = document.getElementById('country').value;

    if (!name || !email || !phone || !country) {
        alert('All fields are required');
        return;
    }

    // alert('Thank you! We will contact you soon.');
    this.reset();
});
