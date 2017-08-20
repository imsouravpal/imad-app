var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articels = {
    'articel-one': {
        title: "Atricle One",
        heading: "Articel One",
        date: "15 Aug 2017",
        content:`
                <p>
                    This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.
                </p>
                <p>
                    This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.
                </p>`
    },
    'articel-two': {
        title: "Atricle Two",
        heading: "Articel Two",
        date: "15 Aug 2017",
        content:`
                <p>
                    This is my 2nd Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.
                </p>
                <p>
                    This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.
                </p>`
    },
    'articel-three': {
        title: "Atricle Three",
        heading: "Articel Three",
        date: "15 Aug 2017",
        content:`
                <p>
                    This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.
                </p>
                <p>
                    This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.This is my first Articel.
                </p>`
    },
};

function creatTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
        <html>
            <head>
                <title>
                    ${title}
                </title>  
                <meta name="viewport" content="width=device-width, initial scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>    
    
            <body>
                <div class="container">
                    <div>
                        <a href="/">home</a>
                    </div>
                <hr/>
                    <h3>
                      ${heading}
                    </h3>
                    <div>
                      ${date}
                    </div>
                    <div>
                      ${content}
                    </div>
                </div>
            </body>    
        </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});



// Adding Counter. So if they go inside the path the counter will increment by 1 every time. 
var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter+1;
    res.send(counter.toString());
});
//Counter added.




//Another way of sending data. We add an URLEnd point which takes a name and returns a list of names.
//Query Parameter
app.get('/submit-name', function(req, res){  //URL: /submit-name?name=xxxxxx This how a Query-Parameter Looklike.
    //How to extract "name=xxxxxx" this Query-parameter string part from req object.
    var name = req.query.name; //This how to extrect data from Query-parameter string.
    
});




app.get('/:articelName', function(req, res) {
    var articelName = req.params.articelName;
    res.send(creatTemplate(articels[articelName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




//Make a request to the server.
//1st server should listning to the request.
//Below function is One way of getting the information as a part of URL ans sending the information back as JSON.
var names = [];  //Initializing names array.
app.get('/submit-name/:name', function(req, res){   //:name This parameter called the variable 'name'.
   //Get the name of request Object
   var name = req.params.name;  //Extrect the name
   
   names.push(name);  //Once we extrect the name value, we concatenate it to our overal list of names.
   
   //Converting names array into a string.
   //JSON: Javascript Object Notation. It's a way of converting JS Objects into string.
   res.send(JSON.stringify(names));  // Once it push the name value then return the response on string format.
});




















// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
