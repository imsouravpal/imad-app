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

//var button = document.getElementById('counter');
//var counter=0;

//button.onclick = function() {   
    
    //Creat a requestObject: to the counter endpoint
    //var request = new XMLHttpRequest();     //Creat a request by using XMLHttp request.
      
    
    //Request are many types. Open,Sent,loading,successfully loded:Stages of Request
    //Capture the response and save it in a variable. For that, we have to do:- detect the change in state.
    //request.onreadystatechange = function() {
      //if (request.readyState === XMLHttpRequest.Done) {     //Check the current state of Request object.
          
          //Take Some action if it is successful.
            //if (request.status === 200)   {           //First check if this is an Successful request or not!!
              //var counter = request.responseText;    //Extract the value from that request. Take the req and put it in the counter variabl.
              //var span = document.getElementById('count');
              //span.innerHTML = counter.toString();   //Take the counter variable and put it into the spam.
            //} //This is all we do Once we receve the response from the request. 
          
        //}   
      
            //If not, then not Not Done Yet.
    //};
      
    //Make the request: 
    //request.open('GET', 'http://spsourav263.imad.hasura-app.io/counter', true);
    //request.send(null);

  
    //Render the variable in the correct spam
      //counter = counter+1;
      //var span = document.getElementById('count');
      //span.innerHTML = counter.toString();
};        //Counter code Implementation completed.



//-----------------------------------------------------------------------------------------------------------------------------------------

//Submit Name.

//var submit = document.getElementById('submit_btn');  //When ever the submit-btn is clicked
//submit.onclick = function() {
  //Creat a Request Object
  //var request = new XMLHttpRequest();     //Creat a request by using XMLHttp request.
      
    
    //Request are many types. Open,Sent,loading,successfully loded:Stages of Request
    //Capture the response and save it in a variable. For that, we have to do:- detect the change in state.
    //request.onreadystatechange = function() {
      //if (request.readyState === XMLHttpRequest.Done) {     //Check the current state of Request object.
          
          //Take Some action if it is successful.
            //if (request.status === 200)   {           
                //Capture the list of name and render it as a list.
                //var names = ['name1', 'name2', 'name3']; //IF REQ SUCCESSFUL get the req of names.
                //Insted of hardcoding the list of names. Get that from response
                //var names = request.responseText; //Is a string not a js array. 
                //names = JSON.parse(names);  //Converted from string back into a Object. Here its an array.
                //Convert this into Html-String
                //var list = '';
                //for (var i=0; i< names.length; i++) {
                    //list += '<li>' + names[i] + '</li>';
                //}
                //var ul = document.getElementById('namelist');  //Render the list of names.
                //ul.innerHTML = list;
            //} //This is all we do Once we receve the response from the request. 
          
        //}   
      
            //If not, then not Not Done Yet.
    //};
      
    //Make the request: 
    //var nameInput = document.getElementById('name');  //Select InputBox
    //var name = nameInput.value;  //Extrect the value from input box
    //request.open('GET', 'http://spsourav263.imad.hasura-app.io/submit-name?name=' + name, true); //Send the req to this URL.
    //request.send(null);
 
  //Capture the list of name and render it as a list.
    //var names = ['name1', 'name2', 'name3'];
       //We use this part of code inside when req is successfull. in submit.onclick function. 
       //Convert this into Html-String
    //var list = '';
    //for (var i=0; i<names.length; i++) {
        //list += '<li>' + names[i] + '</li>';
  //}
    //var ul = document.getElementById('namelist');
    //ul.innerHTML = list;
//};



//----------------------------------------------------------------------------------------------------------------------------------------

//Submit username/password to login.

var submit = document.getElementById('submit_btn');  //When ever the submit-btn is clicked
submit.onclick = function() {
  //Creat a Request Object
  var request = new XMLHttpRequest();     //Creat a request by using XMLHttp request.
      
    
    //Request are many types. Open,Sent,loading,successfully loded:Stages of Request
    //Capture the response and save it in a variable. For that, we have to do:- detect the change in state.
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.Done) {     //Check the current state of Request object.
          
          //Take Some action if it is successful.
            if (request.status === 200)   {           
                //Capture the list of name and render it as a list.
                console.log('user logged in');
                alert('Logged in successfully');
            } else if (request.status === 403){
                alert('Username/Password is incorrect');
            } else if (request.status === 500){
                alert('Something went wrong on the server!');
            }
          
        }   
      
            //If not, then not Not Done Yet.
    };
      
    //Make the request: 
    var username = document.getElementById('username').value;  //username is extract from inputElement as soon as button is clicked.
    var password = document.getElementById('password').value;  //password is extract from inputElement as soon as button is clicked.
    console.log(username); //for debuging purpose this two logs are used here.
    console.log(password);
    request.open('POST', 'http://spsourav263.imad.hasura-app.io/login', true); //Send the req to this URL.
    request.setRequestHeader('Content-Type:', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
};