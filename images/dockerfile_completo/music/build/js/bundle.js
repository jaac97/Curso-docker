document.addEventListener('DOMContentLoaded', () => {
    navegacionFija();
});


function navegacionFija() {
    window.onscroll = function () {
        myFunction()
    };

    // Get the header

    const header = document.querySelector('.header');

    // Get the offset position of the navbar
    var sticky = header.offsetTop;
    // console.log(window.pageYOffset);
    // console.log(sticky)

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("fijo");
        } else {
            header.classList.remove("fijo");
        }
    }
}


document.addEventListener('DOMContentLoaded', crearGaleria);

function crearGaleria(){
    const galeria = document.querySelector('.galeria__contenedor');

    for(let i=1;i<=12;i++){
        const li = document.createElement('li');
        const img = document.createElement('img');

        img.src = `build/img/thumb/${i}.webp`;
        img.alt = "imagen galeria";
        img.classList.add('galeria__imagen');
        img.dataset.imagenId = i;

        img.onclick = mostrarImagen;

        li.classList.add('galeria__li');

        li.appendChild(img);
        galeria.appendChild(li);
    }
}

function mostrarImagen(e){
    const id = parseInt(e.target.dataset.imagenId);

    const imagen = document.createElement('img');
    imagen.src = `build/img/grande/${id}.webp`;
    
    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('img__overlay')

    const boton = document.createElement('p');
    boton.textContent = "X";

    boton.classList.add('btn--cerrar', 'btn');
    overlay.appendChild(boton);

    // cuando se presiona la x se cierra
    boton.onclick = function(){
        overlay.remove();
        body.classList.remove('fixed');

    }
    overlay.onclick = function(){
        overlay.remove();
        body.classList.remove('fixed');

    }

    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fixed');

}

