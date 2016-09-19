'use strict';

$(function() {
	google.maps.event.addDomListener(window, 'load', init);
    function init() {
        var coord, coord_marker, zoom_map;
        if(device.mobile()){
          coord = {lat: 53.021795, lng: 36.110666};
          coord_marker = {lat: 53.021795, lng: 36.110666};
          zoom_map = 15;

        }else{
          coord = {lat: 53.021700, lng: 36.114000};
          coord_marker = {lat: 53.021795, lng: 36.110666};
          zoom_map = 17;

        }

        var mapOptions = {
            zoom: zoom_map,
            center: new google.maps.LatLng(coord.lat, coord.lng),
            styles: [
              {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                  { "color": "#202020" },
                  { "visibility": "on" }
                ]
              },{
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                  { "visibility": "on" },
                  { "color": "#282828" }
                ]
              },{
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                  { "visibility": "on" },
                  { "color": "#303030" }
                ]
              },{
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                  { "color": "#404040" }
                ]
              },{
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                  { "color": "#505050" }
                ]
              },{
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                  { "color": "#222222" }
                ]
              },{
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  { "color": "#505050" }
                ]
              },{
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                  { "color": "#222222" }
                ]
              },{
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                  { "color": "#555555" }
                ]
              },{
                "featureType": "landscape",
                "elementType": "geometry.stroke",
                "stylers": [
                  { "color": "#555555" }
                ]
              },{
                "featureType": "landscape",
                "elementType": "labels.text",
                "stylers": [
                  { "color": "#505050" }
                ]
              },{
                "featureType": "landscape",
                "elementType": "labels.text.stroke",
                "stylers": [
                  { "color": "#202020" }
                ]
              },{
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                  { "color": "#505050" }
                ]
              },{
                "featureType": "administrative",
                "elementType": "labels.text.stroke",
                "stylers": [
                  { "color": "#202020" }
                ]
              },{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  { "color": "#999999" }
                ]
              },{
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  { "color": "#505050" }
                ]
              },{
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                  { "color": "#202020" }
                ]
              },{
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                  { "color": "#505050" }
                ]
              },{
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [
                  { "color": "#202020" }
                ]
              }
            ]
        };
        var mapElement = document.getElementById('map-google');
        var map = new google.maps.Map(mapElement, mapOptions);
	  	  var image = 'img/default/icon-map.png';
	  	  var marker = new google.maps.Marker({
		    position: coord_marker,
		    map: map,
		    icon: image
	 	});
    }		
});