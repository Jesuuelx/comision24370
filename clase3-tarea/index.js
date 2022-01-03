let medicinas = ``;
let medicina = prompt(`Ingresa Una a una las medicinas que quieres o concetrado para perros. \n Si No necesitas mas, puedes escribir la palabra termina`);
while ( medicina !== 'termina' ) {
     medicinas += medicina + '\n'
     medicina = prompt(`Ingresa Una a una las medicinas o concetrado para perros que quieres. \n Si No necesitas mas medicinas, puedes escribir la palabra termina`);
   

};

alert(`Tu factura contiene los siguientes medicamentos: \n ${ medicinas }`);