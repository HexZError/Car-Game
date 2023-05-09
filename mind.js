
function init() {
    mysupra = document.getElementById('mysupra');
    mysupra.style.position = "relative";
    mysupra.style.left = "0px";
    mysupra.style.top = "0px";

    setInterval(()=>{
        num = Math.floor(Math.random() * (-190-50+1) + 1);
        let car1 = document.getElementById('eCar1').style.left = `${num}px`;
    },8000)
    setInterval(()=>{
        num = Math.floor(Math.random() * (-50-50+1) + 1);
        let car1 = document.getElementById('eCar2').style.left = `${num}px`;
    },7000)
    setInterval(()=>{
        num = Math.floor(Math.random() * (100-50+1) + 1);
        let car1 = document.getElementById('eCar3').style.left = `${num}px`;
    },8000)
    setInterval(()=>{
        num = Math.floor(Math.random() * (250-50+1) + 1);
        let car1 = document.getElementById('eCar4').style.left = `${num}px`;
    },6000)
}

function getKeyAndMove(e) {
    var key_code = e.which || e.keyCode;
    switch (key_code) {
        case 37: //left arrow key
            moveLeft();
            break;
        case 38: //Up arrow key
            moveUp();
            break;
        case 39: //right arrow key
            moveRight();
            break;
        case 40: //down arrow key
            moveDown();
            break;
    }
}
function moveLeft() {
    mysupra.style.left = parseInt(mysupra.style.left) - 10 + "px";
}
function moveUp() {
    mysupra.style.top = parseInt(mysupra.style.top) - 10 + "px";
}
function moveRight() {
    mysupra.style.left = parseInt(mysupra.style.left) + 10 + "px";
}
function moveDown() {
    mysupra.style.top = parseInt(mysupra.style.top) + 10 + "px";
}
window.onload = init;

setInterval(()=>{
    let eCar1_left = Math.abs(document.getElementById('eCar1').getBoundingClientRect().left);
    let eCar1_right = Math.abs(document.getElementById('eCar1').getBoundingClientRect().right);
    let eCar1_top = Math.abs(document.getElementById('eCar1').getBoundingClientRect().top);
    let eCar1_bottom = Math.abs(document.getElementById('eCar1').getBoundingClientRect().bottom);

    let eCar2_left = Math.abs(document.getElementById('eCar2').getBoundingClientRect().left);
    let eCar2_right = Math.abs(document.getElementById('eCar2').getBoundingClientRect().right);
    let eCar2_top = Math.abs(document.getElementById('eCar2').getBoundingClientRect().top);
    let eCar2_bottom = Math.abs(document.getElementById('eCar2').getBoundingClientRect().bottom);

    let eCar3_left = Math.abs(document.getElementById('eCar3').getBoundingClientRect().left);
    let eCar3_right = Math.abs(document.getElementById('eCar3').getBoundingClientRect().right);
    let eCar3_top = Math.abs(document.getElementById('eCar3').getBoundingClientRect().top);
    let eCar3_bottom = Math.abs(document.getElementById('eCar3').getBoundingClientRect().bottom);

    let eCar4_left = Math.abs(document.getElementById('eCar4').getBoundingClientRect().left);
    let eCar4_right = Math.abs(document.getElementById('eCar4').getBoundingClientRect().right);
    let eCar4_top = Math.abs(document.getElementById('eCar4').getBoundingClientRect().top);
    let eCar4_bottom = Math.abs(document.getElementById('eCar4').getBoundingClientRect().bottom);

    let mysupra_left = Math.abs(document.getElementById('mysupra').getBoundingClientRect().left);
    let mysupra_right = Math.abs(document.getElementById('mysupra').getBoundingClientRect().right);
    let mysupra_top = Math.abs(document.getElementById('mysupra').getBoundingClientRect().top);
    let mysupra_bottom = Math.abs(document.getElementById('mysupra').getBoundingClientRect().bottom);

    let road_left = Math.abs(document.getElementById('image').getBoundingClientRect().left);
    let road_right = Math.abs(document.getElementById('image').getBoundingClientRect().right);
    // let road_top = Math.abs(document.getElementById('image').getBoundingClientRect().top);
    // let road_bottom = Math.abs(document.getElementById('image').getBoundingClientRect().bottom);
    console.log(mysupra_bottom);
    let road_topp = 11;
    let road_bottom = 750;
    if((road_topp > mysupra_top && road_bottom > mysupra_bottom) || (road_topp < mysupra_top && road_bottom < mysupra_bottom)){
        setTimeout(() => {
            alert('Game Over');
        })
        location.reload(); 
    }
    if((road_left > mysupra_left && road_right > mysupra_right) || (road_left < mysupra_left && road_right < mysupra_right)){
        setTimeout(() => {
            alert('Game Over');
        })
        location.reload(); 
    }
    if(((eCar1_left < mysupra_left && mysupra_left < eCar1_right) || (eCar1_left < mysupra_right && mysupra_right < eCar1_right)) && ((eCar1_top < mysupra_top && mysupra_top < eCar1_bottom) || (eCar1_top < mysupra_bottom && mysupra_bottom < eCar1_bottom))){
        setTimeout(() => {
            alert('Game Over');
        })
        location.reload();  
    }
    if(((eCar2_left < mysupra_left && mysupra_left < eCar2_right) || (eCar2_left < mysupra_right && mysupra_right < eCar2_right)) && ((eCar2_top < mysupra_top && mysupra_top < eCar2_bottom) || (eCar2_top < mysupra_bottom && mysupra_bottom < eCar2_bottom))){
        setTimeout(() => {
            alert('Game Over');
        })
        location.reload(); 
    }
    if(((eCar3_left < mysupra_left && mysupra_left < eCar3_right) || (eCar3_left < mysupra_right && mysupra_right < eCar3_right)) && ((eCar3_top < mysupra_top && mysupra_top < eCar3_bottom) || (eCar3_top < mysupra_bottom && mysupra_bottom < eCar3_bottom))){
        setTimeout(() => {
            alert('Game Over');
        })
        location.reload(); 
    }
    if(((eCar4_left < mysupra_left && mysupra_left < eCar4_right) || (eCar4_left < mysupra_right && mysupra_right < eCar4_right)) && ((eCar4_top < mysupra_top && mysupra_top < eCar4_bottom) || (eCar4_top < mysupra_bottom && mysupra_bottom < eCar4_bottom))){
        setTimeout(() => {
            alert('Game Over');
        })
        location.reload(); 
    }
},100);

setInterval(function(){
    let score = document.getElementById('score');
    score.innerHTML++;
},1000)

function stop_game(){
    let car1 = document.getElementById('eCar1');
    let car2 = document.getElementById('eCar2');
    let car3 = document.getElementById('eCar3');
    let car4 = document.getElementById('eCar4');
    car1.style.animation = 'none';
    car2.style.animation = 'none';
    car3.style.animation = 'none';
    car4.style.animation = 'none';
}
function start_game(){
    let car1 = document.getElementById('eCar1');
    let car2 = document.getElementById('eCar2');
    let car3 = document.getElementById('eCar3');
    let car4 = document.getElementById('eCar4');
    car1.style.animation = 'ecar1 infinite linear 12s';
    car2.style.animation = 'ecar1 infinite linear 10s';
    car3.style.animation = 'ecar1 infinite linear 8s';
    car4.style.animation = 'ecar1 infinite linear 5s';
}