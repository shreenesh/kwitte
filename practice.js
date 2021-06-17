var firebaseConfig = {
    apiKey: "AIzaSyCjyztR6uXk7vKENDv3elKesswAREGMGog",
    authDomain: "twtter-8189e.firebaseapp.com",
    databaseURL: "https://twtter-8189e-default-rtdb.firebaseio.com",
    projectId: "twtter-8189e",
    storageBucket: "twtter-8189e.appspot.com",
    messagingSenderId: "347326897421",
    appId: "1:347326897421:web:c0f8c87dbfc422b4832444",
    measurementId: "G-N9RX50VPY6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function adduser(){
    user_name=document.getElementById("user_name").value ;
    firebase.database().ref("/").child(user_name).update({ add : "User" });
}