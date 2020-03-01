var buttonColor=["blue","green","yellow","red"];
var gamePattern=[];
var level=0;

var start= false;

var userClickedPattern=[];
$(document).keypress(function(){
    if(!start)
    {
        $("#level-title").text("Level  " + level );
        nextSeq();
        start=true;}
});

$(".btn").click(function(){
    var userChoice=$(this).attr("id");
    userClickedPattern.push(userChoice);
    playSound(userChoice);
    animatePress(userChoice);
    checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel){

    if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
    {console.log("SUCCESS");
    if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSeq();
        }, 1000);
    
    }}
    else{
    console.log("WRONG");
    playSound("wrong");
    $("body").addClass("game-over");
        setTimeout(function () {
        $("body").removeClass("game-over");
        }, 200);
    
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
    }}



function nextSeq(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level  " + level );

   var randomNo = Math.floor(Math.random() * 4);
var randomChoice=buttonColor[randomNo];
gamePattern.push(randomChoice);

    $("#"+randomChoice).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoice);

}

  
function animatePress(currentColor){

    $("#"+currentColor).addClass("pressed");
    
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");}, 100)
}






function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }



function startOver(){
    level=0;
  gamePattern=[];
  start=false;
}
