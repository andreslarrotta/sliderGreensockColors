var k = 0
var leftB = document.getElementById('botonleft')
var rightB = document.getElementById('botonright')
var divColor = document.getElementsByClassName('background-change')[0]
var imgDivColor = divColor.children[0]
leftB.addEventListener('click', function(){
    changeColor('left')
    
})
rightB.addEventListener('click', function(){
    changeColor('right')
    
})

function changeColor(boton){
    console.log(boton);
    console.log(k);
    if (boton == 'left') {
        k--
        if (k == 0 ) {
            console.log('final izquierdo');
            divColor.style.background = '#e4241a'
            divColor.children[0].src = 'img/car1.png'
            k = 0
            animationLeft()
            leftB.style.visibility = "hidden";
        }
        if (k == 1 ) {
            console.log('cambio al segundo');
            divColor.style.background = '#dc8a4d'
            divColor.children[0].src = 'img/car2.png'
            animationLeft()
            rightB.style.visibility = "visible";
            leftB.style.visibility = "visible";
        }
        if (k == -1 ) {
            console.log('final izquierdo');
            divColor.style.background = '#e4241a'
            divColor.children[0].src = 'img/car1.png'
            leftB.style.visibility = "hidden";
            k = 0
        }
    }
    else if (boton == 'right') {
        k++
        if (k == 1 ) {
            console.log('cambio al segundo');
            divColor.style.background = '#dc8a4d'
            divColor.children[0].src = 'img/car2.png'
            animationRight()
            leftB.style.visibility = "visible";
            
        }
        if (k == 2 ) {
            console.log('cambio al tercero');
            divColor.style.background = '#a7a6a0'
            divColor.children[0].src = 'img/car3.png'
            animationRight()
            rightB.style.visibility = "hidden";
        }
        if (k > 2 ) {
            k = 2
            console.log('fin derecho');
            rightB.style.visibility = "hidden";
        }
    }
}
TweenMax.set(imgDivColor, {  x: 0});

function animationLeft(){
    TweenMax.from(imgDivColor, 0.4, {
        x: "240px",
      })
}
function animationRight(){
    TweenMax.from(imgDivColor, 0.4, {
        x: "-240px",
      })
}