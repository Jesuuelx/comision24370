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
    <img src="../asets/${perros[i].alimento}.jpg" alt="">
    <p class="parrafo${i}">Precio:${perros[i].precio}$</p>
    </div>
    `;
   
    seccion.append(html);

$(`.parrafo${i}`).append(`<button class="boton${i}"> Agregar al Carrito</button>`);

    /*  CONTADOR Y LOCALSTORAGE */

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
        
         })        
        
    } }

   /* CREAR HTML BOTON GATOS */

    const crearHtmlCat = ( data ) => {

        for (let i = 0; i < gatos.length; i++) {
    
            const html = ` <div class="card"><p >${gatos[i].title}</p>
        <img src="../asets/${gatos[i].alimento}.jpg" alt="">
        <p class="parrafo${i}">Precio : ${gatos[i].precio}$  </p></div>
        `;
       
        seccion.append(html);
    

        $(`.parrafo${i}`).append(`<button class="boton${i}"> Agregar al Carrito</button>`);
    
    /* CONTADOR Y LOCALSTORAGE */
        $(`.boton${i}`).click( () => {
            localStorage.getItem('contador') != 0) ? counter = localStorage.getItem('contador') : counter = 0;
            (localStorage.getItem('cuenta') != 0 ) ? acumulado =  JSON.parse( localStorage.getItem('cuenta') )  : acumulado = 0;
            
            counter++;
            carrito.innerText = `${counter};`
            acumulado = acumulado + gatos[i].precio; 
            carrito.innerText = `${counter};`
            precioTotal.innerText = `${acumulado}$`; 

            nuevoStorageUno = gatos[i];
            storage.push( nuevoStorageUno );
            localStorage.setItem('alimento', JSON.stringify( storage ))   
            localStorage.setItem('cuenta', acumulado);
            localStorage.setItem('contador', counter); 
            precioTotal.text(`${(localStorage.getItem('cuenta')) ? localStorage.getItem('cuenta') : 0}`);
            carrito.text(`${(localStorage.getItem('contador')) ? localStorage.getItem('contador') : 0}`)
            
        }

            )
         
        } }
        
        precioTotal.text(`${(localStorage.getItem('cuenta')) ? localStorage.getItem('cuenta') : 0}`);
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



$(".miCuenta").click(() => {
    $("body").append(`<div id="div1" style="height:120px"
    style"width>
    <h3>¡Hola Coder!</h3>
    <h4>Sorpresa</h4>
</div>`);
                   /*  $("#div1").toggle("fast"); */


                } )















