var startbutton = document.getElementById('startbtn'); 
var rightanswers = document.querySelectorAll('.rightanswer');
var score = 0;
var questionone = document.getElementById('questionone');
var questiontwo = document.getElementById('questiontwo');
var questionthree = document.getElementById('questionthree');
var questionfour = document.getElementById('questionfour');
var questionfive = document.getElementById('questionfive'); 
var questiononeanswers = document.getElementById('oneanswers');
var questiontwoanswers = document.getElementById('twoanswers');
var questionthreeanswers = document.getElementById('threeanswers');
var questionfouranswers = document.getElementById('fouranswers');
var questionfiveanswers = document.getElementById('fiveanswers');

function countdown(){
    var timerEl = document.getElementById('time');
    var timeLeft = 30; 
    var timeInterval = setInterval(function(){
        if (timeLeft > 1){
          timerEl.textContent = timeLeft + ' seconds left!';
          timeLeft--; 
        } else if (timeLeft === 1){
            timerEl.textContent = timeLeft + ' second left!';
            timeLeft--;  
        } else{
            timerEl.textContent = "";
            clearInverval(timeInterval); 
        }
    }, 1000);
}
startbutton.addEventListener("click", function() {
    startbutton.style.visibility = "hidden";
    questionone.style.display = "block";
    countdown();
  });


questiononeanswers.addEventListener("click", function(){
    if(this.click == rightanswers){
        questionone.style.display = "none";
        questiontwo.style.display = "block";
        score ++; 
    }
    else{
        questionone.style.display = "none";
        questiontwo.style.display = "block";
    }
})

questiontwoanswers.addEventListener("click", function(){
    if(this.click == rightanswers){
        questiontwo.style.display = "none";
        questionthree.style.display = "block";
        score ++; 
    }
    else{
        questiontwo.style.display = "none";
        questionthree.style.display = "block";
    }
})

questionthreeanswers.addEventListener("click", function(){
    if(this.click == rightanswers){
        questionthree.style.display = "none";
        questionfour.style.display = "block";
        score ++; 
    }
    else{
        questionthree.style.display = "none";
        questionfour.style.display = "block";
    }
})

questionfouranswers.addEventListener("click", function(){
    if(this.click == rightanswers){
        questionfour.style.display = "none";
        questionfive.style.display = "block";
        score ++; 
    }
    else{
        questionfour.style.display = "none";
        questionfive.style.display = "block";
    }
})


