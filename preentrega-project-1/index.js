const listaArticulos = [];


// interfaz con el usuario

const nombreUsuario = ( nombre, contrasena ) => {

    if (!isNaN ( nombre )){
        alert('Solo puedes introducir tu nombre, no numeros')
    }else if (  nombre === nombre.toUpperCase() ){
        alert(`tu nombre es ${nombre}`);
        alert('Tienes el acceso!');
    
    }else if ( nombre === nombre.toLowerCase()){
        alert('no tienes el acceso');
    }
    
    return nombre;


}


const comprasUsuario = ( alimento ) => {

        while( alimento !== 'termina'){

            listaArticulos.push( alimento )

            alimento = prompt('Ingresa los concentrados deseados si no escribe termina')


           

        }

        listaArticulos.forEach( aliment => alert(`Tu Concentrado: ${aliment} ha sido agregado al carrito.`));

}

const comprasCostos = (  listArt  ) => {

    const costoArt = listArt * 60;

    const iva = costoArt * 0.12;

    return costoArt + iva;

}

const usuario = nombreUsuario( prompt('Ingresa tu Nombre de usuario'), parseInt( prompt('Ingresa Tu Password')));

const articulos = comprasUsuario(prompt('Introduce el alimento que deseas, si no escribe termina '));


const costoTotal = comprasCostos( listaArticulos.length );

alert(`Tu Usuario: ${usuario} ha sido aceptado`);

alert(`El costo total de su compra es:${ costoTotal }` );

// clases

class Mascoteria  {

    constructor ( nombreCliente, producto, medioPago, saldo ) {

        this.nombreCliente = nombreCliente;
        this.producto      = producto;
        this.medioPago     = medioPago;
        this.saldo         = saldo;




    }  


    recargaTuSaldo ( recarga ) {
        this.saldo = this.saldo + recarga;
    }


    pagoProducto ( valorProducto ) {
        if (( this.saldo > 0 ) && (valorProducto < this.saldo )) {

            this.saldo = this.saldo - valorProducto;


        }



    }

    




}


// pruebas
const mascotaUno = new Mascoteria('Moscu', 'Shampoo', 'efectivo', 1000);
mascotaUno.pagoProducto(500);
mascotaUno.recargaTuSaldo(400);

// API 

const concentrados = [
    {   nombre: 'Hills',
        calidad: 'AAA',
        costo:   '100$USD',
},

{   
    nombre:'Proplan',
    calidad:'AAA',
    costo:  '80$USD',


},

{
    nombre:'Royal',
    calidad:'AAA',
    costo: '110$USD',
},

{
    nombre:'NutraNuggets',
    calidad:'AA',
    costo:  '45USD$',
},

{
    nombre:'TasteOfWild',
    calidad:'AA',
    costo: '55$USD',
},




]

console.log( concentrados );



const concetradosTripleA = concentrados.filter( conc => conc.calidad === 'AAA' );

console.log( concetradosTripleA );
const masCaro = concentrados.find( alimento => alimento.costo === '110$USD');

console.log( masCaro );

const nuevoProptype = concentrados.map( ({ nombre, calidad, costo, raza }) => ({
    nombre:nombre,
    calidad:calidad,
    costo:costo,
    raza:'Grandes',

}));

console.log( nuevoProptype )