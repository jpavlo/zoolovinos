/*
Theme Name: Recharge
Theme URI: http://walkonboulevard.com/Recharge
Description: A responsive Resume/CV template.
Author: Jaydeep Baruah
Author URI: http://about.me/jaydeep.baruah
Version: 1.0
*/

var owl = $("#owl-demo");

owl.owlCarousel({
items : 8, //10 items above 1000px browser width
itemsDesktop : [1000,5], //5 items between 1000px and 901px
itemsDesktopSmall : [900,3], // betweem 900px and 601px
itemsTablet: [600,2], //2 items between 600 and 0
itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
});


	//SMOOTH SCROLL
	smoothScroll.init({
		speed: 500, // How fast to complete the scroll in milliseconds
		easing: 'easeInOutCubic', // Easing pattern to use
		updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
		callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
		callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
	 });



	//OWLCAROUSEL TESTIMONIAL
	$("#quote").owlCarousel({

		pagination : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		navigation : true, // Show next and prev buttons
		navigationText : ['<i class="fa fa-2x fa-angle-left"></i>','<i class="fa fa-2x fa-angle-right"></i>']


	});

	// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([51.505, -0.09], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Recharge Theme <br> London, England.')
    .openPopup();

	//OWLCAROUSEL TEAM
	$("#team-slider").owlCarousel({

		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:false,
		items : 3,
		itemsDesktop : [1200,3],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsMobile : [479,1],
		navigation : false // Show next and prev buttons

	});

	$(function() {
                $('#ei-slider').eislideshow({
					animation			: 'center',
					autoplay			: true,
					slideshow_interval	: 3000,
					titlesFactor		: 0
                });
            });


	new grid3D( document.getElementById( 'grid3d' ) );

	$("#sub").click( function() {
		$.post( $("#myForm").attr("action"),
         $("#myForm :input").serializeArray(),
         function(info){
          $("#result").html(info);
          });
	      clearInput();
	});

	$("#myForm").submit( function() {
		return false;
	});

	function clearInput() {
	$("#myForm :input").each( function() {
	   $(this).val('');
	});
	}

$(".navbar-toggle, .hide-menu").click(function(event) {
$(".navbar-collapse").toggle('in');
});



