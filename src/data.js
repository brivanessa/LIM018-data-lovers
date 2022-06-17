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