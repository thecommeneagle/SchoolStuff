window.onload = getFavoriteRoute;

let xhr = false;

function getFavoriteRoute() {
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		if (window.ActiveXObject) {
				xhr = newActiveXObject("Microsoft.XMLHTTP");
		}
	}
	if (xhr) {
		xhr.open("GET", "data/routes.json", true);
		xhr.send(); 
		xhr.onreadystatechange = displayFavoriteTrails; 
	} else {
		document.getElementById("statusmessage").innerHTML = "Error";
	}	
}

function displayFavoriteRoute () {
	if (xhr.readyState == 4) {
	    if (xhr.status == 200) {
		    const data = JSON.parse(xhr.responseText); 
			let dataText = "";
			const favorites = getLocalStorage();
			for (let l = 0; l < favorites.length; l++){
				for (let i in data.trails) {
					if (parseInt(favorites[l]) === parseInt(data.trails[i].trailID)){
					dataText += "<tr><td class='text-left'><h5 class='mr-4'>" + 
					data.route[i].name + "</h5></td><td>" +
					"<a href='trail-details.html?trailId=" + data.route[i].routeID + "' class='btn btn-sm btn-primary mr-4'>Details</a>" + 
					"</td><td>" + "<i class='fa fa-trash fa-2x' aria-hidden='true'></i>" + 
					"</td></tr>";
					}
				}
			}
			document.getElementById("insertpoint").innerHTML = dataText;
		} else {
		document.getElementById("statusmessage").innerHTML = "Error." + xhr.status;
		}
	}
}

function getLocalStorage() {
	let trailFavorites = JSON.parse(window.localStorage.getItem('routes'));
	return trailFavorites;
}