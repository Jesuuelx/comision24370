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