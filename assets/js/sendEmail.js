$(document).ready(() => {
    $('#notificationModalOkButton').on('click', () => {
        $('#notificationModal').modal('hide');
    });
});

function sendMail(contactForm) {
    emailjs.send("gmail", "template_yzs246c", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            $('#notificationModal').modal('show');
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}