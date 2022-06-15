var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var resultFoot = document.querySelector(".item__onFoot");
var resultBike = document.querySelector(".item__bike");
var resultCar = document.querySelector(".item__car");
var resultPlane = document.querySelector(".item__plane");
var elError = document.querySelector(".error");

var foot = 3.6;
var bike = 20.1;
var car = 70;
var plane = 800

elForm.addEventListener("submit", function(e) {
  e.preventDefault();

  var num = Number(elInput.value.trim());

  if (num <= 0 || isNaN(num)) {
    elError.textContent = "Musbat son kiriting yoki son kiriting !!!";
    elInput.classList.remove("is-valid");
    elInput.classList.add("is-invalid");
    return
  } else {
    elInput.classList.remove("is-invalid");
    elInput.classList.add("is-valid");
  }

  function onFoot (num) {
    return num / foot;
  }

  function fBike (num) {
    return num / bike;
  }

  function fCar (num) {
    return num / car;
  }

  function fPlane (num) {
    return num / plane;
  }
  resultFoot.textContent = Math.floor(onFoot(num)) + " soat";
  resultBike.textContent = Math.floor(fBike(num)) + " soat";
  resultCar.textContent = Math.floor(fCar(num)) + " soat";
  resultPlane.textContent = Math.floor(fPlane(num)) + " soat";
})



