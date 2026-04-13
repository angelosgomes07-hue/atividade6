function gerarTicket() {
    const nomeRaw = document.getElementById("input-nome").value.trim();

    if (nomeRaw.length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        return;
    }

    const partesNome = nomeRaw.split(" ").filter(function (parte) {
        return parte.length > 0;
    });

    const primeiroNome = partesNome[0].toUpperCase();
    const ultimoNome = partesNome[partesNome.length - 1].toUpperCase();
    const nomeTicket = `${primeiroNome} ${ultimoNome}`;

    const urgencia = document.getElementById("input-urgencia").value;

    let diasPrazo = 7;
    if (urgencia === "alta") {
        diasPrazo = 2;
    } else if (urgencia === "baixa") {
        diasPrazo = 10;
    }

    const dataAtual = new Date();
    const dataPrazo = new Date();
    dataPrazo.setDate(dataAtual.getDate() + diasPrazo);

    document.getElementById("out-nome").innerText = nomeTicket;
    document.getElementById("out-data").innerText = dataAtual.toLocaleDateString("pt-BR");
    document.getElementById("out-prazo").innerText = dataPrazo.toLocaleDateString("pt-BR");

    document.getElementById("ticket-resultado").style.display = "block";
}