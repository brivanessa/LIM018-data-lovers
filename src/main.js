import data from './data/athletes/athletes.js';
import sports from './data/athletes/sports.js';
//console.log(sports)
//console.log(data.athletes);
//



import {noRepeatedData} from "./data.js";
const dataRio = data.athletes;
const datos1 = noRepeatedData(dataRio);
//console.log(datos1)

//menu
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
    //console.log(navToggle);
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

/* const data1 =data.athletes;
//console.log(data1);
const femenino =() =>{
return data1.filter ((fem)=>(fem.gender==="F"))
}
console.log(femenino()); */

//const principalSection = document.createElement("section"); //esta sección es para incluir todos los datos
//const fragment = document.createDocumentFragment();
//Crear nuevo div y añadirlo al elemento main
const newDiv = document.createElement("div"); // crea un nuevo div
const newContent = document.createTextNode("El número total de deportistas es:");  // y añade contenido
newDiv.appendChild(newContent); //añade texto al div creado.
// añade el elemento creado y su contenido al DOM
const elementMain = document.getElementById("athlete"); // con el metodo getElementById devuelve una referencia del elemento seccion con id "athletes" (es traido del DOM)
const parentMain = elementMain.parentNode; // Obtener una referencia al nodo 
parentMain.insertBefore(newDiv, elementMain); //
// const newSeccion = elementMain.cloneNode(true);

const athletesButton = document.getElementById("allAthletes");

athletesButton.addEventListener('click', () => {
  datos1.forEach((item) => {
    //Clonar una seccion del DOM y añadirla
    //añade secciones clonadas del elemento seccion athletes
    const newSeccion = elementMain.cloneNode(true); //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
    //parentMain.appendChild(newSeccion); // clonas un documeto y lo devuelves al final 
    //console.log(item)
    //const prueba = document.getElementById("pais").textContent;
    // newSeccion.prueba = item.team;
    newSeccion.querySelector("h2").textContent = item.team;
    newSeccion.querySelector("h3").textContent = item.name;
    newSeccion.querySelector("p").textContent = `Sport: ${item.sport} 
    Gender: (${item.gender}) 
    Height: (${item.height}) 
    Weight: ${item.weight}`;
    // newSeccion.querySelector("h5").textContent = item.gender;
    // newSeccion.querySelector("h6").textContent = `${item.name} (${item.team}) Peso: ${item.height} y Altura: ${item.weight}`;
    //newSeccion.querySelector("p").textContent = `${item.name} (${item.team}) Peso: ${item.height} y Altura: ${item.weight}`; 
    // parentMain.appendChild(principalSection);
  
  parentMain.appendChild(newSeccion);
  });
  document.getElementById("athlete").style.display="none"; //para ocultar el primer elmento
})

// athletesButton.addEventListener('click', showAthletes);
// function showAthletes(){
//   datos1.forEach((item) => {
//     //Clonar una seccion del DOM y añadirla
//     //añade secciones clonadas del elemento seccion athletes
//     const newSeccion = elementMain.cloneNode(true); //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
//     //parentMain.appendChild(newSeccion); // clonas un documeto y lo devuelves al final 
//     //console.log(item)
//     //const prueba = document.getElementById("pais").textContent;
//     // newSeccion.prueba = item.team;
//     newSeccion.querySelector("h3").textContent = item.name;
//     newSeccion.querySelector("h4").textContent = item.sport;
//     newSeccion.querySelector("h5").textContent = item.gender;
//     newSeccion.querySelector("h6").textContent = `${item.name} (${item.team}) Peso: ${item.height} y Altura: ${item.weight}`;
//     //newSeccion.querySelector("p").textContent = `${item.name} (${item.team}) Peso: ${item.height} y Altura: ${item.weight}`; 
//     // parentMain.appendChild(principalSection);
  
//   parentMain.appendChild(newSeccion);
//   });
//   document.getElementById("athlete").style.display="none"; //para ocultar el primer elmento
// }

//parentMain.appendChild(newSeccion); //devuelves el fragment al final del documento
