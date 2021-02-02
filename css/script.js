debugger;
var x = ["Santo Antao","Sao Vicente","Sao Nicolau"];

function mudarImg(){
    debugger;
    var tom = true;
    if (tom) {
        var icon = document.getElementById("icon01");
        icon.src = "shark.jpg";
        icon.alt = "acesa"
        console.log();
    } else {
        var icon = document.getElementById("icon01");
        icon.src = "shark.jpg";
        console.log();
    }
    
}

function listIsland() {
    for (let index = 0; index < x.length; index++) {
        document.write(x[index]+", ");
    }

try {
    var input = prompt("What is your username");

    if (input.length>=4) {
        console.log("Yes");
    } else {
        console.log("No");
    }
    
} catch (error) {
    
}
    
}

function changeText() {
	//grab or initialize text here
    var text = document.getElementById("sometext");
	// font styles added by JS:
   	text.style.fontSize = "13pt";
   	text.style.fontFamily = "Comic Sans MS";
   	text.style.color = "red"; // or pink?
}