const email = prompt("Zadejte svůj e-mail:");
const message = document.querySelector("#msg");

if (validator.isEmail(email)) {
    message.textContent = "E-mail v pořádku";
  message.classList.add("msg--valid");
  console.log("OK");
} else {
  message.textContent = "Neplatný e-mail";
  message.classList.add("msg--invalid");
}