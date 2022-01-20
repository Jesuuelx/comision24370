const seccion = document.querySelector('.seccion');
const btnPerros = document.querySelector('.btn-perros');
const btnGatos = document.querySelector('.btn-gatos');
const form = document.querySelector('form');
const carrito = document.querySelector('.nroCompras');
let counter = 0;
let p;
const precioTotal = document.querySelector('.precioMas');
let nuevoStorageUno;
let nuevoStorageDos;
let acumulado = 0;
let storage = [];
let cuentaStorage = [];


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

const crearHtmlDog = ( data ) => {

    for (let i = 0; i < perros.length; i++) {


        const html = ` <p >${perros[i].title}</p>
    <img src="../asets/${perros[i].alimento}.jpg" alt="">
    <p class="parrafo${i}">Precio:${perros[i].precio}$</p>
    `;
   

    div = document.createElement('div');
    div.innerHTML = html;

    seccion.append(div);

    div.classList.add('card');

    p = document.querySelector(`.parrafo${i}`);

    const boton = document.createElement('button');
    boton.innerText = 'Agregar al Carrito';

    p.appendChild(boton);

    boton.addEventListener('click', () => {
        counter++;
        
        acumulado = acumulado + perros[i].precio; 
            nuevoStorageUno = perros[i];
            storage.push( nuevoStorageUno );
            localStorage.setItem('alimento', JSON.stringify( storage ));
            localStorage.setItem('cuenta', acumulado);
            localStorage.setItem('contador', counter); 
            precioTotal.innerText = `${(localStorage.getItem('cuenta')) ? localStorage.getItem('cuenta') : 0}$`;
            carrito.innerText = `${(localStorage.getItem('contador')) ? localStorage.getItem('contador') : 0};`
        
        ; })        
        
    } }

   carrito.innerText = `${localStorage.getItem('cuenta')}$`;
   precioTotal.innerText = `${localStorage.getItem('contador')}`

    const crearHtmlCat = ( data ) => {

        for (let i = 0; i < gatos.length; i++) {
    
            const html = ` <p >${gatos[i].title}</p>
        <img src="../asets/${gatos[i].alimento}.jpg" alt="">
        <p class="parrafo${i}">Precio : ${gatos[i].precio}$  </p>
        `;
       
    
        div = document.createElement('div');
        div.innerHTML = html;
    
        seccion.append(div);
    
        div.classList.add('card');

        p = document.querySelector(`.parrafo${i}`);
    
        const boton = document.createElement('button');
        boton.innerText = 'Agregar al Carrito';
    
        p.appendChild(boton);
    
        boton.addEventListener('click', () => {
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
            
        }

            )
         
        } }
        
        carrito.innerText = `${localStorage.getItem('cuenta')}$`;
        precioTotal.innerText = `${localStorage.getItem('contador')}`


btnPerros.addEventListener('click', () => {
   
    document.querySelector('.seccion').innerHTML = '';
    crearHtmlDog( perros );

})

btnGatos.addEventListener('click', () => {

    document.querySelector('.seccion').innerHTML = '';
    crearHtmlCat( gatos );
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let text = e.target.children[0].value;
    if (text.includes('alimentos perros')) {

        document.querySelector('.seccion').innerHTML = '';
        crearHtmlDog( perros );

    } else if (text.includes('alimentos gatos')) {
        document.querySelector('.seccion').innerHTML = '';    
        crearHtmlCat(gatos);
    }


})














