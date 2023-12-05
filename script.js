
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


  
var length = 3;

var A = "A";
var B = "B";
var C = "C";
var D = "D";
var E = "E";
var F = "F";
var G = "G";
var H = "H";
var I = "I";

var i = 0;

document.addEventListener('keypress', function (event) {
    if (event.key === 'D' || event.key === 'd' ) {
        console.log("right")
        right(length);
    }
});

function right(len){

    while(true){
        i = i+1;
        console.log(i);
        document.getElementById(A + i).style.background = "lime";
        console.log(A + 1);
        if(i >= len){
            let il = i - 3;
            document.getElementById(A + il).style.background = "red";

        }
        break;
        



        

    }
   
}