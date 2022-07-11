import data from './data/athletes/athletes.js';
import sports from './data/athletes/sports.js';
import highlights from './data/athletes/highlights.js';
import {
  filterDataGender,
  filterDataSport,
  filterDataCountry,
  dataOrder, 
  computeStats,
  findData,
  noRepeatedData,
  noRepeatedSports,
  noRepeatedCountry,
  dataMedals,
  filterDataAthlete } from  "./data.js";

const dataRio = data.athletes;

//ALL ATHLETES (NO REPEAT)
const noRepeatedAhletes = noRepeatedData(dataRio);

//ALL SPORTS (NO REPEAT)
const listSports = noRepeatedSports(dataRio);

//ALL COUNTRIES (NO REPEAT)
const listCountries = noRepeatedCountry(dataRio);

//FUNCION PARA IMPRIMIR LOS DATOS SIN REPETIR ATLETAS
let newContent

function imprimirDatos(datos) {
  while(!!document.querySelector(".listaAthlete")==true){   
    const borrar=document.querySelector(".listaAthlete");
    borrar.remove() 
    newContent.remove()
  }
  let numberSuma=computeStats(datos);
  (numberSuma>0)?(newContent=document.createTextNode(`The total number of athletes is: ${numberSuma} athletes.`)):(newContent=document.createTextNode(``));
  newDiv.appendChild(newContent); //añade texto al div creado.

  return datos.forEach((item) => {        
    //Clonar una seccion del DOM y añadirla //añade secciones clonadas del elemento seccion athletes
    //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
    const newSeccion = document.importNode(elementMain,true); 
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
const inicioButton = document.getElementById("menuSports");
inicioButton.addEventListener('click', () => (window.location.reload()))

const dataSport = sports.sports;
const elementMainSport = document.getElementById("listSports"); 
console.log(elementMainSport)
const parentMainSport = elementMainSport.parentNode; 
 
dataSport.forEach((i) => {
  document.getElementById("listSports").style.visibility="visible";  //visible para que podamos copiar sus propiades no block porque ocupa todo el espacio en bloque de cada card Athlete
  const newSeccion1 = elementMainSport.cloneNode(true); //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
  newSeccion1.setAttribute("id",'sport_'+i.sport) //para poner un id unico a cada seccion clonada
  parentMainSport.appendChild(newSeccion1); // clonas un documeto y lo devuelves al final 
  newSeccion1.querySelector(".sport-Rio").setAttribute("src",i.ref);
  newSeccion1.querySelector("h2").textContent =i.sport;

  const datosSportAthletes=filterDataSport(noRepeatedAhletes,`${i.sport}`)
  const datosSportAthletesGenderF=filterDataGender(datosSportAthletes,'F') 
  const datosSportAthletesGenderM=filterDataGender(datosSportAthletes,'M') 
  
  let numberSuma=computeStats(datosSportAthletes);
  let numberSumaF=computeStats(datosSportAthletesGenderF);
  let numberSumaM=computeStats(datosSportAthletesGenderM);
  let numberPercentF=Math.round(numberSumaF/numberSuma*100); 
  let numberPercentM=Math.round(numberSumaM/numberSuma*100);

  newSeccion1.querySelector(".howManyAthletesSport").textContent = `${numberSuma} athletes won at least one medal in ${i.sport}.`;
  newSeccion1.querySelector(".genderAthletesSport").textContent = `${numberPercentF}% (${numberSumaF}) are women and ${numberPercentM}% (${numberSumaM}) are men.`;
  //Of the ${numberSuma} ,
    
    newSeccion1.addEventListener('click', () => {
      document.getElementById("bodyAllSports").style.display="none";
      const newDiv1 = document.createElement("div"); // crea un nuevo div
      const divCardsBySports = document.getElementById("bodyCardsBySports");
      const elementMain1 = document.getElementById("athlete_sport"); // con el metodo getElementById devuelve una referencia del elemento seccion con id "athletes" (es traido del DOM)
      divCardsBySports.insertBefore(newDiv1, elementMain1); 
      
      //filtrando la data:
      const datosSportAthletes=filterDataSport(noRepeatedAhletes,`${i.sport}`);
      const datosSportAllAthletes=filterDataSport(dataRio,`${i.sport}`);
       
      //FUNCION PARA IMPRIMIR LOS DATOS CON MEDALLAS Y EVENTOS
      function imprimirDatosAll(datos) {
        while(!!document.querySelector(".listaAthlete")==true){  
          const borrar=document.querySelector(".listaAthlete");
          borrar.remove() 
          newContent.remove()
        }
        let numberSuma=computeStats(datosSportAthletes);
        newContent=document.createTextNode(`${numberSuma} athletes participated in this discipline.`);  
          newDiv.appendChild(newContent); //añade texto al div creado.

        return datos.forEach((item) => {        
         const newSeccion = document.importNode(elementMain,true); 
          newSeccion.querySelector(".petRio").setAttribute("src","https://img2.freepng.es/20180410/yke/kisspng-2016-summer-olympics-winter-olympic-games-rio-de-j-rio-5acc7e8e4907e8.9150682715233511822991.jpg");
          newSeccion.querySelector(".pais-team").textContent = item.team;
          newSeccion.querySelector(".nombre-At").textContent = item.name;
          newSeccion.querySelector(".sport-team").textContent = `Sport: ${item.sport}` 
          newSeccion.querySelector(".nombre-athleteBack").textContent = `${item.name}` 
          newSeccion.querySelector(".pais-teamBack").textContent = `(${item.team})`
          newSeccion.querySelector(".gender").textContent = `Gender: ${item.gender}`
          newSeccion.querySelector(".heigth").textContent = `discipline: ${item.event}`
          newSeccion.querySelector(".weigth").textContent = `Medal: ${item.medal}`
          parentMain.appendChild(newSeccion);
        })
      }
      imprimirDatosAll(datosSportAllAthletes);
    })
  });
document.getElementById("listSports").style.display="none"; //para ocultar el primer elmento no hidden pq el hidden no lo meustra pero sigue ocupando el espacio  

//ALL ATHLETES 
const newDiv = document.getElementById("infoAthletes"); // crea un nuevo div
const athletesButton = document.getElementById("menuAllAthletes");
const elementMain = document.getElementById("templateAthlete").content; // con el metodo getElementById devuelve una referencia del elemento seccion con id "athletes" (es traido del DOM)
const parentMain  = document.getElementById("bodyAllCards"); // Obtener una referencia  del nodo madre

athletesButton.addEventListener('click', () => {
  document.getElementById("bodyAllSports").style.display = "none";
  document.getElementById("card_highlights").style.display = "none";
  document.getElementById("bodyAllCards").style.display = "block";
  document.getElementById("selectcontainer").style.display = "flex";
    imprimirDatos(noRepeatedAhletes);
});

//SELECCIONAR COUNTRIES
const elementMainCountry = document.querySelector(".country");
const parentMainCountry = elementMainCountry.parentNode; 
listCountries.forEach((i) => {
  const newOption = elementMainCountry.cloneNode(true); //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
  parentMainCountry.appendChild(newOption); // clonas un documeto y lo devuelves al final 
  newOption.setAttribute("value", i);
  newOption.textContent = i;
});

//SELECCIONAR SPORTS
const elementMainSports = document.querySelector(".option-sports");
const parentMainSports = elementMainSports.parentNode; 
listSports.forEach((i) => {
  const newOption = elementMainSports.cloneNode(true); //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
  parentMainSports.appendChild(newOption); // clonas un documeto y lo devuelves al final 
  newOption.setAttribute("value", i);
  newOption.textContent = i;
});

//FILTRAR Y ORDENAR
const cambiarOpcion=document.getElementById('selectgender');
const changeCountries=document.getElementById('select-countries');
const changeSports=document.getElementById('select-sports');
const orderFilter=document.getElementById('buttonFiltrarOrder');

//FILTRAR
  orderFilter.addEventListener("click",()=> {
    document.getElementById("findAllAthletes").style.visibility = "visible";

    let allGender=noRepeatedAhletes;
    (cambiarOpcion.value=="All")?(allGender):(allGender=(filterDataGender(noRepeatedAhletes,cambiarOpcion.value)));
    let allCountries=allGender;
    (changeCountries.value=="All")?(allCountries):(allCountries=(filterDataCountry(allGender,changeCountries.value)));
    let allSports=allCountries;
    (changeSports.value=="All")?(allSports):(allSports=(filterDataSport(allCountries,changeSports.value)));
    imprimirDatos(allSports);
  })

// SELECCIONAR ORDEN
let cambiarOrden=document.getElementById('select-order');
cambiarOrden.addEventListener('change', () => {
  let allGender=noRepeatedAhletes;
  (cambiarOpcion.value=="All")?(allGender):(allGender=(filterDataGender(noRepeatedAhletes,cambiarOpcion.value)));
  let allCountries=allGender;
  (changeCountries.value=="All")?(allCountries):(allCountries=(filterDataCountry(allGender,changeCountries.value)));
  let allSports=allCountries;
  (changeSports.value=="All")?(allSports):(allSports=(filterDataSport(allCountries,changeSports.value)));
  let allOrder=dataOrder(allSports,"nombre",cambiarOrden.value);
  imprimirDatos(allOrder);
})

//BARRA DE BUSCAR
const findAthlete=document.getElementById('findAthletes');
findAthlete.addEventListener('keyup', (e) => {
    let allGender=noRepeatedAhletes;
    (cambiarOpcion.value=="All")?(allGender):(allGender=(filterDataGender(noRepeatedAhletes,cambiarOpcion.value)));
    let allCountries=allGender;
    (changeCountries.value=="All")?(allCountries):(allCountries=(filterDataCountry(allGender,changeCountries.value)));
    let allSports=allCountries;
    (changeSports.value=="All")?(allSports):(allSports=(filterDataSport(allCountries,changeSports.value)));
    let findCardsAthletes= findData(allSports,'name',e.target.value);
  (findCardsAthletes.length===0?imprimirDatos([]):imprimirDatos(findCardsAthletes))
})

//MEDALLERO
const medalsData = dataMedals(dataRio);
//const medalsData2 = dataMedals(dataRio);
//console.log(medalsData2);


for (let i = 0; i < medalsData.length; i++) {
  let medals = medalsData[i].medal;
  for(let j = 0; j < medalsData[i].medal.length; j++) {
    let indexMedals = medals[j];
    if (indexMedals=="Bronze"){
      medals[j] = "🥉";
    } else if (indexMedals=="Silver"){
      medals[j] = "🥈";
    } else {
      medals[j] = "🥇";
    }
  }
}


// ALL HIGHLIGHTS
const newDiv3 = document.getElementById("infoHighlights"); // crea un nuevo div
const menuHighlights = document.getElementById("menuHighlights");
const elementHighlights = document.getElementById("templateHighlights").content; // con el metodo getElementById devuelve una referencia del elemento seccion con id "athletes" (es traido del DOM)
const parentHighlights  = document.getElementById("card_highlights"); // Obtener una referencia  del nodo madre
const dataHighlights = highlights.highlights;

menuHighlights.addEventListener("click", () => {
  document.getElementById("bodyAllSports").style.display = "none";
  document.getElementById("selectcontainer").style.display = "none";
  document.getElementById("bodyAllCards").style.display = "none";
  document.getElementById("findAllAthletes").style.visibility = "hidden";
  document.getElementById("card_highlights").style.display = "block";
  let newContent2;  

  while(!!document.querySelector(".card-highlights-container")==true){   
    newContent2.remove();
  }
   
  function imprimirHighlights(datos) {
       
    let numberSuma=computeStats(dataHighlights);
    newContent2=document.createTextNode(`${numberSuma} athletes won at least 2 gold medals.`);
    newDiv3.appendChild(newContent2); //añade texto al div creado.

    return datos.forEach((item) => {        
     const newSeccion = document.importNode(elementHighlights,true); 
      newSeccion.querySelector(".highlights-athlete").setAttribute("src",item.ref);
      newSeccion.querySelector(".highlights-name").textContent = item.athlete;
      let medalsByAthletes=filterDataAthlete(medalsData,`${item.athlete}`);
      newSeccion.querySelector(".highlights-medals").textContent = `Medals: ${medalsByAthletes[0].medal}`;
      parentHighlights.appendChild(newSeccion);
    })
  }
  imprimirHighlights(dataHighlights);
})
