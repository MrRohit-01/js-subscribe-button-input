function subscribe() {
// let jsButton = document.querySelector(".js-button");
let jsButton = document.querySelector(".js-button");
if(jsButton.innerHTML==='Subscribe'){
  jsButton.innerHTML = 'Subscribed'; 
  jsButton.classList.add('b1-changed');
}
else{
  jsButton.innerHTML ='Subscribe';
  jsButton.classList.remove('b1-changed');
}
}

function inputCost(){
  let cost = Number(document.querySelector('.js-input').value);
  if(cost < 40){
    cost+=10;
  }
  document.querySelector('.total').innerHTML = `$${cost}`;
}
function onKeyDown(event){
  console.log(event);
  if(event.key==='Enter'){
    inputCost();
  }
}