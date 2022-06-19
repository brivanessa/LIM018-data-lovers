import data from './data/athletes/athletes.js';
import {filterData} from './data.js';
import {newDataNoRepeat} from './data.js';
//import {noRepeat2} from './data.js';
// import { getItemDescriptor } from '@babel/core/lib/config/item';
//  console.log(data);

const datos =data.athletes;
//console.log(datos);

const dataNoRepeat=newDataNoRepeat(datos);
//console.log(dataNoRepeat)

const dataFemale=filterData(dataNoRepeat, "F");
//console.log(dataFemale)

const dataMale=filterData(dataNoRepeat, "M");
console.log(dataMale)

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










import data from './data/athletes/athletes.js';
//const data1=data;

//const addElement =() =>{
    //console.log(data);
    const fragment=document.createDocumentFragment();
    //Crear nuevo div y añadirlo al elemento main
    const newDiv = document.createElement("div"); // crea un nuevo div
    const newContent = document.createTextNode("El número total de deportistas es:");  // y añade contenido
    newDiv.appendChild(newContent); //añade texto al div creado.
    // añade el elemento creado y su contenido al DOM
    const elementMain = document.getElementById("athletes"); // con el metodo getElementById devuelve una referencia del elemento seccion con id "athletes" (es traido del DOM)
    const parentMain = elementMain.parentNode; // Obtener una referencia al nodo 
    parentMain.insertBefore(newDiv, elementMain); // 
    
    data.athletes.forEach((item) => {
        //Clonar una seccion del DOM y añadirla
        //añade secciones clonadas del elemento seccion athletes
        const newSeccion = elementMain.cloneNode(true); //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
        //parentMain.appendChild(newSeccion); // clonas un documeto y lo devuelves al final 
        //console.log(item)
        newSeccion.querySelector("h4").textContent = item.team;
        newSeccion.querySelector("h5").textContent = item.name;
        fragment.appendChild(newSeccion);  
          
    });
    document.getElementById("athletes").style.display="none"; //para ocultar el primer elmento
    parentMain.appendChild(fragment); //devuelves el fragment al final del documento   
//}

//window.addEventListener('load', addElement); 
//window.addEventListener('load', addElement()) // es lo msimo
//window.addEventListener('load', function() {addElement()});  // es lo mismo y sirve mas para para agregar parametros/argumentos
//document.body.onload = addElement; // es lo mismo