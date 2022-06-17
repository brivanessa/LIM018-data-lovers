import data from './data/athletes/athletes.js';
import {filterData} from './data.js';
import {newDataNoRepeat} from './data.js';
//import {noRepeat2} from './data.js';
// import { getItemDescriptor } from '@babel/core/lib/config/item';
//  console.log(data);

const datos =data.athletes;
//console.log(datos);

const dataNoRepeat=newDataNoRepeat(datos);
//console.log(dataNoRepeat)

const dataFemale=filterData(dataNoRepeat, "F");
//console.log(dataFemale)

const dataMale=filterData(dataNoRepeat, "M");
console.log(dataMale)
