
function bolde(){ 
  event.preventDefault();
  var  getId=document.getElementById("texte") ;
  getId.style.fontWeight="bold";
  }
function ITALICE(){
  event.preventDefault();
  var getID=document.getElementById("texte");
  getID.style.fontStyle="italic"
  }
   function Underline(){
    event.preventDefault();
    var getID=document.getElementById("texte");
    getID.style.textDecoration ="underline";
    }
    function SIZE(){
      event.preventDefault();
      var getID=document.getElementById("texte");

      getID.style.fontSize=document.getElementById("fs").value;
    }
     function STYLE() {
      event.preventDefault();
      var getID=document.getElementById("texte");

      getID.style.fontFamily=document.getElementById("islem").value;
     }
      $( "document" ).ready(function(){
        $( ".services .image1" ).hover(
          function() {
            $(".iss1" ).toggle()
          })
      })
      $( "document" ).ready(function(){
        $( ".services .image2" ).hover(
          function() {
            $(".iss2" ).toggle()
          })
      })
      $( "document" ).ready(function(){
        $( ".services .image3" ).hover(
          function() {
            $(".iss3" ).toggle()
          })
      })
      $( "document" ).ready(function(){
        $( ".services .image4" ).hover(
          function() {
            $(".iss4" ).toggle()
          })
      })
      $( "document" ).ready(function(){
        $( ".services .image5" ).hover(
          function() {
            $(".iss5" ).toggle()
          })
      })
      $( "document" ).ready(function(){
        $( ".services .image6" ).hover(
          function() {
            $(".iss6" ).toggle()
          })
      })
      $( "document" ).ready(function(){
        $( ".services .image7" ).hover(
          function() {
            $(".iss7" ).toggle()
          })
      })
      $( "document" ).ready(function(){
        $( ".services .image8" ).hover(
          function() {
            $(".iss8" ).toggle()
          })
      })
      $( "document" ).ready(function(){
        $( ".services .image9" ).hover(
          function() {
            $(".iss9" ).toggle()
          })
      })
    
    
    // $('#services').mouseenter(function(){
    //   $('.h3').click(function(){
    //    alert(This is GoMyCode Track. 
    //     Each track has its own goal. 
    //     By adopting this track, you chose your own goal.);
    //   });
    // })
  
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    
    
    <!-- TODO: Add SDKs for Firebase products that you want to use
         https://firebase.google.com/docs/web/setup#config-web-app -->
   
      var firebaseConfig = {
        apiKey: "AIzaSyBHntYdkWgtK_GX3a3G-sEY8gvGXDwN0Kk",
        authDomain: "checkpoint-firebase-93fc1.firebaseapp.com",
        databaseURL: "https://checkpoint-firebase-93fc1.firebaseio.com",
        projectId: "checkpoint-firebase-93fc1",
        storageBucket: "",
        messagingSenderId: "955695291456",
        appId: "1:955695291456:web:4724911fdc4a8fae"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
   

var messageRef = firebase.database().ref("contact");
function submitF(){
     event.preventDefault();

     var name=document.getElementById("name").value;
     var option=document.getElementById("option").value;
     var email=document.getElementById("email").value;
     var numtel=document.getElementById("phone").value;
     


     savemessaage(name,option,email,numtel);
}
     
     function savemessaage(name,option,email,numtel){
       var newmessageRef=messageRef.push();
       newmessageRef.set({
         name:name,
         option:option,
         email:email,
         numtel:numtel

       }) 
      }