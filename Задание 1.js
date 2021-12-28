value = prompt("Значение");
value++;
if(typeof value === "number" && !isNaN(value)){
 if (value%2==0){
    console.log ("четное")
}
else if (value!==0) {
    console.log ("нечетное")
}
}
else {
    console.log("Упс, кажется вы ошиблись");
  }
  