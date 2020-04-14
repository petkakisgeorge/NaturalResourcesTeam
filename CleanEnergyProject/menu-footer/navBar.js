function myFunction() {
    var x = document.getElementById("search-label");
    if (x.style.display === "") {
        x.style.display = "flex";
    } else {
        x.style.display = "";
    }
}
function PageScroll() {

    setTimeout(sco,500);
}
function sco() {
    window.scrollBy(0, -100); // Scroll 100px up
}