
export function newDataNoRepeat(data){
  data.map(function(objeto) {
         delete objeto.medal;
         delete objeto.event;
       }) 
 const DataObjectText = new Set( data.map( JSON.stringify ) );
 const DataUniqObject = Array.from(DataObjectText).map( JSON.parse );
 return DataUniqObject;
} 

export function filterData(data,condition) {
  return data.filter ((item)=>(item.gender===condition))
}







// export function noRepeat(datos1){
//     let i=0;
//     while(datos1[i].name==datos1[i+1].name){    
//       let obj2={medal: `${datos1[i].medal}, ${datos1[i+1].medal}`}; 
//       let obj3={event: `${datos1[i].event}, ${datos1[i+1].event}`};
//       let obj1=datos1[i];
//       let obj4=Object.assign(obj1, obj2, obj3);
//       datos1.splice(i+1,1);
//       if (datos1[i].name==datos1[i+1].name) {i=0} else {i++}
//     } 
//      return datos1
//     }





// export function noRepeat2 (datos1){
//         let i =0;
//         if (datos1[i].name==datos1[i+1].name) {i=0} else  {i++};
//           while(datos1[i].name==datos1[i+1].name){  
//           let obj2={medal: `${datos1[i].medal}, ${datos1[i+1].medal}`}; 
//           let obj3={event: `${datos1[i].event}, ${datos1[i+1].event}`};
//           let obj1=datos1[i];
//           Object.assign(obj1, obj2, obj3);
//           datos1.splice(i+1,1);
//           i++
//         } 
//          return datos1
//         }  

//         function newData (datos1){
        
//           datos1.map(function(objeto){
//             delete objeto.medal;
//             delete objeto.event;
           
//           })
//           //datos1.map(objeto => delete objeto.event); 
//           return datos1;
//           }  
//    console.log(newData (datos3))        