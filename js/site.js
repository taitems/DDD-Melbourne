/*global $*/

var ddd = (function() {

	var latlng = new google.maps.LatLng(-37.822137,145.038916);

	var myOptions = {
		zoom: 17,
		center: latlng,
		disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.SATELLITE
	};

	map = new google.maps.Map(document.getElementById("map-view"), myOptions);

}());