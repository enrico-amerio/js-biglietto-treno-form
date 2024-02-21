const name = document.getElementById('fullName')
const distance = document.getElementById('km');
const ageRange = document.getElementById('age')
console.log(fullName.value, distance.value, ageRange.value);


const priceKm = 0.21;
const fullPrice = distance.value * priceKm;
const discountYoung = 20;
const discountSenior = 40;
console.log(fullPrice);

//ELEMENTS
const btn1 = document.querySelector('.btn1');


if(ageRange.value == 1){
  risultato = fullPrice - ((fullPrice * discountYoung) / 100);
}else if(ageRange.value == 3){
  risultato = fullPrice - ((fullPrice * discountSenior) / 100);
}else{
  risultato = fullPrice;
}
console.log(risultato)


btn1.addEventListener('click',function(event){
  event.submit();
 
})
