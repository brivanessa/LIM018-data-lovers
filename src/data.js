// NO REPETIR DATOS

export function noRepeatedData(datos){
  const data = datos.map(item => {
    // eslint-disable-next-line no-unused-vars
    const {medal, event,...dataWithout} = item; // investigar destructuración desestructuración (fares)
    return dataWithout;
  })
  const dataObjectText =  new Set(data.map(JSON.stringify)); //con el new set hacemos que no se repitan y con el JSONstringify convertimos el objeto en strin
  const dataUniqueObject = Array.from(dataObjectText).map(JSON.parse); //convertimos el objeto en un array y JSONparse los string en objetos
  return dataUniqueObject;
}

export function noRepeatedSports(datos){
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

export function noRepeatedCountry(data){
  
  const dataCountries = data.map(item => {
    return item.noc;
  })
  //console.log(country)
  const dataCountryUnique = Array.from(new Set(dataCountries));
  return dataCountryUnique;
}

//FILTROS
export function filterDataGender(data,condition) {
  return data.filter ((item)=>(item.gender===condition))
}

export function filterDataSport(data,condition) {
  return data.filter ((item)=>(item.sport===condition))
}

export function filterDataCountry(data,condition) {
  return data.filter ((item)=>(item.noc===condition))
}

// ORDENAR
export function dataOrder(data, sortBy, sortOrder) {
//let data3=[...data] 
//const data4=[...data] 
const data3=JSON.parse(JSON.stringify(data))
const data4=JSON.parse(JSON.stringify(data))
switch(sortOrder)  {
  case 'A-Z':
    while ((sortBy=="nombre")) {
        data3.sort((a,b)=>{
        const nameA=a.name.toLowerCase();
        const nameB=b.name.toLowerCase();
        if (nameA<nameB){
          return -1;
        } else if (nameA>nameB){
          return 1;
        }else {
          return 0;
        }  
      })
      return data3;
    }
  break;

  case 'Z-A':
    while ((sortBy=="nombre")) {
      data4.sort((a,b)=>{
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
      return data4;
    }
  break;
}
}
  //sortBy = item.name;

  // if (sortOrder == "a<b") {
  //   data.sort((a, b) => a.name.localeCompare(b.name));
  // }
  // else {
  //   data.sort((a, b) => -1 * a.name.localeCompare(b.name));
  // }
  // return data;

  //data.sort((a, b) => a.sortBy.localeCompare(b.sortBy));
  //data.sort((a, b) => -1 * a.sortBy.localeCompare(b.sortBy));
//}