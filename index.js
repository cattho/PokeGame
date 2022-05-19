// tomo canvas para dibujar el contenedor de la animacion
const canvas = document.querySelector('canvas');
// El método HTMLCanvasElement.getContext() retorna un contexto de dibujo en el lienzo, o null si el identificador del contexto no está soportado.
const context = canvas.getContext('2d')

canvas.width = 1800;
canvas.height = 850;

// dibujamos un rectangulo con el metodo fillRect
context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);

// cargamos la imagen o mapa de nuestro juego
const image = new Image();
image.src = './Img/Pokemon style game map.png';

// creando jugador
const playerImage = new Image();
playerImage.src = './Img/playerDown.png';



// dibujando en el DOM
// image.onload = () => {   
// };

class Sprite {
    constructor({ position, velocity, image }) {
        this.position = position
        this.image= image
    }

    draw() {
    // drawimage tiene como parametro la imagen y la posicion en la que estamos dentro de la imagen
    context.drawImage(this.image, this.position.x, this.position.y);
    }
}

const background = new Sprite({
    position: {
        x: -2550,
        y: -1600
    },
    image: image
})

const keys ={
    w:{
        presionado:false
    },
    s:{
        presionado:false
    },
    a:{
        presionado:false
    },
    d:{
        presionado:false
    },
    ArrowUp:{
        presionado:false
    },
    ArrowDown:{
        presionado:false
    },
    ArrowLeft:{
        presionado:false
    },
    ArrowRight:{
        presionado:false
    }
}

const velocityMov= 4.5


// animacion del personaje
function animate() {
    // informa al navegador que quieres realizar una animación y solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación. El método acepta como argumento una función a la que llamar antes de efectuar el repintado.
    window.requestAnimationFrame(animate)
    background.draw()
    context.drawImage(playerImage,
        0,
        0,
        // recorte de la imagen
        playerImage.width / 4,
        playerImage.height,
        // representa como se ve actualmente la imagen
        canvas.width / 2 - (playerImage.width / 4) / 2,
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 4,
        playerImage.height,
    )
    if(keys.w.presionado && ultimaKey === 'w'){
        background.position.y= background.position.y +=velocityMov
    }else if(keys.s.presionado && ultimaKey === 's'){
        background.position.y= background.position.y -=velocityMov
    }else if(keys.a.presionado && ultimaKey === 'a'){
        background.position.x= background.position.x +=velocityMov
    }else if(keys.d.presionado && ultimaKey === 'd'){
        background.position.x= background.position.x -=velocityMov
    }else if(keys.ArrowUp.presionado && ultimaKey === 'ArrowUp'){
        background.position.y= background.position.y +=velocityMov
    }else if(keys.ArrowDown.presionado && ultimaKey === 'ArrowDown'){
        background.position.y= background.position.y -=velocityMov
    }else if(keys.ArrowLeft.presionado && ultimaKey === 'ArrowLeft'){
        background.position.x= background.position.x +=velocityMov
    }else if(keys.ArrowRight.presionado && ultimaKey === 'ArrowRight'){
        background.position.x= background.position.x -=velocityMov
    }
}
animate();

// movimiento del jugador
let ultimaKey = '';

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.presionado=true
            ultimaKey='w'
            break;
        case 'ArrowUp':
            keys.ArrowUp.presionado=true
            ultimaKey='ArrowUp'
            break;
        case 's':
            keys.s.presionado=true
            ultimaKey='s'
            break;
        case 'ArrowDown':
            keys.ArrowDown.presionado=true
            ultimaKey='ArrowDown'
            break;
        case 'a':
            keys.a.presionado=true
            ultimaKey='a'
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.presionado=true
            ultimaKey='ArrowLeft'
            break;
        case 'd':
            keys.d.presionado=true
            ultimaKey= 'd'
            break;
        case 'ArrowRight':
            keys.ArrowRight.presionado=true
            ultimaKey='ArrowRight'
            break;
        default:
            break;
    }
});


window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.presionado=false
            break;
        case 'ArrowUp':
            keys.ArrowUp.presionado=false
            break;
        case 's':
            keys.s.presionado=false
            break;
        case 'ArrowDown':
            keys.ArrowDown.presionado=false
            break;
        case 'a':
            keys.a.presionado=false
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.presionado=false
            break;
        case 'd':
            keys.d.presionado=false
            break;
        case 'ArrowRight':
            keys.ArrowRight.presionado=false
            break;
        default:
            break;
    }
})




