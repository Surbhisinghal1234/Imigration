
/* ********************* */
/* HORIZONTAL SLIDER */
/* ********************* */
document.addEventListener("DOMContentLoaded", function () {
    var actions = document.querySelectorAll(".action");
    actions.forEach(function (action) {
        action.addEventListener("click", function (e) {
            e.preventDefault();
            var slidess = document.querySelectorAll(".slideLi");
            slidess.forEach(function (slideLi) {
                slideLi.classList.remove("active");
            });
            var slideLi = this.closest(".slideLi");
            slideLi.classList.add("active");
        });
    });

    function checkWidth() {
        var windowSize = window.innerWidth;
        if (windowSize > 480) {
            var slideWidth = document.querySelector(".action").offsetWidth;
            var slideContents = document.querySelectorAll(".slide-contentt");
            slideContents.forEach(function (slideContentt) {
                slideContentt.style.width = slideWidth + "px";
            });
        }
    }

    window.addEventListener("resize", function () {
        checkWidth();
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(checkWidth, 1000);
    });

    // Initial check on load
    checkWidth();
});