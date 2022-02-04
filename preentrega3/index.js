/*  variables y selectores */

const seccion = $('.seccion');
const btnPerros = $('.btn-perros');
const btnGatos = $('.btn-gatos');
const form = $('form');
const carrito = $('.nroCompras');
let counter = 0;
let p;
const precioTotal = $('.precioMas');
let nuevoStorageUno;
let nuevoStorageDos;
let acumulado = 0;
let storage = [];
let cuentaStorage = [];

/* BASE DE DATOS */
let perros = [
    { alimento:'hills',
      precio:100,
      title:'Hills'  
    },
{
    alimento:'nutran',
      precio:60,
      title:'NutraNuggets',

},
{
      alimento:'royal',
      precio:100,
      title:'RoyalCanin',

},
{
    alimento:'agility',
      precio:60,
      title:'Agility',

},
{
    alimento:'chunky',
      precio:40,
      title:'Chunky',

},
{
    alimento:'country',
      precio:70,
      title:'CountryValue',

},
{
    alimento:'dogchow',
      precio:40,
      title:'DogChow',

},
{
    alimento:'eukanuba',
      precio:60,
      title:'Eukanuba',

},
{
    alimento:'max',
      precio:60,
      title:'Max',

}

]

let gatos = [
    { alimento:'hillsg',
      precio:100,
      title:'Hills'  
    },
{
    alimento:'nutrag',
      precio:60,
      title:'NutraNuggets',

},
{
      alimento:'royalg',
      precio:100,
      title:'RoyalCanin',

}

]

console.log(perros[1].title)

/* CREAR HTML EN BOTON PERROS */
const crearHtmlDog = ( data ) => {

    for (let i = 0; i < perros.length; i++) {

        const html = `<div class="card"><p >${perros[i].title}</p>
    <img class="img${i}" src="../asets/${perros[i].alimento}.jpg" alt="">
    <p class="parrafo${i}">Precio:${perros[i].precio}$</p>
    </div>
    `;
   
    seccion.append(html);

$(`.parrafo${i}`).append(`<button class="boton${i}"> Agregar al Carrito</button>`);

    /*  CONTADOR Y LOCALSTORAGE */

    $(`.card`).prepend(`<div id="div1" style="display:none">
    <h3>¡Agregado al Carrito!</h3>
    <h4>Con Exito!</h4>
    </div>`)

    $(`.boton${i}`).click( () => {
        

            (localStorage.getItem('contador') != 0) ? counter = localStorage.getItem('contador') : counter = 0;
            (localStorage.getItem('cuenta') != 0 ) ? acumulado =  JSON.parse( localStorage.getItem('cuenta') )  : acumulado = 0;
            console.log(typeof acumulado);
         /*    ( (JSON.parse(localStorage.getItem('alimento'))).length > 0) ? storage = localStorage.getItem('alimento') : storage = [];  */
            counter++;
            acumulado =  perros[i].precio + acumulado   ; 
            nuevoStorageUno = perros[i];
            storage.push( nuevoStorageUno );
            localStorage.setItem('alimento', JSON.stringify( storage ));
            localStorage.setItem('cuenta', acumulado);
            localStorage.setItem('contador', counter); 
            precioTotal.text(`${(localStorage.getItem('cuenta')) ? ( localStorage.getItem('cuenta') ) : 0}`);
            carrito.text(`${(localStorage.getItem('contador')) ? localStorage.getItem('contador') : 0}`) 
        
    
            $('#div1').fadeIn("slow" , function(){
                //Cuando termina de ocultarse el elemento lo mostramos nuevamente
                $("#div1").fadeOut(1000); })


         })        
        
    } }

   /* CREAR HTML BOTON GATOS */

    const crearHtmlCat = ( data ) => {

        for (let i = 0; i < gatos.length; i++) {
    
            const html = ` <div class="card"><p >${gatos[i].title}</p>
        <img class="img${i}" src="../asets/${gatos[i].alimento}.jpg" alt="">
        <p class="parrafo${i}">Precio : ${gatos[i].precio}$  </p></div>
        `;
       
        seccion.append(html);
    

        $(`.parrafo${i}`).append(`<button class="boton${i}"> Agregar al Carrito</button>`);
    
    /* CONTADOR Y LOCALSTORAGE */
        $(`.boton${i}`).click( () => {
            (localStorage.getItem('contador') != 0) ? counter = localStorage.getItem('contador') : counter = 0;
            (localStorage.getItem('cuenta') != 0 ) ? acumulado =  JSON.parse( localStorage.getItem('cuenta') )  : acumulado = 0;
            
            counter++;
            acumulado = acumulado + gatos[i].precio; 
            nuevoStorageUno = gatos[i];
            storage.push( nuevoStorageUno );
            localStorage.setItem('alimento', JSON.stringify( storage ))   
            localStorage.setItem('cuenta', acumulado);
            localStorage.setItem('contador', counter); 
            precioTotal.text(`${(localStorage.getItem('cuenta')) ? localStorage.getItem('cuenta') : 0}$`);
            carrito.text(`${(localStorage.getItem('contador')) ? localStorage.getItem('contador') : 0}`)
            
        }

            )
         
        } }
        
        precioTotal.text(`${(localStorage.getItem('cuenta')) ? localStorage.getItem('cuenta') : 0}$`);
        carrito.text(`${(localStorage.getItem('contador')) ? localStorage.getItem('contador') : 0}`)

/* TOCAR BOTON PERROS */
btnPerros.click( () => {
   
    $('.seccion').html('') 
    crearHtmlDog( perros );

})
/* TOCAR BOTON GATOS */
btnGatos.click( () => {

    $('.seccion').html('')
    crearHtmlCat( gatos );
})

/* INPUT // BUSCADOR // FUNCIONA CON LAS PALABRAS INCLUDES */
form.submit(function (e)  {
    e.preventDefault();
    let text = e.target.children[0].value;
    if (text.includes('alimentos perros')) {

        $('.seccion').html('')
        crearHtmlDog( perros );

    } else if (text.includes('alimentos gatos')) {
        $('.seccion').html('');    
        crearHtmlCat(gatos);
    }


})


/* boton de carrito */


$(`.dog`).prepend(`<div id="div2" style="display:none">
<div><h3>Productos Total a Pagar: | </h3>
<h4 class"cuenta"> ${localStorage.getItem('cuenta')}$</h4></div>
<div><h3>Cantidad</h3>
<h4 class"counter">${localStorage.getItem('contador')}</h4></div>    

    </div>`)
$('#div2').css("position", "absolute");
 $('#div2').css("background-color", "yellow")
 $('#div2').css("width", "50%")
 $('#div2').css("border", "solid 2px black")
   

$('svg').click(() => {
    $('#div2').toggle("fast")
    $('cuenta').text();

}) 

/* vaciar carrito */

$('.vacio').click(() => {
    counter = 0;
    acumulado = 0;
    localStorage.setItem('cuenta', acumulado);
    localStorage.setItem('contador', counter);
    precioTotal.text(`${(localStorage.getItem('cuenta')) ? localStorage.getItem('cuenta') : 0}$`);
        carrito.text(`${(localStorage.getItem('contador')) ? localStorage.getItem('contador') : 0}`)

})















