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

    const fragment=document.createDocumentFragment();
    //Crear nuevo div y añadirlo al elemento main
    const newDiv = document.createElement("div"); // crea un nuevo div
    const newContent = document.createTextNode("El número total de deportistas es:");  // y añade contenido
    newDiv.appendChild(newContent); //añade texto al div creado.
    // añade el elemento creado y su contenido al DOM
    const elementMain = document.getElementById("athlete"); // con el metodo getElementById devuelve una referencia del elemento seccion con id "athletes" (es traido del DOM)
    const parentMain = elementMain.parentNode; // Obtener una referencia al nodo 
    parentMain.insertBefore(newDiv, elementMain); 
    
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
    document.getElementById("athlete").style.display="none"; //para ocultar el primer elmento
    parentMain.appendChild(fragment); //devuelves el fragment al final del documento   
