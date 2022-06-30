// NO REPETIR DATOS

export function noRepeatedData(datos){
  //const data = [...datos] //spread sintax  clona escalares (shallow copy) primitivos de primer nivel se copian pero no estructuras como funciones o objetos / estos se copian como referencia
  const data=JSON.parse(JSON.stringify(datos)) //no clona el prototipo pero si funciones y objetos 
  data.forEach(item => {
    delete item.medal;
    delete item.event;
  })
  const dataObjectText =  new Set(data.map(JSON.stringify)); //con el new set hacemos que no se repitan y con el JSONstringify convertimos el objeto en string
  const dataUniqueObject =Array.from(dataObjectText).map(JSON.parse); //convertimos el objeto en un array y JSONparse los string en objetos
  return dataUniqueObject;
}

export function noRepeatedSports(datos){
  //const sports = [...datos]
  const sports = JSON.parse(JSON.stringify(datos));
  sports.map(item => {
      delete item.name;
      delete item.gender;
      delete item.height;
      delete item.weight;
      delete item.team;
      delete item.noc;
      delete item.age;
      delete item.event;
      delete item.medal
    })
  const dataObjectText = new Set(sports.map(JSON.stringify));
  //console.log(sports.map(JSON.stringify));
  const dataUniqueObject = Array.from(dataObjectText).map(JSON.parse);
  return dataUniqueObject;
}

export function noRepeatedCountry(country){
  //const country = [...datos]
  //const country=JSON.parse(JSON.stringify(datos))
  country.map(function(object) {
    delete object.name;
    delete object.gender;
    delete object.height;
    delete object.weight;
    delete object.sport;
    delete object.team;
    delete object.age;
    delete object.event;
    delete object.medal;
  })
  //console.log(country)
  const dataObjectText = new Set(country.map(JSON.stringify)); 
  const dataUniqueObject = Array.from(dataObjectText).map(JSON.parse);
  return dataUniqueObject;
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
  const dataSort = JSON.parse(JSON.stringify(data));
  //let arrayOrder = [...data];
  console.log(dataSort);
     if(sortBy === 'name' && sortOrder === 'asc'){
        return dataSort.sort((a,b)=> a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
      }else if(sortBy==='name' && sortOrder === 'desc'){
        return dataSort.sort((a,b)=> a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1);
      }else if(sortBy === 'weaknesses' && sortOrder === 'asc'){
        return dataSort.sort((a, b)=> a.weaknesses.length - b.weaknesses.length)
      }else if(sortBy==='weaknesses' && sortOrder === 'desc'){
        return  dataSort.sort((a, b)=> b.weaknesses.length - a.weaknesses.length)
      }
      return data;
  //data.sort((a, b) => a.sortBy.localeCompare(b.sortBy));
  //data.sort((a, b) => -1 * a.sortBy.localeCompare(b.sortBy));
}