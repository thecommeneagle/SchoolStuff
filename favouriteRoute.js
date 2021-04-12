(function () {
	
	const firebaseConfig = {
  apiKey: "AIzaSyBbIavNFhISvn_eFyh8oiDdaj0FasrhpEM",
  authDomain: "school-eb066.firebaseapp.com",
  databaseURL: "https://school-eb066-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "school-eb066",
  storageBucket: "school-eb066.appspot.com",
  messagingSenderId: "936808835755",
  appId: "1:936808835755:web:f01da99fc123b280f025ee",
  measurementId: "G-HCZQS5KLWS"
};
	firebase.initializeApp(firebaseConfig);
	
	const sightingRef = firebase.database().ref("sightings");
	
	document.getElementById("frmbearsighting").addEventListener("submit", handleForm); 
	
	function handleForm(e){
		e.preventDefault();
		const sightingLocation = document.getElementById("txtlocation").value;
		const sightingTime = document.getElementById("txttime").value;
		const sightingDate = document.getElementById("txtdate").value;
		const sightingObservations = document.getElementById("txtobservations").value;
		saveSighting(sightingLocation, sightingTime, sightingDate, sightingObservations);
		frmbearsighting.reset();
		document.getElementById("sightingconfirmation").style.display = "block";
	} 
	
	function saveSighting(sightingLocation, sightingTime, sightingDate, sightingObservations) {
		let newSightingRef = sightingRef.push();
		newSightingRef.set( {
			sightingLocation: sightingLocation,
			sightingTime: sightingTime,
			sightingDate: sightingDate,
			sightingObservations: sightingObservations
		});
	}
	
} ());
