function displayStart() {
  var initDiv = document.getElementById("welcome");
  var startDiv = document.getElementById("start");

  initDiv.style.display = "none";
  startDiv.style.display = "inline";
}

function finalPassword() {
  var inputEnter = document.getElementById("finalTextPass");

  if (inputEnter.value == "a4k3ngh534nvgk3kjn4343r4rre") {
    alert("Clave correcta.");

  }
}