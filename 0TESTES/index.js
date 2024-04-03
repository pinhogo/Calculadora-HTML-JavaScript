function insere(num){
 
    var operacao = document.querySelector('.resultado'); // Seleciona o elemento com a classe 'resultado'
    operacao.innerHTML += num; // Obtém o conteúdo da operação
     
}

function limpa(){
    var operacao = document.querySelector('.resultado'); 
    operacao.innerHTML = ''; 
    
    var historico = document.querySelector('.operacao');
    historico.innerHTML = ''; 
    
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
        }if(conteudo.includes('%')){
            var partes = conteudo.split('%'); // divide em dois numeros pelo %
            var numero = parseFloat(partes[0]); // Transformou a string em numero e selecionou a parte da esquerda
            var porcentagem = parseFloat(partes[1]); // fez o mesmo c a parte da direita
            resultado = (numero * porcentagem) / 100; 
            document.querySelector('.resultado').innerHTML = resultado;
            document.querySelector('.operacao').innerHTML = conteudo;
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