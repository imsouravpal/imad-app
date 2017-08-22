var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool; //Step 1: creating pool for sever connection

var config = {  // Step 2: supplie your database cradentials
    user: 'spsourav263',
    database: 'spsourav263',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD  //If we declear our password here it unsafe so we use "ENVIRONMENT VARIABLE"(here DB_PASSWORD).
                                       //this line means use the ENVIRONMENT VARIABLE called DB_PASSWORD.
};
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
                      ${date.toDateString}
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



//Connect to detabase Test.
var pool = new Pool(config);
app.get('/test-db', function(req, res){
   //make a select request
   //return a response with a results
   pool.query("SELECT * FROM user ", function(err, result){      //Makeing A query
      if(err){
          res.status(500).send(err.toString());
      } else{
          res.send(JSON.stringify(result.rows)); 
      }
   });  
});



// Adding Counter. So if they go inside the path the counter will increment by 1 every time. 
var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter+1;
    res.send(counter.toString());
});
//Counter added.


//------------------------------------------------------------------------

//Another way of sending data. We add an URLEnd point which takes a name and returns a list of names.
//Query Parameter
app.get('/submit-name', function(req, res){  //URL: /submit-name?name=xxxxxx This how a Query-Parameter Looklike.
    //How to extract "name=xxxxxx" this Query-parameter string part from req object.
    var name = req.query.name; //This how to extrect data from Query-parameter string.
    
    names.push(name);
    
    res.send(JSON.stringify(names));
});
//Making a request to server endpoint by Query parameter string foram is ended here.
//-------------------------------------------------------------------------


//Making articles data dynamic: 
app.get('/articels/:articelName', function(req, res) {
    //var articelName = req.params.articelName; //moving this code to pool.query part.
    
    //SELECT * FROM article where title = '\'; DELETE WHERE a = \'asdf' //delete the entire coloum
    //pool.query("SELECT * FROM article where title = '" + req.param.articleName +"'", function(err, result){ //that is not safe
    pool.query("SELECT * FROM article where title = $1" + [req.param.articleName], function(err, result){
        if(err){
            res.status11(500).send(err.toString());
        } else {
            if (result.rows.length === 0){
                res.status(404).send('Article not found');
            } else {
                var articleData = result.rows[0];
                res.send(creatTemplate(articleData));
            }
        }
    });
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



//----------------------------------------------------------------------------------------------------------------------------------------

//Because we added Query Parameter string in upper part of this server so we commented out this old server req part. 

//Make a request to the server.
//1st server should listning to the request.
//Below function is One way of getting the information as a part of URL ans sending the information back as JSON.

//var names = [];  //Initializing names array.
//app.get('/submit-name/:name', function(req, res){   //:name This parameter called the variable 'name'.
   //Get the name of request Object
   //var name = req.params.name;  //Extrect the name
   
   //names.push(name);  //Once we extrect the name value, we concatenate it to our overal list of names.
   
   //Converting names array into a string.
   //JSON: Javascript Object Notation. It's a way of converting JS Objects into string.
   //res.send(JSON.stringify(names));  // Once it push the name value then return the response on string format.
//});
//Making Request to server code is ended here.

//----------------------------------------------------------------------------------------------------------------------------------------




















// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
