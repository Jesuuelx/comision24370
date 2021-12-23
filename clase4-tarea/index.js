let juegos = [];





const comprasApp = ( tituloJuego ) => {


   while ( tituloJuego !== 'termina'){

        juegos.push( tituloJuego );

        tituloJuego = prompt('Siguiente juego o termina');



   }

   const cantidadJuegos = juegos.length;
   juegos.forEach( juego => alert(`${juego}. Ha sido agregado al carrito.`) );
    

}


comprasApp(prompt('Ingresa Aqui Cada juego, si terminas escribe termina'));

alert(`El pago por todos los juegos es ${juegos.length * 60}USD`);