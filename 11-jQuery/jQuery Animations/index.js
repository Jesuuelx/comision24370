// $('#app').append('<h1 id="title" class="text-4xl font-bold my-6 text-center" style="display: none">Hola Coders 🤙🏻</h1>')
// $('#app').append('<button id="btn-down" class="mx-2 bg-red-500 px-4 py-2 rounded text-white">Haz Slide Down</button>')
// $('#app').append('<button id="btn-up" class="mx-2 bg-purple-500 px-4 py-2 rounded text-white">Haz Slide Up</button>')
// $('#app').prepend('<button id="btn-toggle" class="mx-2 bg-green-500 px-4 py-2 rounded text-white">Haz Toggle</button>')


// $('h1').show();
// $('h1').hide();
// $('h1').fadeIn("fast");
// $('h1').fadeOut("fast");
// $('#app').fadeOut("slow", function () {
//     $('#app').show(1000);
// });

// $('#btn-down').click(function() {
//     $('h1').slideDown("fast");
// });

// $('#btn-up').click(function() {
//     $('h1').slideUp("fast");
// });

// $('#btn-toggle').click(function() {
//     $('h1').fadeToggle("fast");
// });


// $('body').append(`<div>
//     <a class="cursor-pointer text-red-500">Ir a contacto</a>
//         <p style="height: 1800px;"></p>
//         <section id="section-container">
//         <h1>Somos Coder</h1>
//     </section>
// </div>`)

// $('a').click(function(e) {
//     e.preventDefault();

//     $('html, body').animate({
//         scrollTop: $('#section-container').offset().top
//     }, 2000)

// })


// $('#app').append('<h1>Hola Coders</h1>')

// $('h1').css({
//     'color': 'white',
//     'font-size': '50px',
//     'font-weight': 'bold',
// }).slideUp(1000).delay(5000, function() {
//     $(this).slideDown(1000)
// }).slideDown(2000);

// const products = [{id: 1, name: 'Arroz', price: 125}, {id: 2, name: 'Leche', price: 150}, {id: 3, name: 'Carne', price: 200}];

// for (const product of products) {
//     $('#app').append(`<div class="product">
//     <input value="${product.id}" type="hidden">
//     <h1>${product.name}</h1>
//     <b>$ ${product.price}</b>
//     <button class="btnComprar">Comprar</button>
//     </div>`)
// }

// $(document).ready(function(){
//     $('button').click(function(e){
//         let hijos = $(e.target).parent().children();
//         console.log(hijos[0].value)
//         $(e.target).parent().slideUp(1000)
//     })
// })

// 1. Insertar una imagen manipulando DOM y animarla utilizando animaciones encadenadas

const URLImage = 'https://images.unsplash.com/photo-1642952867267-533b87bea300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80';

// $('body').append(`<img id="img-manipulate" src="${URLImage}" alt="Flowers" width="350px" height="350">`)
// $('#img-manipulate').fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000);

// 2. Insertar una imagen y un contenedor manipulando DOM y encadenar 3 animaciones y por cada transición cambiar el texto del contenedor

// $('body').append(`
// <div id="img-container">
//     <img id="img-manipulate" src="${URLImage}" alt="Flowers" width="350px" height="350">
//     <h2 class="text-center" id="img-text">IMAGEN</h2>
// </div>
// `)

// $('#img-manipulate')
// .fadeOut(1500, () => $('#img-text').html('BIENVENIDOS'))
// .fadeIn(1500, () => $('#img-text').html('CODERHOUSE'))
// .animate({
//     opacity: 0.5,
// }, 2000, () => $('#img-text').html('HEMOS FINALIZADO'))

// 3. incluir un input, un contenedor y una imagen manipulando el DOM, animar la imagen, recibir un valor en el input, manipularlo y mostrarlo animado en el HTML

// $('body').append(`
// <div id="img-container">
//     <img id="img-manipulate" src="${URLImage}" alt="Flowers" width="350px" height="350">
//     <input id="entry" class="mt-6 px-2 w-full py-1 rounded" type="text" placeholder="Ingresa un texto">
//     <h1 id="text-img"></h1>
// </div>
// `)

// $('#entry').keyup(function(e) {
//     $('#text-img').hide().html(e.target.value.toUpperCase()).slideDown(1000);
//     $('#img-manipulate').animate({ opacity: 0.75 }, 100).animate({ opacity: 1 }, 100);
// })


// 4. Crear radio buttons, y escuchar el evento click, para que cada uno de ellos realice una animacion

// $('body').append(`
// <div id="img-container">
//     <img id="img-manipulate" src="${URLImage}" alt="Flowers" width="350px" height="350">
//     <button id="btnSi" class="bg-red-500 px-2 py-1 rounded text-white">Si</button>
//     <button id="btnNo" class="bg-green-500 px-2 py-1 rounded text-white">No</button>
//     <h1 id="text-img"></h1>
// </div>
// `)

// $('#btnSi').click(function(e) {
//     e.preventDefault();
//     $('#btnSi').prop('disabled', true);
//     $('#btnNo').prop('disabled', true);
//     $('#btnSi').css('opacity', 0.5);
//     $('#btnNo').css('opacity', 0.5);
//     $('#text-img')
//         .html('¡Gracias por tu voto!')
//             .fadeIn(500)
//                 .delay(400)
//                     .fadeOut(500, () => {
//                         $('#btnSi').prop('disabled', false)
//                         $('#btnNo').prop('disabled', false)
//                         $('#btnSi').css('opacity', 1);
//                         $('#btnNo').css('opacity', 1);
//                     });
// })

// $('#btnNo').click(function(e) {
//     $('#btnSi').prop('disabled', true);
//     $('#btnNo').prop('disabled', true);
//     $('#text-img')
//         .html('¡Gracias por votar NO!')
//             .fadeIn(500)
//                 .delay(400)
//                     .fadeOut(500, () => {
//                         $('#btnSi').prop('disabled', false)
//                         $('#btnNo').prop('disabled', false)
//                     });
// })

// 5. Hacer un cronometro utilizando el DOM y animaciones

$('body').append(`
    <div id="reloj"></div>
    <button class="px-3 py-1 rounded bg-red-500 text-white uppercase font-bold text-xl" id="btnStop">Detener</button>
`)


let inicio = 0;
let stop = false;

function cronometro(selector) {
    $(selector)
        .delay(500)
            .fadeOut(200)
                .html(inicio)
                    .fadeIn(200, () => {
                        if(!stop) {
                            inicio++;
                            cronometro(selector);
                        }
                    })
}

$('#btnStop').click(function(e) {
    stop = !stop
    if(stop) {
        $(e.target).html('Reanudar')
    } else {
        $(e.target).html('Detener')
        cronometro('#reloj');
    }
})

cronometro('#reloj');
