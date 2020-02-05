//Code by Andrey N
onload = function(){
//ctx.fillText('Click to play!',200,200, 1000,1000); 
tick(); loseCheck();};
var playerY = 165;
var playerX = 0;
var step = 500;
var score = 0;
var Xvel = 10;
var obstacleX = 900;
function keypressed(string) {
  if(string.key == ' ' || 'W') {
    if(playerY >= 165) {
      jump();
    }
  }
}
function renderPlayer(y) {
  ctx.drawImage(document.getElementById('hiddenasset'),0,y)
}
function renderGround() {
  ctx.fillStyle = 'green';
  ctx.fillRect(0,300,1000,100);
}
function tick() {
  if(gamerunning == 1) {
    window.addEventListener("keypress",keypressed, false);
    ctx.clearRect(0,0,1100,1000)
    console.log(playerY)
    playerX = playerX + Xvel;
    Xvel = Xvel + 0.001;
    score++
    renderObstacle(obstacleX);
    renderObstacle(obstacleX*1.5);
    renderObstacle(obstacleX*5);
    document.getElementById('gameScore').innerHTML = score;
    }
    setTimeout(tick, step/25);
    renderGround();
    renderPlayer(playerY);
}
function loseCheck() {
  if(playerX-obstacleX >= 0 && playerY >= 165 && obstacleX -playerX >=  -80){
     gamerunning = 0;
     document.getElementById('canvas').outerHTML = 'You lost<br> press any key to try again';
     onousedown = function(){location.reload();}
     onkeyup = function(){location.reload();}
     }
  setTimeout(function(){loseCheck()}, 10);
}
function jump() {
  for(var e = 0; e <= 150; e++) {
      playerY--
  }
  setTimeout(function(){for(var e = 0; e <= 150; e++) {playerY++}}, step + 0.05)
}
function renderObstacle(x) {
  ctx.drawImage(document.getElementById('hiddenasset2'),x-playerX,205, 100,100);
  if(x-playerX <=  -1000){
    playerX = 0;
  }
}