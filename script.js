
document.addEventListener("DOMContentLoaded", function() {


const TEMPLATE_ID = 'template_jdhujf2';
const SERVICE_ID = 'service_5k9fvik';


function sendEmail(e) {
  e.preventDefault();

 
  const formData = new FormData(e.target);

  
  const emailParams = {
    to_name: formData.get('name'),
    from_name: formData.get('name'),
    message: formData.get('message'),
    reply_to: formData.get('email'),
  };

 
  emailjs.send(SERVICE_ID, TEMPLATE_ID, emailParams)
    .then((response) => {
      alert('Email sent successfully!', response);

      e.target.reset();
     
    })
    .catch((error) => {
      alert('Failed to send email:', error);
     
    });
}

// Attach the event listener to the form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', sendEmail);

}
);


})


