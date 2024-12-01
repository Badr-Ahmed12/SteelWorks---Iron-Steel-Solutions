// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
});


// Handle form submission
const form = document.getElementById("contact-form");
form.addEventListener("submit", event => {
  event.preventDefault();
  Swal.fire({
    icon: "success",
    title: "Message Sent",
    text: "Your message has been sent successfully!",
    confirmButtonText: "OK",
  });
});

