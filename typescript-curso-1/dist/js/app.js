import { NegociacaoController } from "./controllers/negociacaoController.js";
// Construido o controlador
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
