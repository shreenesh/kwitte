var firebaseConfig = {
  apiKey: "AIzaSyCLEdHt7Ba10lv3faMufe9M6JE_U2P611A",
  authDomain: "kwitter-167da.firebaseapp.com",
  databaseURL: "https://kwitter-167da-default-rtdb.firebaseio.com",
  projectId: "kwitter-167da",
  storageBucket: "kwitter-167da.appspot.com",
  messagingSenderId: "229399561664",
  appId: "1:229399561664:web:458b652057074ace6eb425",
  measurementId: "G-6Z2T2K8BLH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
  function addRoom(){
    room_name=document.getElementById("room_name").value ;
    firebase.database().ref("/").child(room_name).update({
      purpose:"add room"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
  }
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
