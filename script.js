let produtos =[
    {
       id:1,
       nome: "Blusa Xadrez - Rosa",
       categoria: "feminino",
       quantidade: 0,
       valor: "R$45,50", 
       imagem:"imagens/feminino/1.jpg"
    },
    {
        id:2,
        nome: "Blusa Xadrez - Preto",
        categoria: "feminino",
        quantidade: 0,
        valor: "R$60,00",
        imagem:"imagens/feminino/2.jpg"
     },
     {
        id:3,
        nome: "Blusa Lisa - Branca",
        categoria: "feminino",
        quantidade: 0,
        valor: "R$30,00", 
        imagem:"imagens/feminino/3.jpg"
     },
     {
        id:4,
        nome: "Blusa Lisa - Bege",
        categoria: "feminino",
        quantidade: 0,
        valor: "R$40,00",
        imagem:"imagens/feminino/4.jpg"
     },
     {
        id:5,
        nome: "Blusa Lisa - Onça",
        categoria: "feminino",
        quantidade: 0,
        valor: "R$50,00",
        imagem:"imagens/feminino/5.jpg"
     },
     {
        id:6,
        nome: "Blusa Lisa - Preto",
        categoria: "feminino",
        quantidade: 0,
        valor: "R$40,00", 
        imagem:"imagens/feminino/6.jpg"
     },
     {
        id:7,
        nome: "Blusa Stitch - Rosa",
        categoria: "infantil",
        quantidade: 0,
        valor: "R$45,00", 
        imagem:"imagens/infantil/1.jpg"
     },
     {
        id:8,
        nome: "Blusa Sonic - Branco",
        categoria: "infantil",
        quantidade: 0,
        valor: "R$45,50", 
        imagem:"imagens/infantil/2.jpg"
     },
     {
        id:9,
        nome: "Vestido Xadrez - Vermelho",
        categoria: "infantil",
        quantidade: 0,
        valor: "R$55,90", 
        imagem:"imagens/infantil/3.jpg"
     },
     {
        id:10,
        nome: "Blusa Lisa - Laranja",
        categoria: "infantil",
        quantidade: 0,
        valor: "R$45,50", 
        imagem:"imagens/infantil/4.jpg"
     },
     {
        id:11,
        nome: "Moletom Minnie - Vermelho",
        categoria: "infantil",
        quantidade: 0,
        valor: "R$45,50", 
        imagem:"imagens/infantil/5.jpg"
     },
     {
        id:12,
        nome: "Vestido - Onça",
        categoria: "infantil",
        quantidade: 0,
        valor: "R$45,00", 
        imagem:"imagens/feminino/6.jpg"
     },
     {
        id:13,
        nome: "Camisa Xadrez - Branco",
        categoria: "masculino",
        quantidade: 0,
        valor: "R$50,00", 
        imagem:"imagens/masculino/1.jpg"
     },
     {
        id:14,
        nome: "Camiseta Longa - Preto",
        categoria: "masculino",
        quantidade: 0,
        valor: "R$45,50", 
        imagem:"imagens/masculino/2.jpg"
     },
     {
        id:15,
        nome: "Camisa Personagem - Branco",
        categoria: "masculino",
        quantidade: 0,
        valor: "R$40,00", 
        imagem:"imagens/masculino/3.jpg"
     },
     {
        id:16,
        nome: "Camiseta Polo Lisa",
        categoria: "masculino",
        quantidade: 0,
        valor: "R$60,00", 
        imagem:"imagens/masculino/4.jpg"
     },
     {
        id:17,
        nome: "Camisa Estampa - Branco",
        categoria: "masculino",
        quantidade: 0,
        valor: "R$55,00", 
        imagem:"imagens/masculino/5.jpg"
     },
     {
        id:18,
        nome: "Camisa Lisa - Bege",
        categoria: "masculino",
        quantidade: 0,
        valor: "R$60,00", 
        imagem:"imagens/masculino/6.jpg"
     }   

];

var divGaleria = document.getElementById("galeria");

function exibirProd (prodFilt){
   divGaleria.innerHTML='';

for (var i=0;i<produtos.length;i++){
    // Criando o campo de imagens
    var imagemElement = document.createElement("img");
    imagemElement.src = prodFilt[i].imagem;

    // Criando o campo para os nomes
    var nomeProduto = document.createElement("h6");
    nomeProduto.textContent = prodFilt[i].nome;

    // Criando um campo para os preços
    var preco = document.createElement("h6");
    preco.textContent = prodFilt[i].valor;

    // Criando botao de adicionar
    var botao = document.createElement("input");
    botao.type="button";
    botao.value="Adicionar";
    botao.className= "btn btn-primary btn-sm";
    botao.setAttribute("data-id", produtos[i].id);
    botao.addEventListener("click", function () {
      adicionarAoCarrinho(parseInt(this.getAttribute("data-id")));
    });

    // Criando uma div para exibir os produtos separados
    var card = document.createElement("div");
    card.classList.add("card");



    // Adicionando os elementos no card
    card.appendChild(imagemElement);
    card.appendChild(nomeProduto);
    card.appendChild(preco);
    card.appendChild(botao);

    // Exibindo os produtos no HTML
    divGaleria.appendChild(card);
}
}

function filtroCat(categoria){
   var prodFilt = produtos.filter(function(produto){
      return produto.categoria === categoria;
   });

   exibirProd(prodFilt);
}

function exibirProdTodos(){
   exibirProd(produtos);
}

exibirProdTodos();

// Exibir o modal

let carrinho = document.getElementById("carrinho");
let modalList = document.getElementById("modal");

carrinho.addEventListener("click",function(){

   modalList.style.display ="block";
   exibirCarrinho();
});

// Fechar o carrinho
let closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", function(){
   modalList.style.display="none";
});

// Buscar produtos
function buscarProduto() {

   // variavel para pegar o valor input text (digitado) - converter para minusculo
   var search = document.getElementById("searchInput").value.toLowerCase();

   // variavel para filtrar os produtos
   var produtoFilt = produtos.filter(function (produto) {
       return produto.nome.toLowerCase().includes(search);
   });

   exibirProd(produtoFilt);   
}



// CARRINHO
 
let carrinhoItens = [];

function adicionarAoCarrinho(id) {
  const produtoSelecionado = produtos.find((produto) => produto.id === id);

  if (produtoSelecionado) {
    let carrinhoItem = carrinhoItens.find((item) => item.id === id);

    if (carrinhoItem) {
      carrinhoItem.quantidade++;
    } else {
      carrinhoItem = { ...produtoSelecionado, quantidade: 1 };
      carrinhoItens.push(carrinhoItem);
    }

    exibirCarrinho();
  }
}

function exibirCarrinho() {
  var carrinhoList = document.getElementById("carrinhoItens");
  carrinhoList.innerHTML = "";

  for (var i = 0; i < carrinhoItens.length; i++) {
    var carrinhoItem = document.createElement("li");
    var imagemElement = document.createElement("img");
    imagemElement.src = carrinhoItens[i].imagem;
    imagemElement.width = 90; 
    carrinhoItem.appendChild(imagemElement);
    carrinhoItem.appendChild(
      document.createTextNode(
        carrinhoItens[i].nome + " - Quantidade: " + carrinhoItens[i].quantidade
      )
    );

    carrinhoList.appendChild(carrinhoItem);
  }
}
 

  
