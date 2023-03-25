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