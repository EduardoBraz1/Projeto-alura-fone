const inputFone = document.querySelector('input[type=tel]');
const listaButton = document.querySelectorAll('input[type=button]');

for (let i = 0; i < listaButton.length; i++) {
    const tecla = listaButton[i];

    tecla.onclick = function () {
        inputFone.value += tecla.value;
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
