function scrollFunction() { //always in pixels
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function CallTypeWriter() {
    document.getElementById("demo").innerHTML =  '';
    typeWriter();
}
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else
    {
        i = 0;
        var j;
        txt = 'Clean energy  Clean Future';
        speed = 60;
        setTimeout(CallTypeWriter,5000);
    }
}