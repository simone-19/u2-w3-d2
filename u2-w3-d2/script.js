const localStorageKey = "memory-pad";

const nameInput = document.getElementById("name-input");
const saveButton = document.getElementById("save");
const aggiornaButton = document.getElementById("aggiorna");

const save = () => {
  const content = nameInput.value;
  localStorage.setItem(localStorageKey, content);
  alert("dati salvati");
};

const cancel = () => {
  localStorage.removeItem(localStorageKey);
  alert("dati eliminati");
};

saveButton.addEventListener("click", save);
aggiornaButton.addEventListener("click", cancel);
// esercizio 1
// esercizio 2

let counter = 0;

const counterTime = document.getElementById("counterTimer");

function increment() {
  counter++;
  counterTime.textContent = counter;
  sessionStorage.setItem("count", counter);
}
const interval = setInterval(increment, 1000);

window.addEventListener("beforeunload", () => {
  clearInterval(interval);
});
