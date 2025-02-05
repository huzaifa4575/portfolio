(function(){
    emailjs.init('HEgfO2za-8GRgIJLZ');
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    };

    emailjs.send('service_93x984q', 'template_opc80mr', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent');
            document.getElementById("contact-form").reset(); // Reset the form
        }, function(error) {
            console.log('FAILED...', error);
            alert('There was an error sending your message. Please try again later.');
        });

    
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from reloading the page
        
            emailjs.sendForm('service_93x984q', 'template_opc80mr', this)
                .then(function() {
                    console.log('SUCCESS!');
                    alert('Your message has been sent');
                }, function(error) {
                    console.log('FAILED...', error);
                });
        });
        
});
