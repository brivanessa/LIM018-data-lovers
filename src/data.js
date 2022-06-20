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

// export function noRepeatedAthletism(data){
//   const athletism = data.map(item, () => {
//     delete item.medal;
//     delete item.event;
//     delete item.gender;
//     delete item.name;
//     delete item.height;
//     delete item.weight;
//     delete item.team;
//     delete item.age;
//     delete item.noc;
//   })

//   console.log(athletism);
// }