// Google Maps Api

var map;

var styles = {
    default: null,
    silver: [{
        "stylers": [{
            "saturation": -100
        }, {
            "gamma": 1
        }]
    }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#333333"
        }, {
            "visibility": "on"
        }]
    }, {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "poi.business",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "poi.place_of_worship",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "poi.place_of_worship",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "road.highway",
        "stylers": [{
            "color": "#ffffff"
        }, {
            "visibility": "on"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [{
            "color": "#272727"
        }, {
            "visibility": "off"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "color": "#3c3c3c"
        }]
    }, {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "on"
        }, {
            "weight": 0.5
        }]
    }, {
        "featureType": "water",
        "stylers": [{
            "visibility": "on"
        }]
    }]
}

function initMap() {

	var position = { lat: 23.7905640, lng: 90.4045575 };
	var pinColor = "797979";
	var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
				    new google.maps.Size(21, 34),
				    new google.maps.Point(0,0),
				    new google.maps.Point(10, 34));
    // Create the map with no initial style specified.
    // It therefore has default styling.
    map = new google.maps.Map(document.getElementById('map'),{
        center: position,
        zoom: 14,
        mapTypeControl: false
    });

    var marker = new google.maps.Marker({
          position: position,
          map: map,
          icon: pinImage
    });

    // Set the map's style to the initial value of the selector.
    map.setOptions({ styles: styles.silver });

}
