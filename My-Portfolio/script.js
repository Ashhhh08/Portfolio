const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Initialize EmailJS
emailjs.init("JCHtw7kk7s9aHbdVs"); // Replace with your EmailJS public key

// Form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const userEmail = document.getElementById("user-email").value;

    // Send email using EmailJS
    emailjs
      .send("service_7qcon9g", "template_z61be6l", {
        from_email: userEmail,
      })
      .then(function (response) {
        alert("Email sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch(function (error) {
        alert("Failed to send email.");
        console.log("FAILED...", error);
      });
  });
