var name = document.getElementById('name');
var deg = 0;
function rotateName() {
    deg = deg + 6;
    deg = deg % 360;
    if((0 <= deg && deg < 90) || (270 <= deg && deg < 360)) {
    name.className = 'face';
    }else {
    name.className = 'back';
    }
    name.style = 'rotateX(' + deg +  'deg)';
}
setInterval(rotateName, 20);