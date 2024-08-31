// 1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.

let accAuluno = 0;
let validador = true;
let idadeAluno=0;
do{
  let idade = Number(prompt('Digite a idade do aluno'));
  if(idade !== 999){
    idadeAluno += idade;
    accAuluno ++;
  }else{
    validador = false;
  }

}while(validador);

console.log(`Média de idade é de ${idadeAluno / accAuluno}`);

// 2. Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.

let totalHomensSalario = 0;
let totalMulheresSalario = 0;

do{
  let salario = Number(prompt('Digite o salário do funcionário'));
  let sexo = prompt('Digite o sexo do funcionário (M/F)');

  if(sexo === 'M'){
    totalHomensSalario += salario;
  }else if(sexo === 'F'){
    totalMulheresSalario += salario;
  }else{
    alert('Sexo não é M/F');
  }
}while(confirm('Deseja continuar ?'));

console.log(`Total de Salarios do sexo Masculino é de R$${totalHomensSalario},
  Total de Salarios do sexo Feminino é de R$${totalMulheresSalario}`);

// 3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

let valorInicial = Number(prompt('Digite o numero que vai inicializar'));
let valorFinal = Number(prompt('Digite o numero que vai finalizar'));
let incremento = Number(prompt('Digite o valor que vai incrementar'));

let contagem = '';

while(valorInicial <= valorFinal){
  contagem += valorInicial + ' ';
  valorInicial += incremento;
}

console.log(`${contagem}Acabou!`)

// 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto
// b. Mulheres ganham 13% de desconto

let nomeCliente = prompt('Digite o nome do Cliente');
let sexoCliente = prompt('Digite o sexo do Cliente (M/F)');
let valorCompras = Number(prompt('Digite o valor das compras'));

if(sexoCliente === 'M'){
  console.log(valorCompras - (valorCompras * 0.05));
}else if (sexoCliente === 'F'){
  console.log(valorCompras - (valorCompras * 0.13));
}else{
  console.log('Sexo não é M/F');
}

// 5. Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.

let kmPercorrer = Number(prompt('Digite quantos KM vão ser percorridos nessa viagem'));

if(kmPercorrer<=200){
  console.log(`O preço para ${kmPercorrer} será de R$${kmPercorrer * 0.5}`);
}else{
  console.log(`O preço para ${kmPercorrer} será de R$${kmPercorrer * 0.45}`);
}

// 6. Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m2. O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m2 = TERRENO POPULAR
// Entre 100m2 e 500m2 = TERRENO MASTER
// Acima de 500m2 = TERRENO VIP

let larguraTerreno = Number(prompt('Digite a largura do terreno em metros'));
let comprimentoTerreno = Number(prompt('Digite o comprimento do terreno em metros'));
let areaTerreno = larguraTerreno * comprimentoTerreno;

if(areaTerreno< 100){
  console.log(`A área do terreno é de ${areaTerreno}m2 e é um TERRENO POPULAR`);
}else if(areaTerreno>= 100 && areaTerreno<500){
  console.log(`A área do terreno é de ${areaTerreno}m2 e é um TERRENO MASTER`);
}else{
  console.log(`A área do terreno é de ${areaTerreno}m2 e é um TERRENO VIP`);
}