console.log('Loaded!');

//Change1 : Change the main taxt region
var element = document.getElementById('main-text');
element.innerHTML = "New value";

//Change2: Move the image on click
var img = document.getElementById('madi');
img.onclick = function() {
    img.style.marginleft = '500px';
};

//Change3: 