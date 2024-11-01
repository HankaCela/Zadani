const email = prompt("Zadejte svůj e-mail:");
const msgElement = document.getElementById("msg");

if (validator.isEmail(email)) {
    msgElement.textContent = "E-mail v pořádku";
    msgElement.classList.add("msg--valid");
    msgElement.classList.remove("msg--invalid");
} else {
    msgElement.textContent = "Neplatný e-mail";
    msgElement.classList.add("msg--invalid");
    msgElement.classList.remove("msg--valid");
}