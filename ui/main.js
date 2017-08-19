console.log('Loaded!');

//Change1 : Change the main taxt region

//var element = document.getElementById('main-text');
//element.innerHTML = "New value";


//Change2: Move the image on click

//var img = document.getElementById('madi');
//img.onclick = function() {
//    img.style.marginleft = '500px';
//};


//Change3: Move image gradualy by using intervalTime

//var img = document.getElementById('madi');
//    marginLeft = 0;
//    function moveRight(){
//        marginLeft = marginLeft + 10;
//        img.style.marginLeft = marginLeft + 'px';
//    }
//    img.onclick = function() {
//        var interval = setInterval(moveRight, 100);
//};  


//-----------------------------------------------------------------------------------------------------------------------------------------

//Counter code : Implementation Startpoint.

var button = document.getElementById('counter');
//var counter=0;

button.onclick = function() {   
    
    //Creat a requestObject: to the counter endpoint
       var request = new XMLHttpRequest();     //Creat a request by using XMLHttp request.
      
    
    //Request are many types. Open,Sent,loading,successfully loded:Stages of Request
    //Capture the response and save it in a variable. For that, we have to do detect the change in state.
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.Done) {     //Check the current state of Request object.
          
          //Take Some action if it is successful.
            if (request.status === 200)   {           //First check if this is an Successful request or not!!
              var counter = request.responseText;    //Extract the value from that request. Take the req and put it in the counter variabl.
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();   //Take the counter variable and put it into the spam.
            } //This is all we do Once we receve the response from the request. 
          
        }   
      
            //If not, then not Not Done Yet.
    };
      
    //Make the request: 
    request.open('GET', 'http://spsourav263.imad.hasura-app.io/counter', true);
    request.send(null);

  
    //Render the variable in the correct spam
      //counter = counter+1;
      //var span = document.getElementById('count');
      //span.innerHTML = counter.toString();
};        //Counter code Implementation completed.



//-----------------------------------------------------------------------------------------------------------------------------------------

//Submit Name.
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
  //Make a request to the server and send the name
  
  //Capture the list of name and render it as a list.
    var names = ['name1', 'name2', 'name3'];
       //Convert this into Html-String
    var list = '';
    for (var i=0; i<name.length; i++) {
        list += '<li>' + name[i] + '</li>';
  }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};
