//pegar o input 
//Se for Sim, mostra as categoria disponiveis, pergunta qual categoria ela escolher
//Se não, mostra todos os livros em ordem crescente pela quantidade de páginas 
const livros = require("./database")
const readline = require("readline-sync")
const entradaInicial = readline.question("deseja buscar um livro?S/N")

if (entradaInicial.toLocaleUpperCase() ==="S") {
  console.log("Essas são as categorias disponíveis:")
  console.log("Produtividade","/História brasileira", "/Américas","/Tecnologia", "/Estilo de vida")
  const entradaCategoria = readline.question("Qual categoria voce escolhe:")

  const retorno = livros.filter(livro => livro.categoria === entradaCategoria )

  console.table(retorno)
} else {
  const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
  console.log("Esses são todos os livros disponiveis:")
  console.table(livrosOrdenados)


}
