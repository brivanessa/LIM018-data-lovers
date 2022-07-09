import data from './data/athletes/athletes.js';
import sports from './data/athletes/sports.js';
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
  dataMedals} from  "./data.js";

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
  (numberSuma>0)?(newContent=document.createTextNode(`El número total de deportistas es: ${numberSuma} atletas`)):(newContent=document.createTextNode(``));
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
document.getElementById("selectcontainer").style.display="none"; // Para desaparecer los filtros de la página principal
document.getElementById("findAllAthletes").style.visibility = "hidden";
const inicioButton = document.getElementById("inicio");
inicioButton.addEventListener('click', () => (window.location.reload()))

const dataSport = sports.sports;
const elementMainSport = document.getElementById("sport"); 
const parentMainSport = elementMainSport.parentNode; 
 
dataSport.forEach((i) => {
  document.getElementById("sport").style.visibility="visible";  //visible para que podamos copiar sus propiades no block porque ocupa todo el espacio en bloque de cada card Athlete
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

  newSeccion1.querySelector(".howManyAthletesSport").textContent = `${numberSuma} atletas ganaron por lo menos una medalla en ${i.sport}.`;
  newSeccion1.querySelector(".genderAthletesSport").textContent = `De los ${numberSuma}  el ${numberPercentF}% (${numberSumaF}) son mujeres y ${numberPercentM}% (${numberSumaM}) son hombres.`;
    
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
        newContent=document.createTextNode(`${numberSuma} atletas participaron en esta disciplina`);  
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
document.getElementById("sport").style.display="none"; //para ocultar el primer elmento no hidden pq el hidden no lo meustra pero sigue ocupando el espacio  

//ALL ATHLETES 
  const newDiv = document.getElementById("infoAthletes"); // crea un nuevo div
  //  = document.createTextNode("El número total de deportistas es:");  // y añade contenido
const athletesButton = document.getElementById("allAthletes");
const elementMain = document.getElementById("templateAthlete").content; // con el metodo getElementById devuelve una referencia del elemento seccion con id "athletes" (es traido del DOM)
const parentMain  = document.getElementById("bodyAllCards"); // Obtener una referencia  del nodo madre
 
athletesButton.addEventListener('click', () => {
  document.getElementById("bodyAllSports").style.display = "none";
  document.getElementById("bodyCardsBySports").style.display = "none";
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

const medals = dataMedals(dataRio);
console.log(medals);

// const reducedJson = dataRio.reduce((prev, cur) => {
  
//   prev[cur.name] = (prev[cur.name] || 0) + 1;
//   prev[cur.medal] = (prev[cur.medal] || 0) + 1;

//   return prev;
// }, {});
//console.log(reducedJson);

// Hacemos un spread operator
// const newData = [...new Set(dataRio.map((athlete) => athlete.name))].map((name) => {
//     return { name, 
//       medal: dataRio.filter((athlete) => athlete.name === name).map((athlete) => athlete.medal),
//       //con el filter guardamos en nuevos arrays todos los nombres que se repiten
//       //con el map guardamos en un array las medallas por cada atleta
//     };
//   }
// );
// console.log(newData)



// const medalistAthletes = repeatedAthletes(dataRio);
// // console.log(medalistAthletes);
// // let medalistAthletesItem=filterDataAthlete(dataRio,medalistAthletes[109])
// //console.log(medalistAthletesItem)
// let medallas = []; 
// for(let i = 0; i < medalistAthletes.length; i++){ 
//   let medalistAthletesItem = filterDataAthlete(dataRio,medalistAthletes[i]);
//   let gold=0;
//   let silver=0;
//   let bronze=0;
//   let athletes=medalistAthletesItem[0].name;
//   for(let i = 0; i < medalistAthletesItem.length; i++){
//     if(medalistAthletesItem[i].medal=="Gold"){
//     (gold=gold+1);
//     } else if (medalistAthletesItem[i].medal=="Silver"){
//     (silver=silver+1);
//     } else {bronze=bronze+1}
//   } 
//   let total=gold+silver+bronze;
//   medallas.push({ athlete:athletes, total:total, gold:gold, silver:silver, bronze:bronze});  
// }

// console.log(medallas);
// //const medallas2=dataOrder(medallas, "nombre", 'A-Z')
// // medallas.sort((a,b)=>{
// //   return(b.total-a.total)  
// // })
// // console.log(medallas);

