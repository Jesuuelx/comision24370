let numero = parseInt( prompt('Introduce aca Tu edad') ) ;

if (isNaN ( numero )){
    alert('Tienes que introducir OBLIGATORIAMENTE TU EDAD EN NUMEROS!')
}else {
    let yearActual = 2021;

    alert(`Naciste en el año ${yearActual - numero}`);

}