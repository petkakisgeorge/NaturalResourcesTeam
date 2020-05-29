function openSearchBar() {
    var x = document.getElementById("search-label");
    if (x.style.display === "") {
        x.style.display = "flex";
        x.style.justifyContent='center';
        changeSearchIcon();
    } else {
        x.style.display = "";
        changeCloseToggle();
    }
}
/* Always when changing a page ,it is scrolling up - useful for visiting a page's section.
* But because even when we refresh it keeps scrolling, we handle it so it doesn't scroll! */
const Scroll= checkRefresh();
function checkRefresh()
{
    //check for Navigation Timing API support
    if (performance.navigation.type === 1) {
        //This page is reloaded
    } else {
        //This page is not reloaded
        setTimeout(sco,500);
    }
}
function sco() {
    window.scrollBy(0, -100); // Scroll 100px up
}
/* This function is only for Technology Section*/
function PageScroll() {
    setTimeout(sco,500);
}



function changeSearchIcon() {
    var search= document.getElementById('button-label');
    search.style.display='none';

    document.getElementById('close-toggle').style.display='flex';
    document.getElementById('close-toggle').style.justifyContent='center';
    document.getElementById('close-toggle').style.alignItems='center';
}


function changeCloseToggle() {
    var toggle= document.getElementById('close-toggle');
    toggle.style.display='none';

    document.getElementById('button-label').style.display='flex';
    document.getElementById('button-label').style.justifyContent='center';
    document.getElementById('button-label').style.alignItems='center';
}

