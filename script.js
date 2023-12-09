//right

let con_let_right = -2;
const array = [];
//
//down
let x_down = -1; 
let word_down;
const arr_word = ["A","B","C","D","E","F","G","H","I"];
//
//общие
let eat;
let lengthh = 2;
let speed = 500;
let intervalId;
let right_act = false;
let up_act = false;
//
let word = "A";
let i = 0;
let iii = 0;
//
document.addEventListener('keydown', function (event) {
    if (event.key === 'D' || event.key === 'd'  || event.key === 'В' || event.key === 'в' ) {
        if(right_act === false){
            console.log("right");
            clearInterval(intervalId);
            intervalId = setInterval(right, speed);
            right_act = true;
            up_act = false;
        }

    } else if (event.key === 'S' || event.key === 's'  || event.key === 'Ы' || event.key === 'ы' ) {
        if(up_act === false){
            console.log("down");
            clearInterval(intervalId);
            intervalId = setInterval(down, speed);
            up_act = true;
            right_act = false;
        }

    } else if (event.key === 'A' || event.key === 'a'  || event.key === 'Ф' || event.key === 'ф' ) {
        if(right_act === false){
            console.log("left");
            clearInterval(intervalId);
            intervalId = setInterval(left, speed);
            right_act = true;
            up_act = false;
        }

    } else if (event.key === 'W' || event.key === 'w'  || event.key === 'Ц' || event.key === 'ц' ) {
        if(up_act === false){
            console.log("up");
            clearInterval(intervalId);
            intervalId = setInterval(up, speed);
            up_act = true;
            right_act = false;
        }

    }
});
function down(){
    if(iii == 0){iii = 1;}
    while(true){
        if(x_down >= 8){x_down = -1;}
        x_down++;word_down = arr_word[x_down];
        // console.log(word_down);console.log(x_down);
        document.getElementById(word_down + iii).style.background = "lime";
        word = word_down;clear_move();break;   

    }  
}
function right(){
    while(true){
        if(iii >= 9){iii = 0;}
        iii = iii+1;
        if(iii == 0){iii = 1;}
        // console.log(word);console.log(iii);
        document.getElementById(word + iii).style.background = "lime";
        clear_move();break;
    }
}
function left(){
    while(true){
        if(iii <= 1){iii = 10;}
        iii = iii-1;
        if(iii == 0){iii = 1;}
        // console.log(word);console.log(iii);
        document.getElementById(word + iii).style.background = "lime";
        clear_move();break;
    }
}
function up(){
    if(iii == 0){iii = 1;}
    while(true){
        if(x_down <= 0){x_down = 9;}
        x_down--;word_down = arr_word[x_down];
        // console.log(word_down);console.log(x_down);
        document.getElementById(word_down + iii).style.background = "lime";
        word = word_down;clear_move();break;   
    }  
}
function clear_move(){
    console.log(eat);
    var con = word + iii;
    if(con == eat){
        console.log("lvlup!");
        con_let_right = con_let_right - 1;
        eat = 0;
        rand_eat();
    } 
    array.push(con);
    if(array.length >= lengthh ){
        con_let_right++;
        document.getElementById(array[con_let_right]).style.background = "white";
        delete array[con_let_right];
    }
}

function rand_eat(){
    
    eat = arr_word[Math.floor(Math.random() * 8) + 1] + Math.floor(Math.random() * 9 + 1);
    document.getElementById(eat).style.background = "orange";  
}
rand_eat();
