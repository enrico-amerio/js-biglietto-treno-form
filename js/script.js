const discountYoung = 20;
const discountSenior = 40;

//ELEMENTS
btn1 = document.querySelector('.btn1');
myTicket = document.getElementById('my-ticket');
resetBtn = document.getElementById('reset-btn');

btn1.addEventListener('click',function(event){
  event.preventDefault();
  
})

btn1.addEventListener('click', function(){
  const fullName = document.getElementById('fullName').value;
  const distance = document.getElementById('km').value;
  const ageRange = document.getElementById('age').value;
  console.log(fullName, distance, ageRange);
  const priceKm = 0.21;
  const fullPrice = distance * priceKm;
  console.log(fullPrice);

  if(ageRange == 1){
    risultato = fullPrice - ((fullPrice * discountYoung) / 100);
  }else if(ageRange == 3){
    risultato = fullPrice - ((fullPrice * discountSenior) / 100);
  }else{
    risultato = fullPrice;
  }
  console.log(risultato)
  console.log(fullName, distance, ageRange)
  document.getElementById('user').innerHTML = 'Ciao' + ' ' + fullName + '!';
  
  if(ageRange == 1){
    risultato = fullPrice - ((fullPrice * discountYoung) / 100);
    document.getElementById('full-price').innerHTML = `
    <p>Il prezzo del biglietto è di ${(fullPrice).toFixed(2)} \u20AC, ma hai diritto allo sconto Young del ${ discountYoung}% quindi pagherai solamente ${(risultato).toFixed(2)} \u20AC <\p>
  
     `;
 
  }else if(ageRange == 3){
    risultato = fullPrice - ((fullPrice * discountSenior) / 100);
    document.getElementById('full-price').innerHTML = `
    <p>Il prezzo del biglietto è di ${(fullPrice).toFixed(2)} \u20AC, ma hai diritto allo sconto Senior del ${ discountSenior}% quindi pagherai solamente ${(risultato).toFixed(2)} \u20AC <\p>
  
     `;
  }else{
    risultato = fullPrice;
    document.getElementById('full-price').innerHTML = `
    <p>Il prezzo del biglietto è di ${(risultato).toFixed(2)} \u20AC <\p>
  
     `;
  }
  myTicket.classList.toggle('d-none');
})

resetBtn.addEventListener('click', function(){
  myTicket.classList.add('d-none')
})