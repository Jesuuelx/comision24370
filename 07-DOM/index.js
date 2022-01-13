const seccion = document.querySelector('.seccion');


const crearHtml = ( titulo, imagen ) => {

    const html = ` <p>${titulo}</p>
    <img src="../asets/${imagen}.jpg" alt="">`;

    const div = document.createElement('div');
    div.innerHTML = html;

    seccion.append( div );


}


const royal  = 'royal';
const title1 = 'Royal Canin';
const hills  = 'hills';
const title2 = 'Hills';
const nutra  = 'nutran'
const title3 = 'NutraNuggets'
crearHtml( title1, royal );
crearHtml( title2, hills);
crearHtml( title3, nutra);

