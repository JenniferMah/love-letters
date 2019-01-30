function open_card() {
  document.getElementById('front').className = 'open-card';
}

function close_card() {
  document.getElementById('front').className = '';
}

var button=document.getElementById("front");
button.addEventListener("click", open_card, false);

var button=document.getElementById("inside");
button.addEventListener("click", close_card, false);