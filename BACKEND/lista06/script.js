// 1. Crie uma variável para ler a idade de um motorista. Caso o
// motorista tenha idade maior ou igual a 18 anos imprime no console
// “Pode dirigir”, caso contrário imprima “Não pode dirigir”.

let idadeMorotista = Number(prompt('Qual a idade do motorista ?'));
if(idadeMorotista<18){
  console.log('Não pode dirigir');
}else{
  console.log('Pode dirigir');
}

// 2. Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

if(idadeMorotista<18){
  document.write('Não pode dirigir <br>');
}else{
  document.write('Pode dirigir <br>');
}

// 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

let diaSemana = 4;

if(diaSemana === 1 ){
  console.log('Domingo');
}else if(diaSemana ===2){
  console.log('Segunda-feira');
}else if(diaSemana ===3){
  console.log('Terça-feira');
}else if(diaSemana ===4){
  console.log('Quarta-feira');
}else if(diaSemana ===5){
  console.log('Quinta-feira');
}else if(diaSemana ===6){
  console.log('Sexta-feira');
}else if(diaSemana ===7){
  console.log('Sábado');
}else{
  console.log('Dia não reconhecido');
}

// 4. Reescreva o exercício 3, utilizando apenas o SWITCH.

switch(diaSemana){
  case 1:
    console.log('Domingo');
    break;
  case 2:
    console.log('Segunda-feira');
    break;
  case 3:
    console.log('Terça-feira');
    break;
  case 4:
    console.log('Quarta-feira');
    break;
  case 5:
    console.log('Quinta-feira');
    break;
  case 6:
    console.log('Sexta-feira');
    break;
  case 7:
    console.log('Sábado');
    break;
  default:
    console.log('Dia não reconhecido');
};

// 5. Utilizando FOR, percorra os números de 1 a 10 e imprima no console
// os números pares.
let acumuladorPar = ' ';
for(let i = 1; i<=10; i++){
  if(i % 2 === 0){
    acumuladorPar += i + ' ';
  }
}
console.log(`Os numeros par${acumuladorPar}`);

// 6. Insira no html 30 ( trinta ) números ímpares.
let acumuladorImpar = '';
let contadorExterno = 0;

for(let i = 1; i>0; i++){
  if(i % 2 !== 0){
    acumuladorImpar += i + ' ';
    contadorExterno++;
  }
  if(contadorExterno === 30){
    break;
  }
  i++
}
document.write(`Numeros impar: ${acumuladorImpar} <br>`)

// 7. Utilizando do...while, imprima na tela a soma de todos os números
// entre 10 e 100.

let soma = 0;
let finalizador = true;
do{
  for(let i = 10; i<=100; i++){
    soma+= i;
    if(i ===100){
      finalizador = !finalizador;
    }
  }
}while(finalizador);
document.write(`A soma de 10 a 100 dá ${soma}`);

// 8. Crie uma variável para armazenar o salário do usuário e atribua um
// valor a essa variável. Crie a validação necessária:
// - Caso o salário seja MENOR que R$ 1.903,98, insira no html
// "ISENTO DE IR";
// - caso contrário insira "TRIBUTADO NO IR".

let salario = 1904.98

if(salario < 1903.98){
  document.write('<br>ISENTO IR');
}else{
  document.write('<br>TRIBUTADO NO IR');
}

// 9. Informe um valor a uma variável e imprima no console se o número
// é primo.

let numero = 2;
let primo = true;

for(let i = 2; i<numero; i++){
  if(numero % i === 0){
    primo = false;
  }
}
  if(primo){
    document.write(`<br>O número ${numero} é primo`);
  }else{
    document.write(`<br>O número ${numero} não é primo`);
  }


// 10. Tendo como entrada a altura e o sexo (codificado da seguinte
// forma: 1 para sexo feminino e 2 para sexo masculino) de uma
// pessoa, construa um programa que calcule e mostre seu peso ideal,
// utilizando as seguintes fórmulas:
// - para homens: (72.7 * Altura) – 58
// - para mulheres: (62.1 * Altura) – 44.7

let altura = Number(prompt('Digite sua altura'));
let sexoPessoa = Number(prompt(`Digite a opção do seu sexo?
  1- Feminino
  2- Masculino`));

if(sexoPessoa === 1){
  alert(`O peso ideal para mulheres com ${altura} é de: ${(62.1 * altura) - 44.7} Kg` );
}else if(sexoPessoa === 2){
  alert(`O peso ideal para homens com ${altura} é de: ${(72.7 * altura) -44.7} Kg`);
}else{
  alert('Opção inválida');
}



// 11. Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso.

let turno = prompt(`Digite o turno em que você estuda?
  M - Matutino
  V - Vespertino
  N - Noturno`);

switch(turno){
  case 'N':
    alert('Boa Noite!');
    break;
  case 'M':
    alert('Bom dia!');
    break;
  case 'V':
    alert('Boa tarde!');
    break;
  default:
    alert('Valor inválido');
}

// 12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
// programa que armazene a idade de uma pessoa e diga se ela pode
// doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
// (&&).

let idadeDoador = 60;

if(idadeDoador>= 18 && idadeDoador<=67){
  alert('Você pode doar sangue!');
}else{
  alert('Você não pode doar sangue!');
}

// 13. Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.

let intervaloNumerosImpar = 40;
let numerosImpares = '';

for(let i=1; i<=intervaloNumerosImpar; i++){
  if(i % 2 !== 0){
    numerosImpares += i + ' ';
  }
}
console.log(numerosImpares)

// 14. Leia um número, utilizando WHILE multiplique este número por 3
// enquanto a soma seja menor que 500 e no final mostre qual o
// último valor

let validador = true;
let somar = 0;

while(validador){
  let numeroParaLer = Number(prompt('Digite um numero:'));
  let multiplicacao = numeroParaLer * 3;
  somar += multiplicacao;
  if(somar >= 500){
    console.log(`O ultimo numero lido foi ${numeroParaLer}`);
    validador = false;
  }
}
// 15. Crie um algoritmo que armazene três valores, para cada um dos
// lados de um triângulo: A, B e C. Verifique se os lados fornecidos
// formam realmente um triângulo. Se formar, deve mostrar no console
// o tipo de triângulo: isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);

let ladoA = Number(prompt('Digite o valor do lado A'));
let ladoB = Number(prompt('Digite o valor do lado B'));
let ladoC = Number(prompt('Digite o valor do lado C'));

if(ladoA < ( ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA+ladoB) ){
  if(ladoA === ladoB && ladoB === ladoC){
    console.log('Triangulo Equilatero');
  }else if(ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
    console.log('Triangulo Escaleno');
  }else if(ladoA === ladoB || ladoB=== ladoC || ladoC===ladoA){
    console.log('Triangulo Isosceles');
  }
  }
else{
  console.log('Os lados não formam um triangulo');
}


// 16. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

let anoAtual =2024;
let anoNascimento = Number(prompt('Digite o ano de nascimento'));
if((anoAtual - anoNascimento)>=16){
  console.log('Pode votar');
}else{
  console.log('Não pode votar');
}

// 17. Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.

let qtEleitores = Number(prompt('Quantidade total de eleitores:'));
let qtVotosBranco = Number(prompt('Quantidade total de votos em branco:'));
let qtVotosNulos = Number(prompt('Quantidade total de votos nulos'));
let qtVotosValidos = Number(prompt('Quantidade total de votos validos:'));

if(qtEleitores >= (qtVotosBranco +qtVotosNulos + qtVotosValidos)){
  document.write(`<br>A quantidade de eleitores do Município é de ${qtEleitores}
    <br>A quantidade de votos validos foi de ${qtVotosValidos} cerca de ${qtVotosValidos * 100 / qtEleitores}%
    <br>A quantidade de votos em Branco foi de ${qtVotosBranco} cerca de ${qtVotosBranco * 100 / qtEleitores}%
    <br>A quantidade de votos Nulo foi de ${qtVotosNulos} cerca de ${qtVotosNulos * 100 / qtEleitores}%`)
    if(qtEleitores - (qtVotosBranco +qtVotosNulos + qtVotosValidos) > 0){
      document.write(`<br>A quantidade de pessoas que não foram votar foi de ${qtEleitores - (qtVotosBranco +qtVotosNulos + qtVotosValidos)} cerca de ${(qtEleitores - (qtVotosBranco +qtVotosNulos + qtVotosValidos))* 100 / qtEleitores}%`)
    }
}

// 18. Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:

// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.

let valorTabela = Number(prompt('Digite qual o valor de preço de tabela do produto'));
let parcelas = Number(prompt('Digite a quantidade de parcelas que o cliente vai usar'));

if(parcelas === 1){
    console.log(`O valor do produto será de R$${valorTabela - (valorTabela * 0.025)}`);
}else if(parcelas >=2 && parcelas <=5){
  console.log(`O valor do produto será de R$${valorTabela}`);
}else if(parcelas >=6 && parcelas <=10){
  console.log(`O valor do produto será de R$${valorTabela *1.06}`);
}else if(parcelas>=11 && parcelas <=15){
  console.log(`O valor do produto será de R$${valorTabela *1.13}`);
}else{
  console.lof('A quantidade de parcelas não atendido pelo estabelecimento')
}