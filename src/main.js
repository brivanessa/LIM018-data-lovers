//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/athletes/athletes.js';
console.log(data);
//console.log(example, data);


//window.addEventListener('load', addElement()) // es lo msimo
//window.addEventListener('load', function() {addElement()});  // es lo mismo y sirve mas para para agregar parametros/argumentos
//document.body.onload = addElement; // es lo mismo

const addElement =(data) =>{
    const fragment=document.createDocumentFragment();
    //Crear nuevo div y añadirlo al elemento main
    let newDiv = document.createElement("div"); // crea un nuevo div
    let newContent = document.createTextNode("El numero total de deportistas es:");  // y añade contenido
    newDiv.appendChild(newContent); //añade texto al div creado.
    // añade el elemento creado y su contenido al DOM
    let elementMain = document.getElementById("athletes"); // con el metodo getElementById devuelve una referencia del elemento seccion con id "athletes" (es traido del DOM)
    let parentMain = elementMain.parentNode; // Obtener una referencia al nodo padre
    parentMain.insertBefore(newDiv, elementMain); // 
  
    data.athletes.forEach((item) => {
        //Clonar una seccion del DOM y añadirla
        //añade secciones clonadas del elemento seccion athletes
        let newSeccion = elementMain.cloneNode(true); //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
        //parentMain.appendChild(newSeccion); // clonas un documeto y lo devuelves al final 
        newSeccion.querySelector(h4).textContent=item.team;
        fragment.appendChild(newSeccion);
        
    });
    parentMain.appendChild(fragment); //devuelves el fragment al final del documento
}

window.addEventListener('load', addElement); 