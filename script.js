
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
        if(i == 10){document.getElementById(A + 1).style.background = "lime";}

        i = i+1;
        console.log(i);
        document.getElementById(A + i).style.background = "lime";
        console.log(A + 1);
        if(i >= len){
            let il = i - 3;
            document.getElementById(A + il).style.background = "white";
            il = 0;


        }
        if(i > 9){
            i = 0;
            let il = i + 4;
            document.getElementById(A + il).style.background = "white";
            il = il + 1;
            document.getElementById(A + il).style.background = "white";
            il = il + 1;
            document.getElementById(A + il).style.background = "white";
            il = il + 1;
            document.getElementById(A + il).style.background = "white";
            il = il + 1;
            document.getElementById(A + il).style.background = "white";
            il = il + 1;
            document.getElementById(A + il).style.background = "white";
            

        }

        break;
        



        

    }
   
}
