import data from './data/athletes/athletes.js';
import sports from './data/athletes/sports.js';
import {
  filterDataGender,
  filterDataSport,
  filterDataCountry} from  "./data.js";


const dataRio = data.athletes;
//ALL ATHLETES (NO REPEAT)
import {noRepeatedData} from "./data.js";
const noRepeatedAhletes = noRepeatedData(dataRio);
//console.log(noRepeatedAhletes)

//ALL SPORTS (NO REPEAT)
import {noRepeatedSports} from  "./data.js";
const listSports = noRepeatedSports(dataRio);
//console.log(listSports) // para copiar la data de la consola a sports.js y añadir la imagen a cada deporte (añadir la imagen se hizo manualmente)

//ALL COUNTRIES (NO REPEAT)
import {noRepeatedCountry} from  "./data.js";
const listCountries = noRepeatedCountry(dataRio);
//console.log("aqui ",dataRio)
//console.log("list countries",listCountries) 

// let orderAZ = document.getElementById("select-order");
// let order = orderAZ.value;

// orderAZ.addEventListener('change', () => {
//   (orderAZ.value == "a<b")?"a<b":"a>b";
//   return orderAZ.value;
// })
// console.log(orderAZ.value)

//FUNCION PARA IMPRIMIR LOS DATOS
function imprimirDatos(datos) {
  while(!!document.querySelector(".listaAthlete")==true){   // https://www.delftstack.com/es/howto/javascript/javascript-check-element-exists-in-dom/
    const borrar=document.querySelector(".listaAthlete");
    borrar.remove() 
  }

  // datos.sort(function (a,b){
  //   (order == a < b)?-1:1;
  // })

  return datos.forEach((item) => {        
        //Clonar una seccion del DOM y añadirla //añade secciones clonadas del elemento seccion athletes
        //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
    const newSeccion = document.importNode(elementMain,true); // https://developer.mozilla.org/es/docs/Web/HTML/Element/template
        //parentMain.appendChild(newSeccion); // clonas un documeto y lo devuelves al final 
    newSeccion.querySelector(".pais-team").textContent = item.team;
    newSeccion.querySelector(".nombre-At").textContent = item.name;
    newSeccion.querySelector(".sport-team").textContent = `Sport: ${item.sport}` 
    newSeccion.querySelector(".nombre-athleteBack").textContent = `${item.name}` 
    newSeccion.querySelector(".pais-teamBack").textContent = `(${item.team})`
    newSeccion.querySelector(".gender").textContent = `Gender: ${item.gender}`
    newSeccion.querySelector(".heigth").textContent = `Height: ${item.height}`
    newSeccion.querySelector(".weigth").textContent = `Weight: ${item.weight}`
    parentMain.appendChild(newSeccion);
  })
}

//ALL SPORTS (INICIO)
  const inicioButton = document.getElementById("inicio");
  inicioButton.addEventListener('click', () => (window.location.reload()))

  const dataSport = sports.sports;
  const elementMainSport = document.getElementById("sport"); 
  const parentMainSport = elementMainSport.parentNode; 
    
  dataSport.forEach((i) => {
    document.getElementById("sport").style.visibility="visible";  //visible para que podamos copiar sus propiades no block porque ocupa todo el espacio en bloque de cada card Athlete
      //Clonar una seccion del DOM y añadirla
      //añade secciones clonadas del elemento seccion athletes
    const newSeccion1 = elementMainSport.cloneNode(true); //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
    newSeccion1.setAttribute("id",'sport_'+i.sport) //para poner un id unico a cada seccion clonada
    parentMainSport.appendChild(newSeccion1); // clonas un documeto y lo devuelves al final 
    newSeccion1.querySelector(".sport-Rio").setAttribute("src",i.ref);
    newSeccion1.querySelector("h2").textContent =i.sport;
    newSeccion1.querySelector(".howManyAthletesSport").textContent = `(XXX) atletas ganaron por lo menos una medalla en ${i.sport}.`;
    newSeccion1.querySelector(".genderAthletesSport").textContent = `De los (XXX) el 55% son mujeres y (45%) son hombres.`;
    
    newSeccion1.addEventListener('click', () => {
      document.getElementById("bodyAllSports").style.display="none";
      const newDiv1 = document.createElement("div"); // crea un nuevo div
      const newContent1 = document.createTextNode("El número total de deportistas es:");  // y añade contenido
      const divCardsBySports = document.getElementById("bodyCardsBySports");
      newDiv1.appendChild(newContent1); //añade texto al div creado.
        // añade el elemento creado y su contenido al DOM
      const elementMain1 = document.getElementById("athlete_sport"); // con el metodo getElementById devuelve una referencia del elemento seccion con id "athletes" (es traido del DOM)
      divCardsBySports.insertBefore(newDiv1, elementMain1); 
        //filtrando la data:
      const datosSportAthletes=filterDataSport(noRepeatedAhletes,`${i.sport}`);
         //console.log(datosSportAthletes);
        imprimirDatos(datosSportAthletes);
    })
  });
  document.getElementById("sport").style.display="none"; //para ocultar el primer elmento no hidden pq el hidden no lo meustra pero sigue ocupando el espacio  

//ALL ATHLETES 
  //Crear nuevo div y para luego añadirlo al elemento main
  const newDiv = document.createElement("div"); // crea un nuevo div
  const newContent = document.createTextNode("El número total de deportistas es:");  // y añade contenido
  const athletesButton = document.getElementById("allAthletes");
  const elementMain = document.getElementById("templateAthlete").content; // con el metodo getElementById devuelve una referencia del elemento seccion con id "athletes" (es traido del DOM)
  const parentMain  = document.getElementById("bodyAllCards"); // Obtener una referencia  del nodo madre
 
  athletesButton.addEventListener('click', () => {
    document.getElementById("bodyAllSports").style.display="none";
    document.getElementById("bodyCardsBySports").style.display="none";
    newDiv.appendChild(newContent); //añade texto al div creado.
    parentMain.appendChild(newDiv) // añade el elemento creado y su contenido al DOM
    imprimirDatos(noRepeatedAhletes);
  });
//SELECCIONAR GENDER
  let cambiarOpcion=document.getElementById('selectgender');
  cambiarOpcion.addEventListener('change', () => {
    newDiv.appendChild(newContent); //añade texto al div creado.
    parentMain.appendChild(newDiv) // añade el elemento creado y su contenido al DOM
  
    let allGender=noRepeatedAhletes;
    (cambiarOpcion.value=="All")?(allGender):(allGender=(filterDataGender(noRepeatedAhletes,cambiarOpcion.value)));
    imprimirDatos( allGender);
    //console.log(allGender);
  })

//SELECCIONAR COUNTRIES
//const dataCountries = listCountries.team;
const elementMainCountry = document.querySelector(".country");
//const parentMainCountry = document.getElementById("select-countries"); es lo mismo que hacer la línea 115
const parentMainCountry = elementMainCountry.parentNode; 
listCountries.forEach((i) => {
  //console.log(i);
  const newOption = elementMainCountry.cloneNode(true); //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
  parentMainCountry.appendChild(newOption); // clonas un documeto y lo devuelves al final 
  newOption.setAttribute("value", i);
  newOption.textContent = i;
  //return newOption.content;
});

let changeCountries=document.getElementById('select-countries');
changeCountries.addEventListener('change', () => {
  newDiv.appendChild(newContent); 
  parentMain.appendChild(newDiv);
  let allCountries=noRepeatedAhletes; //lo reasignamos a un let para que pueda cambiar de países y no solo lo haga una vez
  (changeCountries.value=="All")?(allCountries):(allCountries=(filterDataCountry(noRepeatedAhletes,changeCountries.value)));
  //console.log(changeCountries.value);
  imprimirDatos(allCountries);
})

//SELECCIONAR SPORTS
//const dataCountries = listCountries.team;
const elementMainSports = document.querySelector(".option-sports");
//const parentMainCountry = document.getElementById("select-countries"); es lo mismo que hacer la línea 115
const parentMainSports = elementMainSports.parentNode; 
listSports.forEach((i) => {
  const newOption = elementMainSports.cloneNode(true); //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
  parentMainSports.appendChild(newOption); // clonas un documeto y lo devuelves al final 
  newOption.setAttribute("value", i);
  newOption.textContent = i;
  //return newOption.content;
});

let changeSports=document.getElementById('select-sports');
changeSports.addEventListener('change', () => {
  newDiv.appendChild(newContent); 
  parentMain.appendChild(newDiv);
  let allSports=noRepeatedAhletes; //lo reasignamos a un let para que pueda cambiar de países y no solo lo haga una vez
  (changeSports.value=="All")?(allSports):(allSports=(filterDataSport(noRepeatedAhletes,changeSports.value)));
  //console.log(changeSports.value);
  imprimirDatos(allSports);
})