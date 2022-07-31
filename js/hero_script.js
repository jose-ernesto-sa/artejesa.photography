const html = document.documentElement;
const canvas = document.querySelector('.titulo_fotos_scroll');
const context = canvas.getContext('2d');

const nivel = index => (`img/secuencia_hero/${index.toString().padStart(4, '0')}.jpg`)

const contador = 56;

canvas.height = 1080;
canvas.width = 1920;

const img = new Image();
img.src = nivel(0);
img.onload = function(){
    context.drawImage(img, 0, 0)
}

const funcionactualizar = index =>{
    img.src = nivel(index);
    context.drawImage(img, 0, 0);
}

const funcionprecargar = () => {
    for (let i = 1; i < contador; i++) {
      const img = new Image();
      img.src = nivel(i);
    }
}

funcionprecargar();

window.addEventListener(
    'scroll', () =>{
        const niveldescroll = html.scrollTop;
        const cantidadscroll = 750;
        const relaciondescroll = niveldescroll / cantidadscroll;
        const numerodefoto = Math.min(contador - 1,  Math.floor(relaciondescroll * contador));
        requestAnimationFrame( () => funcionactualizar(numerodefoto))
    }
)
