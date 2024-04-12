function white() {
    var stilo = document.getElementById('Style')
    stilo.href = "../css/white.css";
    document.getElementById('delete').innerHTML = "<img src='../img/delete2.png' alt='delete'>";
    
}

function black() {
    var stilo = document.getElementById('Style')
    stilo.href = "../css/black.css";
    document.getElementById('delete').innerHTML = "<img src='../img/delete.png' alt='delete'>";
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
    var operacao = document.querySelector('.resultado');
    operacao.innerHTML = ''; 
    var operacaoCompleta = document.querySelector('.operacao'); 
    operacaoCompleta.innerHTML = ''; 

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
                throw new Error();
            }

            operacao.innerHTML = resultado;
            document.querySelector('.operacao').innerHTML = conteudo;
        } catch (error) {

            operacao.innerHTML = "ERR0R!";
        }
    }
}


function inverter() {
    var operacao = document.querySelector('.resultado'); 
    var conteudo = operacao.innerHTML;

    if (conteudo.length > 0) {
        
        var resultado = parseFloat(conteudo); 

    
        if (resultado !== 0) {
            resultado = -resultado;
        }

        operacao.innerHTML = resultado;
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
