const seats = document.querySelector(".seats");
const select = document.querySelector("select");
let price = select.value;
const totalText = document.querySelector(".total");
const numSelectedText = document.querySelector(".numSelected");

function updateText() {
  const selectedElements = seats.querySelectorAll(".selected").length;
  const totalPrice = selectedElements * price;
  numSelectedText.innerText = selectedElements;
  totalText.innerText = totalPrice;
}

function updatePrice(e) {
  price = e.target.value;
  updateText();
}

function clickHandler(e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateText();
  }
}

//Event listeners
seats.addEventListener("click", clickHandler);
select.addEventListener("change", updatePrice);
