function myFunction() {
    var x = document.getElementById("search-label");
    if (x.style.display === "") {
        x.style.display = "flex";
    } else {
        x.style.display = "";
    }
}