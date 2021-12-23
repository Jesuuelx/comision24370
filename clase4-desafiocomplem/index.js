
const listaArticulos = [];

const nombreUsuario = ( usuario, contraseña ) => {

        return usuario;


}


const comprasUsuario = ( juego ) => {

        while( juego !== 'termina'){

            listaArticulos.push( juego )

            juego = prompt('Ingresa los Juegos deseados si no escribe termina')


           

        }

        listaArticulos.forEach( juego => alert(`Tu Juego: ${juego} ha sido agregado al carrito.`));

}

const comprasCostos = (  numeroJuegos  ) => {

    const costoJuegos = numeroJuegos * 60;

    const iva = costoJuegos * 0.12;

    return costoJuegos + iva;

}

const usuario = nombreUsuario( prompt('Ingresa tu Nombre de usuario'), prompt('Ingresa Tu Password'));

const articulos = comprasUsuario(prompt('Introduce el juego que deseas, si no escribe termina '));


const costoTotal = comprasCostos( listaArticulos.length );

alert(`Tu Usuario: ${usuario} ha sido aceptado`);

alert(`El costo total de su compra es:${ costoTotal }` );





