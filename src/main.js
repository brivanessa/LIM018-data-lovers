// import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/athletes/athletes.js';
//const data1=data;

//const addElement =() =>{
    //console.log(data);
    const fragment=document.createDocumentFragment();
    //Crear nuevo div y añadirlo al elemento main
    const newDiv = document.createElement("div"); // crea un nuevo div
    const newContent = document.createTextNode("El numero total de deportistas es:");  // y añade contenido
    newDiv.appendChild(newContent); //añade texto al div creado.
    // añade el elemento creado y su contenido al DOM
    const elementMain1 = document.getElementById("athletes"); // con el metodo getElementById devuelve una referencia del elemento seccion con id "athletes" (es traido del DOM)
    const parentMain = elementMain1.parentNode; // Obtener una referencia al nodo padre
    parentMain.insertBefore(newDiv, elementMain1); // 
    
    data.athletes.forEach((item) => {
        const elementMain = document.getElementById("athletes"); // con el metodo getElementById devuelve una referencia del elemento seccion con id "athletes" (es traido del DOM)
        //Clonar una seccion del DOM y añadirla
        //añade secciones clonadas del elemento seccion athletes
        const newSeccion = elementMain.cloneNode(true); //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
        //parentMain.appendChild(newSeccion); // clonas un documeto y lo devuelves al final 
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