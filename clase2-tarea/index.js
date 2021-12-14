let nombre = prompt('Introduce aca Tu nombre , SOLO MAYUSCULA.') ;

if (!isNaN ( nombre )){
    alert('Solo puedes introducir tu nombre, no numeros')
}else if (  nombre === nombre.toUpperCase() ){
    alert(`tu nombre es ${nombre}`);
    alert('Tienes el acceso!');

}else if ( nombre === nombre.toLowerCase()){
    alert('no tienes el acceso');
}