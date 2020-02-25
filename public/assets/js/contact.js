// Initialize Firebase
var config = {
    apiKey: "AIzaSyB9SuR8fVq01wY1GAOE4JglbHSvGAJvXqM",
    authDomain: "aseb-rase.firebaseapp.com",
    databaseURL: "https://aseb-rase.firebaseio.com",
    projectId: "aseb-rase",
    storageBucket: "aseb-rase.appspot.com",
    messagingSenderId: "457094606392"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('users');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    var name = getInputVal('name');
    var college = getInputVal('college');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
  
    // Save message
    saveMessage(name, college, email, phone);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, college, email, phone){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      college: college,
      email: email,
      phone: phone
    });
  }
  