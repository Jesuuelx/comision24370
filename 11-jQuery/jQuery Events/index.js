
// const products = [{id: 1, nombre: 'Arroz', precio: 125}, {id: 2, nombre: 'Leche', precio: 150}, {id: 3, nombre: 'Carne', precio: 200}];

// for (const product of products) {
//     $('#app').append(`<div class="bg-gray-200 p-4 rounded-lg my-4">
//         <input type="hidden" value="${product.nombre}">
//         <h4>${product.nombre}</h4>
//         <p>${product.precio}</p>
//         <button id="btn${product.id}" class="btnComprar bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500">Haz click al producto</button>
//     </div>`)
// }


// $(()=> {
//     $('.btnComprar').on('click', function (e) {
//         let children = $(e.target).parent().children();
//         let inputs = e.target.children()
//         console.log(children[0].value)
//     })
// });


// $(()=> {
//     $('#mi-formulario').on('submit', function (e) {
//         e.preventDefault();
//         let inputs = e.target.querySelectorAll('input');

//         console.log(inputs[2].value)
//     })
// });


// 1. Tener un boton con id btnNucleo, que al hacer click muestre en consola el número un mensaje en el HTML

$('#button').append(`<button class="btnComprar bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500" id="btnNucleo">Haz click al botón btnNucleo</button>`);

$('#btnNucleo').on('click', function (e) {
    $('#button').prepend(`<h2 class="text-2xl">Haz dado click al botón btnNucleo</h2>`);
})


// 2. Tener un arreglo instanciado de clase Vestido, crear un selector dinamico y escuchar el evento change para mostrar el resultado en HTML

const vestidos = []

class Vestido {
    constructor(marca, precio, color) {
        this.id = vestidos.length + 1;
        this.marca = marca;
        this.precio = precio;
        this.color = color;
    }
}

vestidos.push(new Vestido('Zara', '$100', 'Rojo'));
vestidos.push(new Vestido('Channel', '$150', 'Azul'));
vestidos.push(new Vestido('Berskha', '$200', 'Verde'));
vestidos.push(new Vestido('Berskha', '$200', 'Verde'));
vestidos.push(new Vestido('Berskha', '$200', 'Verde'));

// let options = '';

// for(vestido of vestidos) {
//     options += `<option value="${vestido.id}">${vestido.marca} - ${vestido.precio} - ${vestido.color} </option>`;
// }

// $('#select').append(`<select id="vestidos">${options})</select>`);

// $('#vestidos').on('change', function (e) {
//     let id = e.target.value;
//     let vestido = vestidos[id - 1];
//     $('#select').append(`<h2 class="text-xl">Tu vestido seleccionado es el siguiente: ${vestido.marca} - ${vestido.precio} - ${vestido.color} </h2>`);
// })

// 3. Crear un formulario de creacion de vestidos, tener un selector de colores, asignarlos a un arreglo a traves de la clase vestido y mostrar un mensaje de confirmacion de creado

const colors = ['Rojo', 'Azul', 'Verde', 'Amarillo']
// const brands = ['Apple', 'Microsoft', 'Playstation']

function createSelect(array, id) {
    let options = '';
    array.forEach((element, index) => {
        options += `<option value="${index}">${element}</option>`;
    });


    return `<select id="${id}">${options}</select>`;
}

// $('#formulario-vestidos').append(`
// <form id="form-vestidos">
//     <input type="text" placeholder="marca">
//     <input type="number" placeholder="precio">
//     ${createSelect(colors, 'select-color')}
//     <button type="submit">Guardar</button>
// </form>
// `)

// $('#form-vestidos').on('submit', function (e) {
//     e.preventDefault();
//     let marca = e.target.children[0].value
//     $('#formulario-vestidos').append(`<h2 class="text-xl">Tu vestido de la marca ${e.target.children[0].value} se ha creado</h2>`);
// })

// 4. Crear un selector de colores, y con base al color que se ha seleccionado, filtrar los que coinciden con el color de mi elección


$('#filtros').append(`<div id="mis-vestidos"></div>`)

function generarVestidos(vestidos) {
    $('#mis-vestidos').empty();
    vestidos.forEach(vestido => {
        $('#mis-vestidos').append(crearDivVestido(vestido));
    })
}

function crearDivVestido(vestido) {
    return `<div class="bg-gray-200 p-4 rounded-lg my-4">
        <h2>${vestido.marca}</h2>
        <p>${vestido.precio}</p>
        <p>${vestido.color}</p>
    </div>`
}

$('#filtros').append(`
<div class="bg-gray-200 p-4 rounded-lg my-4">
    ${createSelect(colors, 'select-color')}
</div
`)

generarVestidos(vestidos);

$('#select-color').on('change', function (e) {
    let color = e.target.value;
    filtrado = vestidos.filter(vestido => vestido.color === colors[color])
    generarVestidos(filtrado)
})
