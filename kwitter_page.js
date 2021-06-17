//YOUR FIREBASE LINKS
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

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send() { msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });
      document.getElementById("msg").value = "";}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
nametag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
messagetag="<h4>"+message+"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row=nametag+messagetag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function updateLike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value ;
      updated_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
} 