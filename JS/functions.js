function white() {
    var stilo = document.getElementById('Style')
    stilo.href = "../css1/white.css";
}

function black() {
    var stilo = document.getElementById('Style')
    stilo.href = "../css1/black.css";
}

function insere(num) {
    var operacao = document.querySelector('.resultado');
    if (operacao.innerHTML.toString().length < 16) {
        operacao.innerHTML += num;
    } else {
        alert("Você atingiu o limite de 16 caracteres!");
    }

}

function limpa() {
    var operacao = document.querySelector('.resultado'); // Seleciona o elemento com a classe 'resultado'
    operacao.innerHTML = ''; // Limpa o conteúdo da operação

    var operacaoCompleta = document.querySelector('.operacao'); // Seleciona o elemento com a classe 'operacao'
    operacaoCompleta.innerHTML = ''; // Limpa o conteúdo da operação completa

}

function excluir() {
    var operacao = document.querySelector('.resultado');
    var conteudo = operacao.innerHTML;

    if (conteudo.length > 0) {
        operacao.innerHTML = conteudo.slice(0, -1);
    }
}

function calcular1() {
    var operacao = document.querySelector('.resultado');
    var conteudo = operacao.innerHTML;

    if (conteudo.length > 0) {
        var resultado = eval(conteudo);
        document.querySelector('.resultado').innerHTML = resultado;
        document.querySelector('.operacao').innerHTML = conteudo;

    }

}

function calcular() {
    var operacao = document.querySelector('.resultado');
    var conteudo = operacao.innerHTML;

    if (conteudo.length > 0) {
        try {
            var resultado;

            if (conteudo.includes('%')) {

                var partes = conteudo.split('%');
                var numero = parseFloat(partes[0]);
                var porcentagem = parseFloat(partes[1]);
                resultado = (numero * porcentagem) / 100;
            } else {

                resultado = eval(conteudo);
            }

            if (resultado.toString().length > 10) {

                resultado = resultado.toExponential(8);
            }

            if (!isFinite(resultado)) {
                throw new Error("Divisão por zero!");
            }

            operacao.innerHTML = resultado;
            document.querySelector('.operacao').innerHTML = conteudo;
        } catch (error) {

            operacao.innerHTML = "ERR0R!";
            console.error("Erro durante a avaliação da expressão:", error);
        }
    }
}


function inverter() {
    var operacao = document.querySelector('.resultado'); // Seleciona o elemento com a classe 'resultado'
    var conteudo = operacao.innerHTML; // Obtém o conteúdo da operação

    if (conteudo.length > 0) {
        // Verifica se há conteúdo na operação
        var resultado = parseFloat(conteudo); // Converte o conteúdo para um número

        // Inverte o sinal do número
        if (resultado !== 0) {
            resultado = -resultado;
        }

        operacao.innerHTML = resultado; // Exibe o número com o sinal invertido na tela
    }
}


    document.addEventListener('keydown', function (event) {
        var tecla = event.key;

        switch (tecla) {
            case 'Enter':
                calcular();
                break;
            case 'Backspace':
                excluir();
                break;
            case '-':
            case '+':
            case '*':
            case '/':
            
            insere(tecla);

            default:
        if (/[0-9.]/.test(tecla)) {
                insere(tecla);
            }
        }
    });
