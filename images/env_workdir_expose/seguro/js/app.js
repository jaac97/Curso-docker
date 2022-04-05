// Objeto Seguro
function Seguro(precio, marca, year, tipo) {
    this.precio = precio;
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}


Seguro.prototype.cotizarSeguro = function () {
    /* 
    1 = Americano 1.15
    2 = Asiatico 1.05
    3 = Europeo 1.35
    */
    //    console.log(this.precio)

    let cantidad;
    const base = this.precio;
    switch (this.marca) {
        case '1':
            cantidad = base * 1.15
            break;
        case '2':
            cantidad = base * 1.05
            break;
        case '3':
            cantidad = base * 1.35
            break;
        default:
            break;
    }
    //    console.log(cantidad)
    //    leer el año

    // cada año diferencia es mayor costo se reduce un 3%
    let diferencia = new Date().getFullYear() - this.year;
    diferencia *= 0.03;
    //    console.log(diferencia)

    cantidad = cantidad - (cantidad * diferencia);
    // console.log(cantidad)
    /*
   Si el seguro es basico se multiplica 30%
   Si el seguro es completo se multuplica 50%

    */
    //    console.log(cantidad)
    if (this.tipo === 'basico') {
        cantidad = cantidad + (cantidad * 0.3);
    } else if (this.tipo === 'completo') {
        cantidad = cantidad + (cantidad * 0.5);

    }

    //    console.log(cantidad)
    return cantidad;
}



// Objeto SUI

function UI() {}

UI.prototype.llenarYear = () => {
    const max = new Date().getFullYear(),
        min = max - 20;

    const year = document.querySelector('#year');
    for (let i = max; i > min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
};


UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');

    if (tipo === 'error') {
        div.classList.remove('correcto')
        div.classList.add('error')

    } else if (tipo === 'correcto') {
        div.classList.remove('error')
        div.classList.add('correcto')

    }
    div.classList.add('mensaje', 'mt-10')
    div.textContent = mensaje


    //Insertar html
    const formululario = document.querySelector('#cotizar-seguro');
    formululario.insertBefore(div, formululario.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 2000);

}
UI.prototype.mostrarResultado = (seguro, total) => {
    const {
        marca,
        year,
        tipo
    } = seguro;
    let textoMarca;
    switch (marca) {
        case '1':
            textoMarca = "Americano";
            break;
        case '2':
            textoMarca = "Asiatico";
            break;
        case '3':
            textoMarca = "Europeo";
            break;
        default:
            break;
    }

    const resultados = document.querySelector('#resultado div');
    if (resultados !== null) {
        resultados.remove();

    }

    const div = document.createElement('div');
    div.classList.add('mt-10');
    div.innerHTML = `
        <p class="header">Tu resumen</p>
        <p class="font-bold">Marca: <span class="font-normal"> ${textoMarca}</span></p>

        <p class="font-bold">Año: <span class="font-normal"> ${year}</span></p>
        <p class="font-bold">Tipo seguro: <span class="font-normal capitalize"> ${tipo}</span></p>

        <p class="font-bold">Total: <span class="font-normal"> $${total}</span></p>
    `;

    const cargando = document.querySelector('#cargando');
    cargando.style.display = "flex";

    const resultado = document.querySelector('#resultado');
    const btnSubmit = document.querySelector('#cotizar-seguro button');
    // console.log(btnSubmit);
    btnSubmit.classList.add('cursor-not-allowed');
    btnSubmit.disabled = true;

    setTimeout(() => {
        cargando.style.display = "none";
        resultado.appendChild(div);
        btnSubmit.disabled = false;
        btnSubmit.classList.remove('cursor-not-allowed');
    }, 2000)
}


const ui = new UI();



const eventos = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const formululario = document.querySelector('#cotizar-seguro');

        ui.llenarYear();
        formululario.addEventListener('submit', cotizarSeguro);
    })




}


const cotizarSeguro = (e) => {
    e.preventDefault();
    // leer marca selec
    const marca = document.querySelector('#marca').value
    // año select
    const year = document.querySelector('#year').value;

    // tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    // precio
    const precio = parseInt(document.querySelector('#precio').value);


    if (marca === "" || year === "" || tipo === "" || isNaN(precio)) {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }

    ui.mostrarMensaje('Realizando cotización', 'correcto');

    // Instanciar el seguro

    // Utilizar el prototype  que va a cotizar

    const seguro = new Seguro(precio, marca, year, tipo);
    const total = seguro.cotizarSeguro();


    ui.mostrarResultado(seguro, total);
}






eventos();