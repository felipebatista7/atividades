//1- Crie uma variável JavaScript e coloque nela o valor de sua idade.
// Mostre no html usando o document.write() o dado contido na
// variável junto da frase "Minha idade é x anos", sendo "x" o valor
// armazenado na sua variável.

let idade = 32;

document.write('Minha idade é ' + idade + ' anos');


// 2- Crie três variáveis JavaScript, em duas delas atribua os valores que
// você quiser e na outra atribua o valor da soma das duas primeiras
// variáveis. Apresente valor da soma no documento html junto da
// frase "A resultado da soma de x e y é z", sendo x o valor armazenado
// na primeira variável, y o valor armazenado segunda variável e z o
// valor armazenado na terceira variável

let num1 = 13;
let num2 = 7;
let soma = num1 + num2;

document.write(`<p>A resultado da soma de ${num1} e ${num2} é ${soma}</p>`)

//3- Crie três variáveis, na primeira variável coloque o total de uma
// compra, por exemplo 149.90. Na segunda variável coloque a
// quantidade de parcelas, por exemplo 2. Na terceira variável coloque
// o valor da parcela. Apresente no documento html as seguintes
// informações:
// "O valor total da compra foi R$_,_"
// "Forma de pagamento: _x de R$_,_"

let totalCompra = 149.9;
let parcelas = 2;
let valorParcela = totalCompra / parcelas;

document.write(`<p>O valor total da compra foi R$${totalCompra}</p>`);
document.write(`<p>Forma de pagamento: ${parcelas}x de R$${valorParcela}</p>`);

//4- Crie duas variáveis. Na primeira coloque um total de minutos e
// defina um valor para ela (por exemplo, minutos = 120). Na segunda
// coloque o total em segundos destes minutos armazenados na
// primeira variável. Apresente no documento html a seguinte
// informação: "_ minutos equivale à _ segundos!"

let minutos = 120;
let segundos = minutos * 60;

document.write(`<p>${minutos} minutos equivale à ${segundos} segundos!</p>`)

//5-Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
// segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
// Calcule a média das notas e armazene na quinta variável criada.
// Apresente no documento html a seguinte informação:
// "O aluno _____ ficou com média _,_"


let nomeAluno = 'Felipe';
let nota1 = 10;
let nota2 = 9.5;
let nota3 = 9;
let media = (nota1+nota2+nota3)/3;

document.write(`<p>O aluno ${nomeAluno} ficou com média ${media}</p>`)


//6-Desenvolva um algoritmo que armazene o valor 10 em uma variável
// A e o valor 20 em uma variável B. A seguir (utilizando apenas
//   atribuições entre variáveis) troque os seus conteúdos fazendo com
//   que o valor que está em A passe para B e vice-versa. Ao final,
//   escrever os valores que ficaram armazenados nas variáveis.

let a =10;
let b = 20;
let c = a;
a = b;
b = c; 

document.write(`<p>A: ${a} B: ${b}</p>`);

//7-Desenvolva um algoritmo para ler o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e
// escrever o percentual que cada um representa em relação ao total
// de eleitores.

let votoBranco = 200;
let votoNulo = 150;
let votoValido = 500;
let eleitores = votoBranco + votoNulo + votoValido;

document.write(`<p>Toal de eleitores: ${eleitores}
  <br>
  Votos Válidos: ${votoValido}, representa ${votoValido/eleitores * 100}%
  <br>
  Votos Nulos: ${votoNulo}, representa ${votoNulo/eleitores * 100}%
  <br>
  Votos em Branco: ${votoBranco}, representa ${votoBranco/eleitores * 100}%
  </p>`)

//8-Desenvolva um algoritmo para ler dois valores e imprimir uma das
// três mensagens a seguir:
// a. ‘Números iguais’, caso os números sejam iguais;
// b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let valor1 = 40;
let valor2 = 20;

if(valor1 === valor2){
  document.write(`<p>Numeros Iguais</p>`)
}else if (valor1 > valor2){
  document.write(`<p>Primeiro é maior</p>`)
}else{
document.write(`<p>Segundo é maior</p>`)
}

//9-As maçãs desta estação custam R$0,30 se forem compradas
// menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// doze. Desenvolva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let quantidadeMaca = 12;

if(quantidadeMaca>=12){
  document.write(`<p>Valor total da compra: R$${quantidadeMaca * 0.25}`)
}else{
  document.write(`<p>Valor total da compra: R$${quantidadeMaca * 0.3}`)
}

//10-Escreva um algoritmo que tenha como valores de entradas o nome
// e idade do usuário e imprima no terminal o nome, a idade e o ano
// de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
// em 2000”.
// OBS: Pegue o ano atual como base

let nomeUsuario = 'Felipe';
let idadeUsuario = 32;

document.write(`<p>Nome : ${nomeUsuario}, Idade: ${idadeUsuario} , nasceu em ${2024 - idadeUsuario}</p>`)

//11-Crie um algoritmo que armazene um número inteiro positivo, e gere
// um alerta com as seguintes mensagens:
// a. “Número é par!”, se o valor armazenado for par;
// b. “Número é impar!”, se o valor armazenado for ímpar;
let testeParImpar = 5;
if(testeParImpar % 2 === 0){
  alert('Numero é par!');
}
else{
  alert('Numero é impar!');
}

//12-Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).
let anoAtual = 2024;
let anoNascimento = 1992;
if(anoAtual - anoNascimento >= 16){
  console.log('Pode votar!');
}else{
  console.log('Ainda não pode votar este ano!')
}