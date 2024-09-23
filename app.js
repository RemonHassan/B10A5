function showBtn(){
   const showDonation = document.getElementById('donation-section');
   const historyShow = document.getElementById('history-section');
   document.getElementById('btn-donation').classList.add('bg-primary');
   document.getElementById('btn-history').classList.remove('bg-primary');
   showDonation.classList.remove('hidden');
   historyShow.classList.add('hidden');
}
function showBtn2(){
   const showDonation = document.getElementById('donation-section');
   const historyShow = document.getElementById('history-section');
   document.getElementById('btn-donation').classList.remove('bg-primary');
   document.getElementById('btn-history').classList.add('bg-primary');
   showDonation.classList.add('hidden');
   historyShow.classList.remove('hidden');
}
// common function
function addTwoNumbers(num1, num2) {
   return num1 + num2;
 }
function negTwoNumbers(num1, num2) {
   return num1 - num2;
 }


document.getElementById('input-card-1').addEventListener('click',function(){
   const inputField1 = parseFloat(document.getElementById('input-field-card-1').value);
   const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
   const noakhaliMoney = parseFloat(document.getElementById('noakhali').innerText);
   if(inputField1 > mainBalance){
      alert('Not Enough Balance');
      return ;
   }
   else{
      const newBalance = negTwoNumbers(mainBalance, inputField1) ;
      document.getElementById('main-balance').innerText = newBalance;
      const noakhaliBalance = addTwoNumbers(noakhaliMoney,inputField1);
      document.getElementById('noakhali').innerText = noakhaliBalance;
      const now = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' });
      const historyEntry = document.createElement('div');
      historyEntry.className = 'history-entry';
      historyEntry.classList.add('border');
      historyEntry.classList.add('rounded-md');
      historyEntry.classList.add('mt-3');
      historyEntry.classList.add('p-6');
      historyEntry.innerHTML = `
      <p class="text-center font-bold">${inputField1} Taka is donated for famine-2024 at noakhali, Bangladesh </p>
      <p class="text-center font-extralight">Date: ${now}</p>
  `;
  document.getElementById('donation-history').appendChild(historyEntry);

   }
})
// *********feni*********
document.getElementById('input-card-2').addEventListener('click',function(){

   const  inputField22 = parseFloat(document.getElementById('input-field-card-2').value);
   const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
   const feniMoney = parseFloat(document.getElementById('feni').innerText);
   if( inputField22 > mainBalance){
      alert('Not Enough Balance');
      return ;
   }
   else{
      const newBalance = negTwoNumbers(mainBalance, inputField22);
      document.getElementById('main-balance').innerText = newBalance;
      const feniBalance = addTwoNumbers(feniMoney, inputField22);
      document.getElementById('feni').innerText = feniBalance;
      const now = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' });
      const historyEntry = document.createElement('div');
      historyEntry.className = 'history-entry';
      historyEntry.classList.add('border');
      historyEntry.classList.add('rounded-md');
      historyEntry.classList.add('mt-3');
      historyEntry.innerHTML = `
      <p class="text-center font-bold">${ inputField22} Taka is donated for Flood Relief in Feni, Bangladesh </p>
      <p class="text-center font-extralight">Date: ${now}</p>
  `;
  document.getElementById('donation-history').appendChild(historyEntry);

   }
})
// ****Quota****
document.getElementById('input-card-3').addEventListener('click',function(){

   const  inputField33 = parseFloat(document.getElementById('input-field-card-3').value);
   const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
   const quotaMoney = parseFloat(document.getElementById('quota').innerText);
   if( inputField33 > mainBalance){
      alert('Not Enough Balance');
      return ;
   }
   else{
      const newBalance = negTwoNumbers(mainBalance, inputField33);
      document.getElementById('main-balance').innerText = newBalance;
      const quotaBalance = addTwoNumbers(quotaMoney, inputField33);
      document.getElementById('quota').innerText = quotaBalance;
      const now = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' });
      const historyEntry = document.createElement('div');
      historyEntry.className = 'history-entry';
      historyEntry.classList.add('border');
      historyEntry.classList.add('rounded-md');
      historyEntry.classList.add('mt-3');
      historyEntry.innerHTML = `
      <p class="text-center font-bold">${ inputField33} Taka is donated for Aid for Injured in the Quota Movement, Bangladesh </p>
      <p class="text-center font-extralight">Date: ${now}</p>
  `;
  document.getElementById('donation-history').appendChild(historyEntry);

   }
})