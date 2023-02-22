function sendMail(contactForm) {
    emailjs.send("gmail", "service_m9ej17r","template_wl9audc", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;  // To block from loading a new page
    
};