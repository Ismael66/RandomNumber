const minimoNumero = document.getElementById("inicioNumero");
const maximoNumero = document.getElementById("fimNumero");
const resultado = document.getElementById("resultado");
const botaoEnviar = document.getElementById("submit");
botaoEnviar.onclick = function () {
    if (minimoNumero.value === "" || maximoNumero.value === "") {
        resultado.innerHTML = "Tá vazio alí ó";
    }
    else if (maximoNumero.value < minimoNumero.value) {
        resultado.innerHTML = "Escolhe um número valido na moral";
    }
    else {
        resultado.innerHTML = Math.round(Math.random() * (parseInt(maximoNumero.value) - parseInt(minimoNumero.value))) + parseInt(minimoNumero.value);
    }
}
const adicionaRedClass = function(botaoUm, botaoDois = null) {
    if (botaoDois !== null) {
        botaoDois.classList.add('red')
    }
    botaoUm.classList.add('red');
}
const removeRedClass = function(campo) {
    campo.classList.remove('red');
}
maximoNumero.onkeyup = function () {
    if (maximoNumero.value === "") {
        adicionaRedClass(maximoNumero);   
    }
    else{
        removeRedClass(maximoNumero);
    }
    if (parseInt(maximoNumero.value) < parseInt(minimoNumero.value)) {
        window.event.preventDefault();
        maximoNumero.value = minimoNumero.value;
    }
}
minimoNumero.onkeyup = function() {
    if (minimoNumero.value === "") {
        adicionaRedClass(minimoNumero);   
    }
    else{
        removeRedClass(minimoNumero);
    }
    if (parseInt(minimoNumero.value) > parseInt(maximoNumero.value)) {
        window.event.preventDefault();
        minimoNumero.value = maximoNumero.value;
    }
}