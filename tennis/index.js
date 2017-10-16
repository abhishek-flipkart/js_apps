window.onload = function() {
  var startBtn = document.getElementById('start');
  var pauseBtn = document.getElementById('pause');
  var stopBtn = document.getElementById('stop');
  var canvas = document.getElementById("game");
  var canvasContext = canvas.getContext('2d');
  var config = {
    canvasHeight : canvas.height,
    canvasWidth : canvas.width,
    ball : {
      radius : 10,
      xPosInit : 20,
      yPosInit : 20,
      xMove : 2,
      yMove : 2
    },
    framesPerSecond : 200,
    intervalHandler : undefined
  };
  
  startBtn.addEventListener('click', function(){
    start(canvasContext, config);
    startBtn.setAttribute('disabled', true);
  });
  pauseBtn.addEventListener('click', function() {
    
  });
  stopBtn.addEventListener('click', function() {
    stop(config);
    startBtn.setAttribute('disabled', false);
  });
}


function draw(config) {
  //For drawing gameboard
  Rectrangle.call(this, 0, 0, config.canvasWidth, config.canvasHeight, "#000");
  
  // For drawing ball
  Circle.call(this, config.ball.xPosInit, config.ball.yPosInit, config.ball.radius, "#FF0");
}

function Circle(XPos, YPos, radius, color ) {
  this.fillStyle = color;
  this.beginPath();
  this.arc(XPos, YPos, radius, 0, Math.PI * 2, true);
  this.fill();
}

function Rectrangle(XPos, YPos, width, height, color ) {
  this.fillStyle = color;
  this.fillRect(XPos, YPos, width, height);
}

function movement(config) {
    config.ball.xPosInit += config.ball.xMove; 
    config.ball.yPosInit += config.ball.yMove; 
    if((config.ball.xPosInit+config.ball.radius) > config.canvasWidth) {
      config.ball.xMove = -config.ball.xMove;
    }
    
    if((config.ball.xPosInit-config.ball.radius) < 0) {
      config.ball.xMove = -config.ball.xMove;
    }
    
    if((config.ball.yPosInit+config.ball.radius) > config.canvasHeight) {
      config.ball.yMove = -config.ball.yMove;
    }
    
    if((config.ball.yPosInit-config.ball.radius) < 0) {
      config.ball.yMove = -config.ball.yMove;
    }
}


function start(canvasContext, config) {
  config.intervalHandler = setInterval(function(){
    movement(config)
    draw.call(canvasContext, config);  
  }, 1000/config.framesPerSecond);
}

function pause() {
  
}

function stop(config) {
  clearInterval(config.intervalHandler);
}