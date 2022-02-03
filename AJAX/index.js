const URLPosts = 'https://jsonplaceholder.typicode.com/posts';
const URLPokemon = 'https://pokeapi.co/api/v2/pokemon/ditto';
const URLHamburguers = 'data/hamburguers.json';
const URLArgentina = 'https://apis.datos.gob.ar/georef/api/provincias'
const URLPotter = 'http://hp-api.herokuapp.com/api/characters/students'

// $('body').append('<button id="btn" class="bg-red-500 hover:bg-red-600 px-4 py-2 text-white rounded">Obtener Posts</button>')

// let info_post = {
//     nombre: 'Ana',
//     profesion: 'Developer',

// }

// $('#btn').click(function(e) {
//     $.get(URLPosts, function(response, status){
//         if(status === 'success') {
//             let posts = response;
//             for(post of posts) {
//                 $('body').append(`
//                     <div class="bg-white p-4 rounded shadow-lg">
//                         <h2 class="text-2xl font-bold">${post.title}</h2>
//                         <p class="text-gray-700">${post.body}</p>
//                     </div>
//                 `)
//             }
//         }
//     })
// })

//$('#btn').click(function(e) {
    // $.post(URLPosts, info_post, function(response, status) {
    //     if(status === 'success') {
    //         $('body').append(`
    //             <div>
    //                 Guardado: ${response.nombre}
    //             </div>
    //         `)
    //     }
    // })
    // $.get(URLHamburguers, function(response, status) {
    //     console.log(response)
    // })

    // $.ajax({
    //     method: 'GET',
    //     url: URLPosts,
    //     success: function(response, status) {

    //     }
    // })
//})

// 1. Obtener datos de las provincias de Argentina y mostrarlas en un select y al dar click escuchar el evento change y mostrar los datos de la provincia seleccionada

// function selectList(array, id) {
//     let innerHTML = '';
//     array.forEach(provincia => {
//         innerHTML += `<option id="${provincia.id}>${provincia.nombre}</option>`
//     });

//     return `<select class="px-2 py-1 w-64 rounded" id="${id}">${innerHTML}</select>`
// }

// let provincias = [{id: 0, nombre: 'Selecciona un Provincia'}];

// $.get(URLArgentina, function(response, status) {
//     if(status === 'success') {
//         provincias.push(response.provincias)
//         console.log(provincias)
//         $('body').append(selectList(provincias, 'select-provincia'))
//         $('#select-provincia').change(function(e) {
//             console.log(e.target.value)
//             $('body').append(`La provincia que has seleccionado es: ${e.target.value}`)
//         })
//     }
// })

// 2. obtener todos los municipios de la provincia seleccionada

// function selectList(array, id) {
//     let innerHTML = '';
//     array.forEach(provincia => {
//         innerHTML += `<option value="${provincia.id}">${provincia.nombre}</option>`
//     });

//     return `<select class="px-2 py-1 w-64 rounded" id="${id}">${innerHTML}</select>`
// }

// let provincias = [{id: 0, nombre: 'Selecciona un Provincia'}];

// $.get(URLArgentina, function(response, status) {
//     if(status === 'success') {
//         provincias.push(...response.provincias)
//         console.log(provincias)
//         $('body').append(selectList(provincias, 'select-provincia'))
//         $('#select-provincia').change(function(e) {
//             getMunicipios(e.target.value)
//         })
//     }
// })

// function getMunicipios(id) {
//     $.get(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${id}`, function(response, status) {
//         if(status === 'success') {
//            let municipios = response.municipios
//            for (municipio of municipios) {
//                $('#app').append(`<div>${municipio.nombre}</div>`)
//            }
//         }
//     })
// }


// 4. utilizar API de harry potter y listar elementos y seleccionar con una salida
const jokeUrl = 'https://api.chucknorris.io/jokes/random';
/* let estudiantes = []
$.get(URLPotter, function(response, status) {
    if(status === 'success') {
        estudiantes.push(...response)
        for (estudiante of estudiantes) {
            let idGenerado = Math.floor(Math.random() * 100)
            $('#app').append(`<div class="flex h-auto items-center space-x-4">
            <img src="${estudiante.image}" />
            <h1 class="text-2xl font-bold">${estudiante.name}</h1>
            <button id="${idGenerado}">Seleccionar Estudiante</button>
            </div>`)
        }
    }
}) */


$.get(jokeUrl, function(response, status) {
    if(status === 'success') {
        console.log(response.icon_url);
        console.log(response.id);
        console.log(response.value);

        $('#app').append(`<h1 class="mt-5">Chistes</h1>
        <hr>
        <button class="btn">Otro Chiste +...</button>
        <ol class="mt-2 list-group">
          
        </ol>
        <img src="${response.icon_url}" />`)
        
        $('.btn').click(function(){
            $('ol').html('')
            $('ol').append(`<li>${response.value}</li>`)
        } )
        

        
        
    }

})





