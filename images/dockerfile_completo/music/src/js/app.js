document.addEventListener('DOMContentLoaded', () => {
    navegacionFija();
});


function navegacionFija() {
    window.onscroll = function () {
        myFunction()
    };

    // Get the header

    const header = document.querySelector('.header');

    // Get the offset position of the navbar
    var sticky = header.offsetTop;
    // console.log(window.pageYOffset);
    // console.log(sticky)

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("fijo");
        } else {
            header.classList.remove("fijo");
        }
    }
}