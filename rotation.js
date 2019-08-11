var nameElement = document.getElementById('nameElement');
var deg = 0;
function rotateName() {
    deg = deg + 6;
    deg = deg % 360;
    if((0 <= deg && deg < 90) || (270 <= deg && deg < 360)) {
    nameElement.className = 'face';
    }else {
    nameElement.className = 'back';
    }
    nameElement.style = 'transform:rotateX(' + deg +  'deg)';
}
setInterval(rotateName, 20);