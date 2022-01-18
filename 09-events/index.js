const seccion   = document.querySelector('.seccion');
const btnPerros = document.querySelector('.btn-perros');
const btnGatos  = document.querySelector('.btn-gatos');
const form      = document.querySelector('form');


const crearHtml = ( titulo, imagen ) => {

    const html = ` <p>${titulo}</p>
    <img src="../asets/${imagen}.jpg" alt="">`;

    const div = document.createElement('div');
    div.innerHTML = html;

    seccion.append( div );


}


btnPerros.addEventListener('click', () => {

 
    const royal  = 'royal';
    const title1 = 'Royal Canin';
    const hills  = 'hills';
    const title2 = 'Hills';
    const nutra  = 'nutran'
    const title3 = 'NutraNuggets'
    document.querySelector('.seccion').innerHTML = ''; 
crearHtml( title1, royal );
crearHtml( title2, hills);
crearHtml( title3, nutra);
})


btnGatos.addEventListener('click', () => {
    const royal  = 'royalg';
    const title1 = 'Royal Canin';
    const hills  = 'hillsg';
    const title2 = 'Hills';
    const nutra  = 'nutrag'
    const title3 = 'NutraNuggets'
    document.querySelector('.seccion').innerHTML = ''; 
    crearHtml( title1, royal );
    crearHtml( title2, hills);
    crearHtml( title3, nutra);


})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let text = e.target.children[0].value;
    if ( text.includes('alimentos perros')){

        const royal  = 'royal';
        const title1 = 'Royal Canin';
        const hills  = 'hills';
        const title2 = 'Hills';
        const nutra  = 'nutran'
        const title3 = 'NutraNuggets'
        document.querySelector('.seccion').innerHTML = ''; 
        crearHtml( title1, royal );
        crearHtml( title2, hills);
        crearHtml( title3, nutra);

       

    } else if (text.includes('alimentos perros') ) {
        const royal  = 'royalg';
        const title1 = 'Royal Canin';
        const hills  = 'hillsg';
        const title2 = 'Hills';
        const nutra  = 'nutrag'
        const title3 = 'NutraNuggets'
        document.querySelector('.seccion').innerHTML = ''; 
        crearHtml( title1, royal );
        crearHtml( title2, hills);
        crearHtml( title3, nutra);
        
    }


})





