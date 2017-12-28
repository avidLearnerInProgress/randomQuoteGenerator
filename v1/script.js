document.write('<script type="text/javascript" src="var.js" ></script>');

var imported = document.createElement('script');
imported.src = 'randomColor.js';
document.head.appendChild(imported);

function quoter() {

    // random array number and color generator
    var random = Math.floor((Math.random() * quotes.length));

    var randColor = randomColor();
    // body background colour
    document.body.style.backgroundColor = randColor ;
    document.getElementById("button").style.color = randColor ;

    //quote generator
    document.getElementById("quote").innerHTML = quotes[random].quote;
    document.getElementById("name").innerHTML = "-" + quotes[random].author ;
}