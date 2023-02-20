var startbutton = document.getElementById('startbtn'); 
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
    countdown();
  });