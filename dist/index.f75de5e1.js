AOS.init();
var dataEvento = new Date("Dec 31, 2024 00:00:00").getTime();
// Atualiza a contagem regressiva a cada 1 segundo
var intervalo = setInterval(function() {
    // Obtém a data e hora atual
    var agora = new Date().getTime();
    // Calcula a diferença entre a data do evento e a data atual
    var diferenca = dataEvento - agora;
    // Calcula o tempo restante em dias, horas, minutos e segundos
    var dias = Math.floor(diferenca / 86400000);
    var horas = Math.floor(diferenca % 86400000 / 3600000);
    var minutos = Math.floor(diferenca % 3600000 / 60000);
    var segundos = Math.floor(diferenca % 60000 / 1000);
    // Exibe a contagem regressiva no elemento com o id "contador"
    document.getElementById("contador").innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";
    // Se a contagem regressiva terminar, exibe "Evento expirado"
    if (diferenca < 0) {
        clearInterval(intervalo);
        document.getElementById("contador").innerHTML = "Evento expirado";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
