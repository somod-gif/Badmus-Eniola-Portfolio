const typingtext = document.getElementById("typingtext");
        const words = ["Frontend Web Developer", "Student" ,"Freelancer"];
        let wordIndex = 0;
        let letterIndex = 0;
        let isDeleting = false;
    let cursor = true
        function type() {
            const currentWord = words[wordIndex];
            const currentText = currentWord.substring(0, letterIndex);

            if (isDeleting) {
                typingtext.innerHTML = currentText.slice(0, -1);
                letterIndex--;
            } 
            else {
                typingtext.innerHTML = currentText + currentWord.charAt(letterIndex);
                letterIndex++;
            }

            if (letterIndex == currentWord.length) {
                isDeleting = true;
            }

            if (letterIndex == 0 && isDeleting) {
                isDeleting = false;
                cursor =  true;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }
// fh9qe
// *312*4*3*3#
setInterval(type, 250);
        // Initialize EmailJS with your User ID
    emailjs.init('atjdD32HXw-4Kbqzd');

    
    // Function to send the email
    function send() {
        // Get the form data
        const formData = {
            fullname: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            phonenumber: document.getElementById('phonenumber').value,
            message: document.getElementById('message').value
        };

        // Send the email using EmailJS
        // emailjs.send("service_kb5lwaq", "template_lc74xza");
        emailjs.send('service_kb5lwaq', 'template_lc74xza', formData)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
                // alert('FAILED...');
            });
        // window.location.href = "./index.html"
    }


function dm() {
    if (document.body.style.backgroundColor == "black") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    // else {
    //   document.body.style.backgroundColor = "white";
    //   document.body.style.color = "black";
    // }
}