//Função para abertura de modal
function abrirModal() {
    document.getElementById('modal').style.marginTop = '1px';


}
//função para fechar o modal
function fecharModal() {
    document.getElementById('modal').style.marginTop = '-1500px';

}
//Função de contagem regressiva!
function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = function() {
    var duration = 180 * 5;
    display = document.querySelector('#timer');
    startTimer(duration, display);
};