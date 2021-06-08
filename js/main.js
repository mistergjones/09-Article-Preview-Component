let submitShareButtonClicked = document.querySelector(".submitShare");
let shareIconThing = document.querySelector(".clip-me");

// now add an event listener to when someone clicks the share img
submitShareButtonClicked.addEventListener("click", submitShare);

function submitShare() {
    // change the display to inline so the display moves from 'none' to 'inline; to show it.
    shareIconThing.style.display = "inline";

    // after 1 second, reset display back to "none"
    setTimeout(() => {
        shareIconThing.style.display = "none";
    }, 1000);
}
