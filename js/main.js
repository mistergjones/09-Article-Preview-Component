let submitShareButtonClicked = document.querySelector(".submitShare");
let shareIconThing = document.querySelector(".clip-me");

// make shareIconThing display of none straight away
shareIconThing.style.display = "none";

// obtain the footer section for the mobile. If mobile, need to "hide" the user details and replace with the share stuff
let footerThing = document.querySelector(".footer");
let personDetailsThing = document.querySelector(".person-details");

// now add an event listener to when someone clicks the share img
submitShareButtonClicked.addEventListener("click", submitShare);

function submitShare(e) {
    // change the display to inline so the display moves from 'none' to 'inline; to show it.
    e.preventDefault();

    // need to obtain width of screen to make this work....
    if (window.innerWidth > 800) {
        // laptop / desktop screen
        shareIconThing.style.display = "grid";

        // after 1 second, reset display back to "none"
        setTimeout(() => {
            shareIconThing.style.display = "none";
        }, 1000);
    } else {
        // must be a mobile
        personDetailsThing.style.display = "none";
        shareIconThing.style.display = "grid";

        // after 1 second, reset both components
        setTimeout(() => {
            personDetailsThing.style.display = "grid";
            shareIconThing.style.display = "none";
        }, 1000);
    }
}
