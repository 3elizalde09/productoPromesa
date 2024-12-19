console.log("Actividad Promesas");

// 1. Crear variable data, y asignar contenido a data.
const data = {
  "id": 7,
  "title": "White Gold Plated Princess",
  "price": 9.99,
  "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
  "category": "jewelery",
  "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  "rating": {
    "rate": 3,
    "count": 400
  }
};


// 2. Crear funcion getData() - Funcion sincrona
function getDataSincrona() {
    console.log("getData - Respuesta Sincrona");
    return data;
}//getData
console.log(getDataSincrona());//Llamado de funcion sincrona


// 2.1 Crear funcion getData() - Asincrona
function getData() {
    // 4. Crear y manejar promesa, Importante asignar los parametros resolve y reject
    // Resolve indica se usa para cuando no hay promblemas con el dato o la informacion citada.
    // Reject cuando hay errores con el dato o la informacion citada
    return new Promise((resolve, reject) => {
        // 5. Instrucciones de como se va a manejar la promesa, si hay error en la promesa
        if ((data == null) || (data.length == 0)) {
            reject(new Error("Data is empty"));
        }//si hay error

        //SI no hay error 
        setTimeout(() => {  //setTimeout recibe 2 parametros, funcion flecha y el valor del los milisegundos
            resolve(data);
        }, 3000);
    });
    // 3. Simulacion de tardanza en retorno de informacion de getData.

}//getDataAsincrona

// Forma no 2 para manejar el resultadp de una promesa
async function fetchingData() {
    try {
        const res = await getData();
        let alertInfo = document.getElementById("alertInfo");
        alertInfo.innerHTML = `${res.description}`;
        alertInfo.style.display="block";        
    } catch (err) {
        let alertError = document.getElementById("alertError");
         alertError.innerHTML = `<strong>${err},</strong>`;
         alertError.style.display="block";
        
    }
    
}//fetching data

// Comando para mandar a llamar la  funcion asincrona
fetchingData();

// Forma 1 para realizar respuesta ASINCRONA
// getData()
// .then((response) => {

//     // 3.Llamado de funcion Asincrona en consola de navegador
//     console.log("Respuesta Asincrona", response);

//     let alertInfo = document.getElementById("alertInfo");
//     alertInfo.innerHTML = `${response.description}`;
//     alertInfo.style.display="block";

    
    
    
//     })

// // Forma correcta p/manejar una respuesta incorrecta, o q no tenga informacion ERROR.
// .catch((err)=>{

//         // Inserseccion de error a alerta visual.
//         let alertError = document.getElementById("alertError");
//         alertError.innerHTML = `<strong>${err},</strong>`;
//         alertError.style.display="block";

//         //Para mostrar info en consola
//     //console.log(err);
// });