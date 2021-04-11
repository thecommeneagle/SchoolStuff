function initMap () {

	const routeHighlights = [
		{"routeHighlight": "s1", "coords": {"lat": 51.541837, "lng": -0.139199}},
		{"routeHighlight": "s2", "coords":  {"lat":51.550396, "lng": -0.140526}},
		{"routeHighlight": "s3", "coords":  {"lat": , "lng":   }},
		{"routeHighlight": "s4", "coords":  {"lat": , "lng":   }},
		{"routeHighlight": "s5", "coords":  {"lat":, "lng":    }},
		
	];
	
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 8,
		center: {lat: 44.442254, lng: -110.721692},
		mapTypeId: "terrain",
	});
	
	for (let i = 0; i < routeHighlights.length; i++) {
		const markerPos = new google.maps.LatLng(routeHighlights[i].coords.lat, routeHighlights[i].coords.lng);
		const marker = new google.maps.Marker({
			position: markerPos,
			map: map,
			title: "Your Route!." 
	  });
	   marker.setIcon("http://www.google.com/mapfiles/marker.png");
	}
}
