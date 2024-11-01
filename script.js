const email = prompt("Zadejte svůj e-mail:");
const msg = document.querySelector("#msg");

if (validator.isEmail(email)) {
    msg.textContent = "E-mail v pořádku.";
    msg.classList.add("msg--valid");
} else {
    msg.textContent = "Neplatný e-mail.";
    msg.classList.add("msg--invalid");
}