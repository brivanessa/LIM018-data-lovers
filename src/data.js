// NO REPETIR DATOS
export function noRepeatedData(datos) {
  const data = datos.map(item => {
    // eslint-disable-next-line no-unused-vars
    const {medal, event,...dataWithout} = item; // investigar desestructuración (fares)
    return dataWithout;
  })
  const dataObjectText =  new Set(data.map(JSON.stringify)); //con el new set hacemos que no se repitan y con el JSONstringify convertimos el objeto en strin
  const dataUniqueObject = Array.from(dataObjectText).map(JSON.parse); //convertimos el objeto en un array y JSONparse los string en objetos
  return dataUniqueObject;
}
// DEPORTES NO REPETIDOS
export function noRepeatedSports(datos) {
  const dataSports = datos.map(item => {
    return item.sport;
  })
  const dataSportUnique = Array.from(new Set(dataSports)); // OJO. No estamos convirtiendo el set en array
  //console.log(dataSportUnique);
  // const dataSportUnique = dataSports.filter((item, index) => {
  //   return dataSports.indexOf(item) === index;
  // })
  return dataSportUnique;
}
// PAÍSES NO REPETIDOS
export function noRepeatedCountry(data) {
  const dataCountries = data.map(item => {
    return item.noc;
  })
  const dataCountryUnique = Array.from(new Set(dataCountries));
  return dataCountryUnique;
}

//FILTROS
export function filterDataGender(data, condition) {
  return data.filter ((item) => (item.gender === condition));
}

export function filterDataSport(data, condition) {
  return data.filter ((item) => (item.sport === condition));
}

export function filterDataCountry(data,condition) {
  return data.filter ((item) => (item.noc === condition))
}

//COMPUTE STAT
export function computeStats(data) {
  let numberAthletes=data.length;
  return numberAthletes
}


// ORDENAR
export function dataOrder(data, sortBy, sortOrder) {

  const dataSort = JSON.parse(JSON.stringify(data));
  //const data4=JSON.parse(JSON.stringify(data));
  switch(sortOrder) {
    case 'A-Z':
    while (sortBy == "nombre") {
      dataSort.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
          
        if (nameA < nameB){
          return -1;
        } else if (nameA > nameB){
          return 1;
        }else {
          return 0;
        }  
      })
      return dataSort;
    }
    break;

    case 'Z-A':
    while ((sortBy=="nombre")) {
      dataSort.sort((a,b)=>{
        const nameA=a.name.toLowerCase();
        const nameB=b.name.toLowerCase();
        if (nameA<nameB){
          return 1;
        } else if (nameA>nameB){
          return -1;
        }else {
          return 0;
        }  
      })
      return dataSort;
    }
    break;
  }
}

//BUSCAR
export function findData(data, propiedad, letras) {
  return data.filter ((item) => (item[propiedad].toUpperCase().includes(letras.toUpperCase())));
}

//MEDALLERO

export function dataMedals(data) { 
  const newData = [...new Set(data.map((item) => item.name))].map((name) => {
    return { name, 
      medal: data.filter((item) => item.name === name).map((item) => item.medal),
      //con el filter guardamos en nuevos arrays todos los nombres que se repiten
      //con el map guardamos en un array las medallas por cada atleta
    };
  });
  return newData;
}