
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyAaUhKVmq7iN_dSDpKxZhy_o4IkREhuxLg",
      authDomain: "kwitter-e19b7.firebaseapp.com",
      databaseURL: "https://kwitter-e19b7-default-rtdb.firebaseio.com",
      projectId: "kwitter-e19b7",
      storageBucket: "kwitter-e19b7.appspot.com",
      messagingSenderId: "58018856661",
      appId: "1:58018856661:web:3d52bb2d564d89f824ac5c"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
