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
var img = document.getElementById('madi');
    marginLeft = 0;
    function moveRight(){
        marginLeft = marginLeft + 10;
        img.style.marginLeft = marginLeft + 'px';
    }
    img.onclick = function() {
        var interval = setInterval(moveRight, 100);
};  