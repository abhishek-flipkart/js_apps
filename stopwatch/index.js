var timer = document.getElementById("timer");
var startBtn = document.getElementById("start");
var pauseBtn = document.getElementById("pause");
var stopBtn = document.getElementById("stop");
var timeoutHandler,
    count=0,
    stop = false;
startBtn.addEventListener('click', startTimer.bind(pauseBtn));
pauseBtn.addEventListener('click', pauseTimer);
stopBtn.addEventListener('click', stopTimer.bind(pauseBtn));


function startTimer() {
  if(stop) {
    stop = false;
    count = 0;
    this.removeAttribute('disabled');
  }
  counter();
}

function pauseTimer() {
  console.log("pause");
  stop = !stop;
  counter();
}

function stopTimer() {
  this.disabled = 'disabled';
  stop = true;
}

function counter() {
  if(!timeoutHandler && !stop) {
    timeoutHandler = setTimeout(function(){
      timer.innerHTML = count;
      count++;
      clearTimeout(timeoutHandler);
      timeoutHandler = undefined;
      counter();
    },1)
  }
}