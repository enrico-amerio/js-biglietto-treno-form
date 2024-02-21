const distance = document.getElementById('km');
const ageRange = document.getElementById('age')
console.log(distance.value, ageRange.value);

const priceKm = 0.21;
const fullPrice = distance * priceKm;
// const discountYoung = 20;
// const discountSenior = 40;
console.log(fullPrice);

//ELEMENTS
const btn1 = document.querySelector('.btn1');







btn1.addEventListener('click',function(event){
  event.preventDefault();
})
