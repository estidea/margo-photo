function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

/* Burger menu */
if(isMobileDevice() == true) {
    $('.mobile-burger').on("click", function() {
    	$('.navbar-nav').toggleClass("navbar-active");
    	$('.mobile-overlay').toggleClass("visible");
    });

    $('.mobile-overlay').on("click", function() {
    	$('.navbar-nav').toggleClass("navbar-active");
    	$('.mobile-overlay').toggleClass("visible");
    });
}