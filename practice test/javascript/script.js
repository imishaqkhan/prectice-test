

// groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );



const groceries = (items) =>{

 //console.log(items)

 let filteredItemList  = items.map( (data)=>{
  return data.item;
 })

 if(filteredItemList.length ==0) return "";
 if(filteredItemList.length == 1) return filteredItemList[0];

let lastIndexValue = filteredItemList.pop();

return `${filteredItemList.join(', ')}  and ${lastIndexValue}`

//  let lastValue = filteredItemList[filteredItemList.length - 1];
//  let result = filteredItemList.join(', ');

//  return result.replace(', '+lastValue, ' and '+lastValue)

// let output = ""
// let lastvalue = filteredItemList.pop();
//  for(let i=0; i < filteredItemList.length; i++){
//   if(output !=""){
//     output = output +', '+ filteredItemList[i] 
//   }
//   else{
//     output = filteredItemList[i] 
//   }
//  }
// console.log(output + ' and '+ lastvalue)
  
}

let items = [
  {item: 'Carrots'},
  {item: 'Hummus'},
  {item: 'Pesto'},
  {item: 'Rigatoni'}]
  
let result = groceries(items)
console.log(result);

