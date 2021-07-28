var firebaseConfig = {
      apiKey: "AIzaSyDirfOyiOb4sZ8FWYQzcG3qj3R-VpLA2fI",
      authDomain: "classtest-9d8b3.firebaseapp.com",
      databaseURL: "https://classtest-9d8b3-default-rtdb.firebaseio.com",
      projectId: "classtest-9d8b3",
      storageBucket: "classtest-9d8b3.appspot.com",
      messagingSenderId: "132641067019",
      appId: "1:132641067019:web:950587125390f6a3b2370e"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>;
      //End code
      });});}
getData();
