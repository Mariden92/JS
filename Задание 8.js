let array=[44,"str",true]
let map = new Map();

map.set("first", array[0]);    
map.set("second", array[1]);      
map.set("third", array[2]);  


console.log (`Ключ - ${"first"}, значение - ${map.get("first")}`) 
console.log (`Ключ - ${"second"}, значение - ${map.get("second")}`) 
console.log (`Ключ - ${"third"}, значение - ${map.get("third")}`) 