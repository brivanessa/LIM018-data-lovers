import data from './data/athletes/athletes.js';
import {filterDataGender} from  "./data.js";
import {filterDataSport} from  "./data.js";
//console.log(sports)
//console.log(data.athletes)

//ALL ATHLETES (NO REPEAT)
const dataRio = data.athletes;
import {noRepeatedData} from "./data.js";
const datos1 = noRepeatedData(dataRio);
const datos3 = noRepeatedData(dataRio);
//console.log(datos1)

//ALL SPORTS (NO REPEAT)

import {noRepeatedSports} from  "./data.js";
const datos2 = noRepeatedSports(dataRio);
//console.log(datos2) // para copiar la data de la consola a sports.js y añadir la imagen a cada deporte (añadir la imagen se hizo manualmente)
import sports from './data/athletes/sports.js';

//ALL GENDER (NO REPEAT)
// const dataFemale=filterDataGender(datos1, "F");
// //console.log(dataFemale)
// const dataMale=filterDataGender(datos1, "M");
// //console.log(dataMale)


//FILTROS GÉNERO


// let genderButton = document.getElementById('selectgender');
// genderButton.addEventListener('change', cambiar);
// function cambiar (datos1){
//  const ss=filterDataGender(datos1,genderButton.value);
//  console.log(ss)
// }
// //let data3=(cambiar(datos1));
// //console.log(data3)


  



// let cambiarOpciones=document.getElementById('selectgender')
// cambiarOpciones.addEventListener('change', () => {
//   const datos5 = filterDataGender(datos1, cambiarOpciones.value);
//   console.log(datos5)
// })

// const genderButton = document.getElementById("selectgender").value;
//  
// const cambiarOpciones=()=>{
//  return genderButton.value;
//  }
//   // function cambiarOpciones() {
//   //   return genderButton.value;
//   //  //console.log(genderButton.value);
//   // }
//console.log(cambiarOpciones);


//ALL SPORTS (NO REPEAT)
const inicioButton = document.getElementById("inicio");
inicioButton.addEventListener('click', () => (window.location.reload()))

    const dataSport = sports.sports;
    const elementMainSport = document.getElementById("sport"); // con el metodo getElementById devuelve una referencia del elemento seccion con id "athletes" (es traido del DOM)
    const parentMainSport = elementMainSport.parentNode; // Obtener una referencia al nodo 
    
    dataSport.forEach((i) => {
      document.getElementById("sport").style.visibility="visible";  //visible para que podamos copiar sus propiades no block porque ocupa todo el espacio en bloque de cada card Athlete
      //Clonar una seccion del DOM y añadirla
      //añade secciones clonadas del elemento seccion athletes
      const newSeccion1 = elementMainSport.cloneNode(true); //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
      newSeccion1.setAttribute("id",'sport_'+i.sport) //para poner un id unico a cada seccion clonada
      parentMainSport.appendChild(newSeccion1); // clonas un documeto y lo devuelves al final 
      newSeccion1.querySelector(".sport-Rio").setAttribute("src",i.ref);
      newSeccion1.querySelector("h2").textContent =i.sport;
      newSeccion1.querySelector(".howManyAthletesSport").textContent = `(XXX) atletas ganaron
       por lo menos una medalla en ${i.sport}.`;
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
        const datosSportAthletes=filterDataSport(datos3,`${i.sport}`);
         //console.log(datosSportAthletes);

        datosSportAthletes.forEach((item) => {
          document.getElementById("athlete").style.visibility="visible";  //visible para que podamos copiar sus propiades no block porque ocupa todo el espacio en bloque de cada card Athlete
          const elementMain1 = document.getElementById("athlete")
          //Clonar una seccion del DOM y añadirla
          //añade secciones clonadas del elemento seccion athletes
          const newSeccion2 = elementMain1.cloneNode(true); //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
          newSeccion2.setAttribute("id",'sport_'+item.name) //le ponemos un nuevo id porque si no lo ponemos cuando se hace clic en allatletes solo carga la plantilla
          divCardsBySports.appendChild(newSeccion2); // clonas un documeto y lo devuelves al final 
          newSeccion2.querySelector(".pais-team").textContent = item.sport;
          newSeccion2.querySelector(".nombre-At").textContent = item.name;
          newSeccion2.querySelector(".sport-team").textContent = `Country: ${item.team}` 
          newSeccion2.querySelector(".nombre-athleteBack").textContent = `${item.name}` 
          newSeccion2.querySelector(".pais-teamBack").textContent = `(${item.team})`
          newSeccion2.querySelector(".gender").textContent = `Gender: ${item.gender}`
          newSeccion2.querySelector(".heigth").textContent = `Height: ${item.height}`
          newSeccion2.querySelector(".weigth").textContent = `Weight: ${item.weight}`
          //parentMain.appendChild(newSeccion);
        });
        //document.getElementById("athlete").style.display="none"; //para ocultar el primer elmento no hidden pq el hidden no lo meustra pero sigue ocupando el espacio  
        document.getElementById("athlete").style.visibility="hidden"; 
      })
    });
    document.getElementById("sport").style.display="none"; //para ocultar el primer elmento no hidden pq el hidden no lo meustra pero sigue ocupando el espacio  
   
    //document.getElementById("athlete").style.visibility="hidden"; 






//ALL ATHLETES (NO REPEAT)

  //Crear nuevo div y para luego añadirlo al elemento main
  const newDiv = document.createElement("div"); // crea un nuevo div
  const newContent = document.createTextNode("El número total de deportistas es:");  // y añade contenido
  const athletesButton = document.getElementById("allAthletes");
  //document.getElementById("athlete").style.visibility="hidden"
  const elementMain = document.getElementById("athlete"); // con el metodo getElementById devuelve una referencia del elemento seccion con id "athletes" (es traido del DOM)
  const parentMain = elementMain.parentNode; // Obtener una referencia al nodo 

  athletesButton.addEventListener('click', () => {
    //window.location.reload()
    document.getElementById("bodyAllSports").style.display="none";
    document.getElementById("bodyCardsBySports").style.display="none";

    // newDiv.appendChild(newContent); //añade texto al div creado.
    // // añade el elemento creado y su contenido al DO
    // parentMain.insertBefore(newDiv, elementMain)
  });

      
  //     datos1.forEach((item) => {
  //     document.getElementById("athlete").style.visibility="visible";  //visible para que podamos copiar sus propiades no block porque ocupa todo el espacio en bloque de cada card Athlete
  //     //Clonar una seccion del DOM y añadirla
  //     //añade secciones clonadas del elemento seccion athletes
  //     const newSeccion = elementMain.cloneNode(true); //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
  //     newSeccion.setAttribute("id",'allath_') //cambiamos de id a cada elemento clonado (xq no deberian tener el mismo id que la plantilla)
  //     parentMain.appendChild(newSeccion); // clonas un documeto y lo devuelves al final 
  //     newSeccion.querySelector(".pais-team").textContent = item.team;
  //     newSeccion.querySelector(".nombre-At").textContent = item.name;
  //     newSeccion.querySelector(".sport-team").textContent = `Sport: ${item.sport}` 
  //     newSeccion.querySelector(".nombre-athleteBack").textContent = `${item.name}` 
  //     newSeccion.querySelector(".pais-teamBack").textContent = `(${item.team})`
  //     newSeccion.querySelector(".gender").textContent = `Gender: ${item.gender}`
  //     newSeccion.querySelector(".heigth").textContent = `Height: ${item.height}`
  //     newSeccion.querySelector(".weigth").textContent = `Weight: ${item.weight}`
  //     //parentMain.appendChild(newSeccion);
  // })

  
       let cambiarOpciones=document.getElementById('selectgender');
       cambiarOpciones.addEventListener('change', () => {
      
        while(!!document.getElementById("allath_")==true){
        const borrar=document.getElementById('allath_');
        borrar.remove() 
      }
      //   const borrar=document.getElementById('allath_');
      // //borrar.parentNode.removeChild(borrar);
      // borrar.remove() 

       let datos5=(filterDataGender(datos1,cambiarOpciones.value));
       //console.log(datos5);
       
       
       datos5.forEach((item) => {

        document.getElementById("athlete").style.visibility="visible";  //visible para que podamos copiar sus propiades no block porque ocupa todo el espacio en bloque de cada card Athlete
        
        //Clonar una seccion del DOM y añadirla
        //añade secciones clonadas del elemento seccion athletes
        const newSeccion = elementMain.cloneNode(true); //clonamos un nodo del DOM (el nodo es de la seccion existente) -TRUE es para clonar los hijos de ese nodo
        newSeccion.setAttribute("id",'allath_');//cambiamos de id a cada elemento clonado (xq no deberian tener el mismo id que la plantilla)
        ///newSeccion.setAttribute("class",'xxxx');
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
       //document.getElementById("athlete").style.display="none";
       })

    //document.getElementById("athlete").style.display="none"; //para ocultar el primer elmento no hidden pq el hidden no lo meustra pero sigue ocupando el espacio  
    //document.getElementById("athlete").style.visibility="hidden"; 

