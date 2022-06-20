import data from './data/athletes/athletes.js';
console.log(sports)
//console.log(data.athletes)

//ALL ATHLETES (NO REPEAT)

const dataRio = data.athletes;
import {noRepeatedData} from "./data.js";
const datos1 = noRepeatedData(dataRio);
//console.log(datos1)

//ALL SPORTS (NO REPEAT)

import {noRepeatedSports} from  "./data.js";
const datos2 = [noRepeatedSports(dataRio)];
console.log(datos2) // para copiar la data de la consola a sports.js y añadir la imagen a cada deporte (añadir la imagen se hizo manualmente)
import sports from './data/athletes/sports.js';

//MENU
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

//ALL SPORTS (NO REPEAT)
  const dataSport = sports.sports;
    const elementMainSport = document.getElementById("sport"); // con el metodo getElementById devuelve una referencia del elemento seccion con id "athletes" (es traido del DOM)
    const parentMainSport = elementMainSport.parentNode; // Obtener una referencia al nodo 
    console.log(dataSport[0])
    dataSport.forEach((i) => {
      document.getElementById("sport").style.visibility="visible";  //visible para que podamos copiar sus propiades no block porque ocupa todo el espacio en bloque de cada card Athlete
      //Clonar una seccion del DOM y añadirla
      //añade secciones clonadas del elemento seccion athletes
      const newSeccion1 = elementMainSport.cloneNode(true); //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
      parentMainSport.appendChild(newSeccion1); // clonas un documeto y lo devuelves al final 
      newSeccion1.querySelector(".sport-Rio").setAttribute("src",i.ref);
      newSeccion1.querySelector("h2").textContent =i.sport;
      newSeccion1.querySelector(".howManyAthletesSport").textContent = `(XXX) atletas ganaron
       por lo menos una medalla en ${i.sport}.`;
      newSeccion1.querySelector(".genderAthletesSport").textContent = `De los (XXX) el 55% son mujeres y (45%) son hombres.`;
      //parentMain.appendChild(newSeccion);
    });
    document.getElementById("sport").style.display="none"; //para ocultar el primer elmento no hidden pq el hidden no lo meustra pero sigue ocupando el espacio  
    //document.getElementById("athlete").style.visibility="hidden"; 






//ALL ATHLETES (NO REPEAT)

  //Crear nuevo div y para luego añadirlo al elemento main
  const newDiv = document.createElement("div"); // crea un nuevo div
  const newContent = document.createTextNode("El número total de deportistas es:");  // y añade contenido


  const athletesButton = document.getElementById("allAthletes");

  athletesButton.addEventListener('click', () => {
    document.getElementById("bodyAllSports").style.display="none";

    newDiv.appendChild(newContent); //añade texto al div creado.
    // añade el elemento creado y su contenido al DOM
    const elementMain = document.getElementById("athlete"); // con el metodo getElementById devuelve una referencia del elemento seccion con id "athletes" (es traido del DOM)
    const parentMain = elementMain.parentNode; // Obtener una referencia al nodo 
    parentMain.insertBefore(newDiv, elementMain); 

    datos1.forEach((item) => {
      document.getElementById("athlete").style.visibility="visible";  //visible para que podamos copiar sus propiades no block porque ocupa todo el espacio en bloque de cada card Athlete
      //Clonar una seccion del DOM y añadirla
      //añade secciones clonadas del elemento seccion athletes
      const newSeccion = elementMain.cloneNode(true); //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
      parentMain.appendChild(newSeccion); // clonas un documeto y lo devuelves al final 
      newSeccion.querySelector(".pais-team").textContent = item.team;
      newSeccion.querySelector(".nombre-At").textContent = item.name;
      newSeccion.querySelector(".sport-team").textContent = `Sport: ${item.sport}` 
      newSeccion.querySelector(".nombre-athleteBack").textContent = `${item.name}` 
      newSeccion.querySelector(".pais-teamBack").textContent = `(${item.team})`
      newSeccion.querySelector(".gender").textContent = `Gender: ${item.gender}`
      newSeccion.querySelector(".heigth").textContent = `Height: ${item.height}`
      newSeccion.querySelector(".weigth").textContent = `Weight: ${item.weight}`
      //parentMain.appendChild(newSeccion);
    });
    document.getElementById("athlete").style.display="none"; //para ocultar el primer elmento no hidden pq el hidden no lo meustra pero sigue ocupando el espacio  
    //document.getElementById("athlete").style.visibility="hidden"; 
  })