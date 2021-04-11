firebase.initializeApp(firebaseConfig);
var firebaseConfig = {
        apiKey: "AIzaSyDDNF17a20gd45kR0qT9gOsuiOmw4F0-bM",
        authDomain: "school-8b4c2.firebaseapp.com",
        databaseURL: "https://school-8b4c2-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "school-8b4c2",
        storageBucket: "school-8b4c2.appspot.com",
        messagingSenderId: "163759924248",
        appId: "1:163759924248:web:7389e06b9838791850cf6d",
        measurementId: "G-TZQ1WF29Q2"
    };
    // Initialize Firebase

const txtEmail = document.getElementById("txtemail");
const txtPassword = document.getElementById("txtpassword");
const btnLogin = document.getElementById("btnlogin");
const btnSignup = document.getElementById("btnsignup");
const btnLogout = document.getElementById("btnlogout");
const loginStatus = document.getElementById("loginstatus");
const txtEmailLabel = document.getElementById("txtemaillabel");
const txtPasswordLabel = document.getElementById("txtpasswordlabel");

btnLogin.addEventListener("click", e => {
	const enteredEmail = txtEmail.value;
	const enteredPassword = txtPassword.value;
	const auth = firebase.auth();
	const promise = auth.signInWithEmailAndPassword(enteredEmail, enteredPassword);
    document.cookie="validSession=true";
	promise.catch(e => alert("Log In Has Failed. \n" + e.message)); 
});
btnSignup.addEventListener("click", e => {
	
});

btnSignup.addEventListener("click", e  => {
    	
    });

        btnLogout.addEventListener("click", e => {
	        firebase.auth().signOut();
	        document.cookie="validSession=false";
    });
		
        firebase.auth().onAuthStateChanged(firebaseUser => {
	        if (firebaseUser) {
		        console.log("Logged in");
		btnLogout.style.display = "block";
		btnSignup.style.display = "none";
		txtEmail.style.display = "none";
		btnLogin.style.display = "none";
		txtPassword.style.display = "none";
		txtEmailLabel.style.display = "none";
		txtPasswordLabel.style.display = "none";
		loginStatus.innerHTML = "You are currently logged in.";
	} else {
		console.log("Not logged in");
		btnLogout.style.display = "none";
		btnSignup.style.display = "block";
		txtEmail.style.display = "block";
		btnLogin.style.display = "block";
		txtPassword.style.display = "block";
		txtEmailLabel.style.display = "block";
		txtPasswordLabel.style.display = "block";
		loginStatus.innerHTML = "You are not currently logged in. Please log in.";
	}
});
		


btnLogout.addEventListener("click", e => {
	firebase.auth().signOut();
	document.cookie="validSession=false";
});
		
firebase.auth().onAuthStateChanged(firebaseUser => {
	if (firebaseUser) {
		console.log("Logged in");
		btnLogout.style.display = "block";
		btnSignup.style.display = "none";
		txtEmail.style.display = "none";
		btnLogin.style.display = "none";
		txtPassword.style.display = "none";
		txtEmailLabel.style.display = "none";
		txtPasswordLabel.style.display = "none";
		loginStatus.innerHTML = "You are currently logged in.";
	} else {
		console.log("Not logged in");
		btnLogout.style.display = "none";
		btnSignup.style.display = "block";
		txtEmail.style.display = "block";
		btnLogin.style.display = "block";
		txtPassword.style.display = "block";
		txtEmailLabel.style.display = "block";
		txtPasswordLabel.style.display = "block";
		loginStatus.innerHTML = "You are not currently logged in. Please log in.";
	}
});
