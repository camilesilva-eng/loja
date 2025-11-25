// A. LÓGICA DO CARRINHO
const btnComprar = document.getElementById('btn-comprar');
const contadorItens = document.getElementById('contador-itens');
const totalCarrinho = document.getElementById('total-carrinho');

const precoUnidade = 25.50; // Preço de uma barra de chocolate
let totalAtual = 0;
let quantidade = 0;

function atualizarCarrinho() {
    quantidade++;
    totalAtual = quantidade * precoUnidade; 
    
    // Atualiza o HTML
    contadorItens.textContent = quantidade;
    totalCarrinho.textContent = totalAtual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

btnComprar.addEventListener('click', atualizarCarrinho);
