const amount = document.getElementById("amount");
const guest = document.getElementById("guest");
const quality = document.getElementById("quality");
const tip_amount = document.getElementById("tip_amount");

calculate = () => {
  const tip = ((amount.value * quality.value) / guest.value).toFixed(2);
  amount.value = "";
  quality.value = "";
  guest.value = "";
  if (tip == "NaN") {
    tip_amount.innerHTML = "tip = 0$ 😐 হেহে!";
    showTipAmount();
  } else {
    tip_amount.innerHTML = "tip = " + tip + "$";
    showTipAmount();
  }
};

showTipAmount = () => {
  var x = tip_amount;
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3200);
};
