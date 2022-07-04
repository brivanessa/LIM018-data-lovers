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

export function noRepeatedSports(datos) {
  const dataSports = datos.map(item => {
    return item.sport;
  })
  const dataSportUnique = Array.from(new Set(dataSports));
  console.log(dataSportUnique);
  // const dataSportUnique = dataSports.filter((item, index) => {
  //   return dataSports.indexOf(item) === index;
  // })
  return dataSportUnique;
}

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

export function filterDataCountry(data, condition) {
  return data.filter ((item)=>(item.noc === condition));
}