function showBtn(){
   const showDonation = document.getElementById('donation-section');
   const historyShow = document.getElementById('history-section');
   showDonation.classList.remove('hidden');
   historyShow.classList.add('hidden');
}
function showBtn2(){
   const showDonation = document.getElementById('donation-section');
   const historyShow = document.getElementById('history-section');
   showDonation.classList.add('hidden');
   historyShow.classList.remove('hidden');
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
      const newBalance = mainBalance - inputField1;
      document.getElementById('main-balance').innerText = newBalance;
      const noakhaliBalance = noakhaliMoney + inputField1;
      document.getElementById('noakhali').innerText = noakhaliBalance;
      const now = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' });
      const historyEntry = document.createElement('div');
      historyEntry.className = 'history-entry';
      historyEntry.classList.add('border');
      historyEntry.classList.add('rounded-md');
      historyEntry.classList.add('mt-3');
      historyEntry.innerHTML = `
      <p class="text-center font-bold">${inputField1} Taka is donated for famine-2024 at Feni, Bangladesh </p>
      <p class="text-center font-bold">Date: ${now}</p>
  `;
  document.getElementById('donation-history').appendChild(historyEntry);

   }
})