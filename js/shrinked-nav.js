var lastScrollPos = 0;

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

document.addEventListener("touchmove", scrollFunction, false);

function scrollFunction() {
    if (lastScrollPos - document.documentElement.scrollTop > 0) {
        // scroll top
        $(".navbar").css("transform", "translateY(0)");
    } else {
        // scroll bottom
        $(".navbar").css("transform", "translateY(-90px)");
    }
    if(document.documentElement.scrollTop == 0) $(".navbar").css("transform", "translateY(0)");
    lastScrollPos = document.documentElement.scrollTop;
}