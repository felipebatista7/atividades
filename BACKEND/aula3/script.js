//Escreva um algoritmo para ler uma temperatura em graus Celsius,
//calcular e escrever o valor correspondente em graus Fahrenheit.

let temperaturaCelcius = 40;
let temperaturaFahrenheit = ( temperaturaCelcius * 9/5) +32;
console.log(`A temperatura de ${temperaturaCelcius}ºC Celsius é igual a Fahrenheit ${temperaturaFahrenheit}ºF`)

//Crie um programa que peça um número de 1 a 7 e exiba o dia da
// semana correspondente utilizando a estrutura condicional switch.
let diaSemana =3;
switch (diaSemana) {
  case 1:
    console.log('Domingo');
    break;
  case 2:
    console.log('Segunda');
    break;
  case 3:
    console.log('Terça');
    break;
  case 4:
    console.log('Quarta');
    break;
  case 5:
    console.log('Quinta');
    break;
  case 6:
    console.log('Sexta');
    break;
  case 7:
    console.log('Sábado');
    break;
  default:
    console.log('Dia inválido');
    break;
}

// Crie um programa que peça um número e verifique se ele é positivo,
// negativo ou zero.

let numero = 5;
if (numero > 0) {
  console.log('O número é positivo');
} else if (numero <0){
  console.log('O número é negativo');
}else{
  console.log('O número é zero');
}

// O custo de um carro novo ao consumidor é a soma do custo de
// fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever um
// algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// o custo final ao consumidor.

let custoCarro = 150000;
let porcentagemDistribuidor = 0.28;
let impostos = 0.45;
let custoFinal = custoCarro + (custoCarro * porcentagemDistribuidor) + (custoCarro * impostos);

console.log(custoFinal);

// Desenvolva um algoritmo que faça o cálculo do índice de massa
// corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
// que digite sua altura, em seguida solicitar que digite seu peso e que
// lhe exiba o status. O status vai variar da seguinte forma:
// a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
// “Você está abaixo da faixa de peso ideal”;
// b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
// “Você está acima da faixa de peso ideal”;

// c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
// 24,99, o status a ser mostrado será “Você está dentro da faixa
// de peso ideal”.

let alturausuario = 1.75;
let pesoUsuario = 78;
let imc = pesoUsuario / (alturausuario * alturausuario);


if(imc < 18.5){
    console.log('Você está abaixo da faixa de peso ideal');
}else if(imc >= 18.5 || imc <24.99){
    console.log('Você está dentro da faixa de peso ideal');
}else if (imc >=24.99){
  console.log('Você está acima da faixa de peso ideal');
}else{
    console.log('Valor fora de parametro');
}


// Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
// a conta do usuário deve ser criada já com um saldo positivo. O
// usuário precisa informar a quantidade de dinheiro que deseja
// retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// menor do que o saldo. Cada saque eletrônico cobra uma taxa de
// R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
// certo com o saque, e se o usuário informar um valor maior que o
// saldo deve ser informado ao usuário que o mesmo não tem dinheiro
// suficiente em conta para realizar o saque.
// OBS: Na verificação se o valor do saque é maior que o saldo deve
// ser considerado e também contabilizado o valor da taxa a ser
// cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// da taxa do saque não pode ser maior que o saldo disponível.

let saldoConta = 500;
let valorSaque = Number(prompt(`Você possui R$${saldoConta} na sua conta
  Digite o valor a ser sacado`));
let taxaSaque =4.5

if(valorSaque>0 && valorSaque%5==0 && valorSaque < saldoConta){
  if(valorSaque + taxaSaque <= saldoConta || (valorSaque + taxaSaque) - saldoConta > 0){
    console.log(`Você sacou R$${valorSaque} e foi cobrada uma taxa de R$${taxaSaque}
      seu saldo final é de ${saldoConta - (valorSaque + taxaSaque)}`)
  }else{
    console.log('Você não tem dinheiro suficiente para realizar o saque')
  }
}else{
  console.log('Você não pode sacar esse valor')
}

//Faça um algoritmo que leia a idade e peso de um atleta e imprima
// a sua categoria, de acordo com a seguinte tabela:

let idadeAtleta = Number(prompt('Digite a idade do atleta:'));
let pesoAtleta = Number(prompt('Digite o peso do atleta:'));

switch(idadeAtleta > 0){
  case idadeAtleta<=12:
    console.log('Infantil');
    break;
  case idadeAtleta >=13 && idadeAtleta<=16:
    if(pesoAtleta <=40){
      console.log('Juvenil leve');
      break;
    }else{
      console.log('Juvenil pesado');
      break;
    }
  case idadeAtleta>=17 && idadeAtleta <=24:
    if(pesoAtleta <=45){
      console.log('Sênior leve');
      break;
    }else if (pesoAtleta >45 && pesoAtleta<=60){
      console.log('Sênior médio');
      break;
    }else{
      console.log('Sênior pesado');
      break;
    }
  default:
    console.log('Veterano');
    break;
}


//Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.

let velocidadeCarro = 91;
let valorMulta;

if(velocidadeCarro > 80){
  console.log(`Você foi multado no valore de R$${valorMulta = (velocidadeCarro - 80) * 5}`);
}