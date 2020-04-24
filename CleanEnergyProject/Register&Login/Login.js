/* This runs every time we boot the page and blinks 2 times the h2 header after 5 seconds*/
window.onload = function runHide() {
    hide();
    setTimeout(hide,600);
}
function hide() {
    document.getElementsByTagName('h2')[0].style.color = 'darkslategray';
    setTimeout(show,300);
}
function show() {
    document.getElementsByTagName('h2')[0].style.color = 'white';
    setTimeout(hide,10000);
}