var filterItems = $('.filters li a');
var photos = [];

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

filterItems.on("click", function(e){
	filterItems.removeClass("active-filter");
	var albumName = this.innerHTML;
	this.classList.toggle("active-filter");
	clearGallery();
	loadImages(albumName);
})

function clearGallery() {
	$('.grid-item').remove();
}

function loadImages(albumName) {
	photos = [];
	var folder = "../img/" + albumName + "/";
	$.ajax({
	    url : folder,
	    success: function (data) {
	    	var i = 0;
	        $(data).find("a").attr("href", function (i, val) {
	            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
	                $(".grid").append( "<div class=\"grid-item\"><img onclick=\"openFullImage("+"\'"+folder + "big/"+ val +"\'"+")\" src='"+ folder + val +"'></div>" );
	                photos.push(folder + "big/"+ val);
	            } 
	        });
	        $('.grid').waitForImages(function() {
		    	initGrid();
			});
	    }
	});
}


function initGrid() {
	// init with element
	var grid = document.querySelector('.grid');
	var getColumnWidth = document.querySelector('.grid-item img').offsetWidth - 30;
	var msnry = new Masonry( grid, {
	  // options...
	  itemSelector: '.grid-item',
	  columnWidth: '.grid-sizer',
	  percentPosition: true,
	  gutter: 15,
	  stagger: 30
	});
}

$(document).ready(function(){
	loadImages(filterItems[0].innerHTML);
	if(isMobileDevice() != true) {
		var filtersWidth = $('.col-1').width();
		$('.filters').css("width",filtersWidth);
	}
})

function openFullImage(url) {
	$("#photo-lightbox").addClass("visible");
	$("#close-lightbox").addClass("visible");
	$("#photo-lightbox").append('<img src="'+url+'">');
}

$('#close-lightbox').on("click",function(){
	$("#photo-lightbox").removeClass("visible");
	$("#close-lightbox").removeClass("visible");
	$("#photo-lightbox img").remove();
});