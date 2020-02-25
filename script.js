let car=document.getElementById("car");
let road=document.getElementById("road")

let carLeft=400;
let carTop=3800;
let roadBottom=-3245;

let audio = new Audio('car_engine.mp3');
function takeAction(e){
    if(e.keyCode==39){
        
        audio.play();
        carLeft +=10;
        car.style.left=carLeft+'px';
        if(carLeft >=800){
            carLeft =800;
        }
    }else if(e.keyCode==37){
        carLeft -=10;
        car.style.left=carLeft+'px';
        if(carLeft <=0){
            carLeft =0;
        }
    }
    else if(e.keyCode==38){
        
        let cal=carTop+roadBottom;
        carTop -=15;
        roadBottom+=10;
        console.log(cal);
        car.style.top=carTop+'px';
        road.style.top=roadBottom+'px'
        if(cal <=0){
            carTop +=10;
            roadBottom+=5;
            if(carTop <=0){
                carTop =0;
                roadBottom=0;
            }
        }
       
    }else if(e.keyCode==40){
        let cal=carTop+roadBottom;
        carTop +=15;
        roadBottom-=10;
        console.log(cal);
        road.style.top=roadBottom+'px'
        car.style.top=carTop+'px';
        if(cal >=550){
            carTop -=10;
            roadBottom-=5;
         if(carTop >=3800){
             carTop =3800;
             roadBottom=-3245;
         }
    }}
}

function stopAction(){
    audio.pause();
}

document.onkeydown = takeAction;
document.onkeyup = stopAction;