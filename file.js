
//Heart Buttons Click
const hearts = document.getElementsByClassName('heart');

for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function(){
        let count = parseInt(document.getElementById('heart-count').innerText);
        count++;
        document.getElementById('heart-count').innerText = count;
    });
}

//Call Buttons Click
const calls = document.getElementsByClassName('call');
const coins = document.getElementById('coin-count');
const historySection = document.getElementById('history-section'); // Assuming a container with this ID

for (let i = 0; i < calls.length; i++) {
  calls[i].addEventListener('click', function() {

    let coin = parseInt(coins.innerText);

    if (coin < 20) {
      alert("You don't have enough coins to make this call.");
      return;
    }
    coin -= 20;
    coins.innerText = coin;

    const card = this.closest('.rounded-xl');

    const titleName = card.querySelector('h3').innerText;
    const num = card.querySelector('h2').innerText;
    const subTitle = card.querySelector('p').innerText;

    alert("Calling " + subTitle + " " + num);

    const historyItem = document.createElement('div');
    historyItem.innerHTML = `
          <div class="flex bg-[#FAFAFA] justify-between items-center mx-[5%] p-4 mb-4">
            <div>
              <h2 class="inter-font font-semibold text-[18px] max-w-[250px]">${titleName}</h2>
              <p class="hind-madurai-font text-[18px] text-[#5C5C5C]">${num}</p>
            </div>
            <p class="hind-madurai-font text-[20px]">${new Date().toLocaleTimeString()}</p>
          </div>
      `;
    historySection.appendChild(historyItem);
  });
}