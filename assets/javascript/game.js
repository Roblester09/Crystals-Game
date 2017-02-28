
$(document).ready(function(){

var score = 0;
var wins = 0;
var loss = 0;

var audio_win = new Audio("../assets/audio/stage_clear.wav");
var coin = new Audio("../assets/audio/coin.wav");
var audio_loss = new Audio("../assets/audio/mariodie.wav");

var randomNum =  Math.floor(Math.random() * 31) + 50;

// Check if win or lose

function check(){
    if(score === randomNum){
        audio_win.play();
        alert("You win!");
        wins++
        $("#wins").html(wins);
        resetScore();
    } else if(score > randomNum){
        audio_loss.play();
        alert("You Lose!");
        loss++;
        $("#losses").html(loss);
        resetScore();
    }
}

// Reset Score

function resetScore(){
    score = 0;
    $("#randomNumber").html(randomNum);
    $("#myScore").html(score);
    update();

    newNum();
    $("#randomNumber").html(newNum);
}


// Update Score

function update(){
    $("#myScore").html(score);
}

$("#randomNumber").html(randomNum);

// Click Functionality

$("#green-m").on("click", function(){
    coin.play();
    score ++;
    update();
    check();
});

$("#blue-m").on("click", function(){
    coin.play();
    score += 5;
    update();
    check();
});

$("#red-m").on("click", function(){
    coin.play();
    score += 2;
    update();
    check();
});

$("#evil-m").on("click", function(){
    coin.play();
    score += 10;
    update();
    check();
});

//Reset

//End Page Load

});