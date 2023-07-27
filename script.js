
document.addEventListener("DOMContentLoaded", function() {

const USER_ID = '1WJp-rUdz0i_MIR94';
const TEMPLATE_ID = 'template_jdhujf2';
const SERVICE_ID = 'service_popeglr';


function sendEmail(e) {
  e.preventDefault();

 
  const formData = new FormData(e.target);

  
  const emailParams = {
    to_name: formData.get('name'),
    from_name: formData.get('name'),
    message: formData.get('message'),
    reply_to: formData.get('email'),
  };

 
  emailjs.send(SERVICE_ID, TEMPLATE_ID, emailParams, USER_ID)
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

const hamburger = document.querySelector(".hamburger1");
const navMenu = document.querySelector(".nav-menu1");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))