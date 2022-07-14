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
  filterDataAthlete 
} from  "./data.js";

const dataRio = data.athletes;

//ALL ATHLETES (NO REPEAT)
const noRepeatedAhletes = noRepeatedData(dataRio);

//ALL SPORTS (NO REPEAT)
const listSports = noRepeatedSports(dataRio);

//ALL COUNTRIES (NO REPEAT)
const listCountries = noRepeatedCountry(dataRio);

//FUNCION PARA IMPRIMIR LOS DATOS SIN REPETIR ATLETAS
let newContent;

const newDiv = document.getElementById("infoAthletes"); // traemos la etiqueta p del DOM para el newContent

const elementMain = document.getElementById("templateAthlete").content; // con el metodo getElementById devuelve una referencia del elemento seccion con id "athletes" (es traido del DOM)
const parentMain  = document.getElementById("bodyAllCards"); // Obtener una referencia  del nodo madre

// Función para imprimir los datos visuales en cartas y ser reutilizadas
function imprimirDatos(datos) {
  // Usamos while para que los datos no se impriman más de una vez. Si el listaAthlete existe ("true") en el dom, entonces ocurre el while
  // Con los !! sabemos si el elemento existe o no en el dom
  while(!!document.querySelector(".listaAthlete") == true) {   
    const deleteSection = document.querySelector(".listaAthlete");
    deleteSection.remove();
    newContent.remove();
  }
  let numberSuma = computeStats(datos);
  (numberSuma>0)?(newContent=document.createTextNode(`The total number of athletes is: ${numberSuma} athletes.`)):(newContent=document.createTextNode(``));
  newDiv.appendChild(newContent); //añade texto al div creado.

  return datos.forEach((item) => {        
    //Clonar una seccion del DOM y añadirla
    //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
    // const newSeccion = document.importNode(elementMain, true);
    const newSection = elementMain.cloneNode(true);

    newSection.querySelector(".pais-team").textContent = item.team;
    newSection.querySelector(".nombre-At").textContent = item.name;
    newSection.querySelector(".sport-team").textContent = `Sport: ${item.sport}`;
    newSection.querySelector(".nombre-athleteBack").textContent = `${item.name}`;
    newSection.querySelector(".pais-teamBack").textContent = `(${item.team})`;
    newSection.querySelector(".gender").textContent = `Gender: ${item.gender}`;
    newSection.querySelector(".heigth").textContent = `Height: ${item.height}`;
    newSection.querySelector(".weigth").textContent = `Weight: ${item.weight}`;
    //añade secciones clonadas del elemento seccion athletes
    parentMain.appendChild(newSection);
  })
}

// ALL ATHLETES
// Botón de todos los atletas
const athletesButton = document.getElementById("menuAllAthletes");

athletesButton.addEventListener('click', () => {
  document.getElementById("bodyAllSports").style.display = "none";
  document.getElementById("card_highlights").style.display = "none";
  // se usa block en boddyAllCards para que cuando pasemos de highlights a Athletes aparezcan las cartas
  document.getElementById("bodyAllCards").style.display = "block";
  document.getElementById("selectcontainer").style.display = "flex";
    imprimirDatos(noRepeatedAhletes);
});

// BOTÓN DE REFRESCAR EN EL LOGO
const logoButton = document.getElementById("logo-button");
logoButton.addEventListener('click', () => (window.location.reload()))

//ALL SPORTS (INICIO)
const inicioButton = document.getElementById("menuSports");
inicioButton.addEventListener('click', () => (window.location.reload()))

const dataSport = sports.sports;
const elementMainSport = document.getElementById("listSports");
const parentMainSport = elementMainSport.parentNode; // parentNode solo para lectura, hace referencia al padre del elemento elementMainSports
 
dataSport.forEach((item) => {
  document.getElementById("listSports").style.visibility="visible";  // la hacemos visible porque en CSS está como hidden (porque solo la usaremos como plantilla para clonar)
  const newSectionSports = elementMainSport.cloneNode(true); //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
  newSectionSports.setAttribute("id",'sport_' + item.sport) // para establecer un id (atributo) unico a cada seccion clonada
  parentMainSport.appendChild(newSectionSports); // ubicando al newSectionSports como un nodo descendiente del parentMainSports
  newSectionSports.querySelector(".sport-Rio").setAttribute("src", item.ref); // Para las imágenes de cada deporte
  newSectionSports.querySelector("h2").textContent = item.sport;

  //DataSportAthletes lo usamos en el título para contar los atletas de cada deporte
  const datosAthletesBySports = filterDataSport(noRepeatedAhletes,`${item.sport}`)
  //Filtrado de géneros por cada deporte
  const datosSportAthletesGenderF = filterDataGender(datosAthletesBySports, 'F') 
  const datosSportAthletesGenderM = filterDataGender(datosAthletesBySports, 'M') 
  
  let numberSuma = computeStats(datosAthletesBySports);
  let numberSumaF = computeStats(datosSportAthletesGenderF);
  let numberSumaM = computeStats(datosSportAthletesGenderM);
  let numberPercentF = Math.round(numberSumaF/numberSuma*100);
  let numberPercentM = Math.round(numberSumaM/numberSuma*100);

  newSectionSports.querySelector(".howManyAthletesSport").textContent = `${numberSuma} athletes won at least one medal in ${item.sport}.`;
  newSectionSports.querySelector(".genderAthletesSport").textContent = `${numberPercentF}% (${numberSumaF}) are women and ${numberPercentM}% (${numberSumaM}) are men.`;
  //Of the ${numberSuma} ,
    
  newSectionSports.addEventListener('click', () => {
    document.getElementById("bodyAllSports").style.display="none";
    // const newDiv1 = document.createElement("div"); // crea un nuevo div
    // const divCardsBySports = document.getElementById("bodyCardsBySports");
    // const elementMain1 = document.getElementById("athlete_sport");
    // divCardsBySports.insertBefore(newDiv1, elementMain1); 
      
    //filtrando la data:
    const dataAllAthletesBySport = filterDataSport(dataRio, `${item.sport}`);
       
    //FUNCION PARA IMPRIMIR LOS DATOS CON MEDALLAS Y EVENTOS
    function imprimirDatosAll(datos) {
      newContent = document.createTextNode(`${numberSuma} athletes participated in this discipline.`);  
      newDiv.appendChild(newContent); //añade texto al div creado.

      return datos.forEach((item) => {        
        // const newSeccion = document.importNode(elementMain, true);
        const newSectionAthletesBySport = elementMain.cloneNode(true);

        newSectionAthletesBySport.querySelector(".petRio").setAttribute("src","https://img2.freepng.es/20180410/yke/kisspng-2016-summer-olympics-winter-olympic-games-rio-de-j-rio-5acc7e8e4907e8.9150682715233511822991.jpg");
        newSectionAthletesBySport.querySelector(".pais-team").textContent = item.team;
        newSectionAthletesBySport.querySelector(".nombre-At").textContent = item.name;
        newSectionAthletesBySport.querySelector(".sport-team").textContent = `Sport: ${item.sport}`;
        newSectionAthletesBySport.querySelector(".nombre-athleteBack").textContent = `${item.name}`;
        newSectionAthletesBySport.querySelector(".pais-teamBack").textContent = `(${item.team})`;
        newSectionAthletesBySport.querySelector(".gender").textContent = `Gender: ${item.gender}`;
        newSectionAthletesBySport.querySelector(".heigth").textContent = `Discipline: ${item.event}`;
        newSectionAthletesBySport.querySelector(".weigth").textContent = `Medal: ${item.medal}`;
        parentMain.appendChild(newSectionAthletesBySport);
      })
    }
    imprimirDatosAll(dataAllAthletesBySport);
  })
});
document.getElementById("listSports").style.display="none"; //para ocultar el primer elmento no hidden pq el hidden no lo meustra pero sigue ocupando el espacio  

//SELECT COUNTRIES
const elementMainCountry = document.querySelector(".option-country");
const parentMainCountry = elementMainCountry.parentNode;
listCountries.forEach((item) => {
  const newOption = elementMainCountry.cloneNode(); //clonamos un nodo del DOM (el nodo es de la seccion existente)
  parentMainCountry.appendChild(newOption); // clonas un documeto y lo devuelves al final 
  newOption.setAttribute("value", item);
  newOption.textContent = item;
});

//SELECT SPORTS
const elementMainSports = document.querySelector(".option-sports");
const parentMainSports = elementMainSports.parentNode;

listSports.forEach((item) => {
  const newOption = elementMainSports.cloneNode(true); //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
  parentMainSports.appendChild(newOption); // clonas un documeto y lo devuelves al final 
  newOption.setAttribute("value", item);
  newOption.textContent = item;
});

//FILTRAR Y ORDENAR
const selectGender = document.getElementById('selectgender');
const selectCountries = document.getElementById('select-countries');
const selectSports = document.getElementById('select-sports');
const searchButton = document.getElementById('filterButton');

//FILTRAR
searchButton.addEventListener("click", () => {
  document.getElementById("findAllAthletes").style.visibility = "visible"; // Barra de búsqueda

  let allGender = noRepeatedAhletes;
  (selectGender.value == "All")?(allGender):(allGender = (filterDataGender(noRepeatedAhletes, selectGender.value)));

  let allCountries = allGender;
  (selectCountries.value == "All")?(allCountries):(allCountries = (filterDataCountry(allGender, selectCountries.value)));

  let allSports = allCountries;
  (selectSports.value == "All")?(allSports):(allSports = (filterDataSport(allCountries, selectSports.value)));
  
  imprimirDatos(allSports);
});

// SELECCIONAR ORDEN
let changeSort = document.getElementById('select-order'); // Etiqueta de AZ - ZA
changeSort.addEventListener('change', () => {

  let allGender = noRepeatedAhletes;
  (selectGender.value == "All")?(allGender):(allGender = (filterDataGender(noRepeatedAhletes, selectGender.value)));
  
  let allCountries = allGender;
  (selectCountries.value == "All")?(allCountries):(allCountries = (filterDataCountry(allGender, selectCountries.value)));
 
  let allSports = allCountries;
  (selectSports.value == "All")?(allSports):(allSports = (filterDataSport(allCountries, selectSports.value)));
  
  let allOrder = dataOrder(allSports, "nombre" , changeSort.value);

  imprimirDatos(allOrder);
})

//BARRA DE BUSQUEDA
const findAthlete=document.getElementById('findAthletes');

findAthlete.addEventListener('keyup', (e) => {

  let allGender = noRepeatedAhletes;
  (selectGender.value == "All")?(allGender):(allGender = (filterDataGender(noRepeatedAhletes,selectGender.value)));

  let allCountries = allGender;
  (selectCountries.value == "All")?(allCountries):(allCountries = (filterDataCountry(allGender,selectCountries.value)));

  let allSports = allCountries;
  (selectSports.value == "All")?(allSports):(allSports = (filterDataSport(allCountries,selectSports.value)));

  let findCardsAthletes = findData(allSports, 'name', e.target.value);

  (findCardsAthletes.length === 0?imprimirDatos([]):imprimirDatos(findCardsAthletes));
})

//MEDALLERO
const medalsData = dataMedals(dataRio);

for (let i = 0; i < medalsData.length; i++) {

  let medals = medalsData[i].medal;
  
  for(let j = 0; j < medals.length; j++) {

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
const newDiv3 = document.getElementById("infoHighlights"); // etiqueta P del título de highlights
const menuHighlights = document.getElementById("menuHighlights"); // botón del menu para ir a highlights
const elementHighlights = document.getElementById("templateHighlights").content; // haciéndole referencia a los decendientes del template
const parentHighlights  = document.getElementById("card_highlights"); // Obtener una referencia  del nodo padre para ubicar los clone
const dataHighlights = highlights.highlights; // data de los deportistas highlights (34) y sus imágenes

menuHighlights.addEventListener("click", () => {
  document.getElementById("bodyAllSports").style.display = "none";
  document.getElementById("selectcontainer").style.display = "none";
  document.getElementById("bodyAllCards").style.display = "none";
  document.getElementById("findAllAthletes").style.visibility = "hidden";
  document.getElementById("card_highlights").style.display = "block";

  let newContent2;  

  while(!!document.querySelector(".card-highlights-container") == true){   
    newContent2.remove();
  }
   
  function imprimirHighlights(datos) {
       
    let numberSuma = computeStats(dataHighlights);
    newContent2 = document.createTextNode(`${numberSuma} athletes won at least 2 gold medals.`);
    newDiv3.appendChild(newContent2); // agregándole el contenido a la etiqueta p

    return datos.forEach((item) => {        
      //  const newSeccion = document.importNode(elementHighlights,true); 
      const newSection = elementHighlights.cloneNode(true);

      newSection.querySelector(".highlights-athlete").setAttribute("src", item.ref);
      newSection.querySelector(".highlights-name").textContent = item.athlete;
      let medalsByAthletes = filterDataAthlete(medalsData, `${item.athlete}`);
      
      newSection.querySelector(".highlights-medals").textContent = `Medals: ${medalsByAthletes[0].medal}`; // el index 0 es para ingresar al elemento único dentro del objeto
      parentHighlights.appendChild(newSection);
    })
  }
  imprimirHighlights(dataHighlights);
})