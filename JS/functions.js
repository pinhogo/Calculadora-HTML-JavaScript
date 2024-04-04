function white(){
    var stilo = document.getElementById('Style')
    stilo.href = "css/white.css";
}
function black(){
    var stilo = document.getElementById('Style')
    stilo.href = "css/black.css";
}

function insere(num){
    var operacao = document.querySelector('.resultado'); 
    operacao.innerHTML += num; 
}

function limpa(){
    var operacao = document.querySelector('.resultado'); // Seleciona o elemento com a classe 'resultado'
    operacao.innerHTML = ''; // Limpa o conteúdo da operação
    
    var operacaoCompleta = document.querySelector('.operacao'); // Seleciona o elemento com a classe 'operacao'
    operacaoCompleta.innerHTML = ''; // Limpa o conteúdo da operação completa
    
}

function excluir(){
    var operacao = document.querySelector('.resultado');
    var conteudo = operacao.innerHTML;
    
    if (conteudo.length > 0) {
        operacao.innerHTML = conteudo.slice(0, -1);
    }
}

function calcular() {
    var operacao = document.querySelector('.resultado'); 
    var conteudo = operacao.innerHTML; 
    
    if (conteudo.length > 0) {
        var resultado = eval(conteudo);
        document.querySelector('.resultado').innerHTML = resultado;
        document.querySelector('.operacao').innerHTML = conteudo;
        
    }
    
}

function calcular2() {
    var operacao = document.querySelector('.resultado'); // Seleciona o elemento com a classe 'resultado'
    var conteudo = operacao.innerHTML; // Obtém o conteúdo da operação
    
    if (conteudo.length > 0) {
        
        var resultado;
        if (conteudo.includes('%')) {
            // Se houver o símbolo '%', realiza o cálculo de porcentagem
            var partes = conteudo.split('%'); // Divide a operação pelo símbolo '%'
            var numero = parseFloat(partes[0]); // Obtém o número antes do '%'
            var porcentagem = parseFloat(partes[1]); // Obtém a porcentagem após o '%'
            resultado = (numero * porcentagem) / 100; // Calcula a porcentagem
        } else {
            // Caso contrário, calcula a operação normalmente
            resultado = eval(conteudo); // Calcula o resultado da operação usando eval()
        }
        
        operacao.innerHTML = resultado; // Exibe o resultado na tela
        document.querySelector('.operacao').innerHTML = conteudo;
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

