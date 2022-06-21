// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

export function noRepeatedData(datos){
  datos.map(function(object) {
    delete object.medal;
    delete object.event;
  })
  const dataObjectText = new Set(datos.map(JSON.stringify));
  const dataUniqueObject = Array.from(dataObjectText).map(JSON.parse);
  return dataUniqueObject;
}

export function noRepeatedSports(datos){
  datos.map(function(object) {
    delete object.name;
    delete object.gender;
    delete object.height;
    delete object.weight;
    delete object.team;
    delete object.noc;
    delete object.age;
    delete object.event;
    delete object.medal;
  })
  const dataObjectText = new Set(datos.map(JSON.stringify));
  const dataUniqueObject = Array.from(dataObjectText).map(JSON.parse);
  return dataUniqueObject;
}

export function filterDataGender(data,condition) {
  return data.filter ((item)=>(item.gender===condition))
}

export function filterDataSport(data,condition) {
  return data.filter ((item)=>(item.sport===condition))
}
