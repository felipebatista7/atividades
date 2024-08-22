// 1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

let alturaPessoas;
let alturaMaior = 0;
let alturaMenor = 999;

for(let i =1; i<=5;i++){
  alturaPessoas = Number(prompt(`Digite a altura da ${i} pessoa`));
  if(alturaPessoas > alturaMaior){
    alturaMaior = alturaPessoas;
  }else if(alturaMenor > alturaPessoas){
    alturaMenor = alturaPessoas;
  }
}

console.log(`Altura da maior pessoa é ${alturaMaior}
  A altura da menor pessoal é ${alturaMenor}`);

// 2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.
let alturaPedro = 1.50;
let alturaLucas = 1.10;
let anos = 0;
while(true){
  alturaPedro += 0.02;
  alturaLucas += 0.03;
  anos++;
  if(alturaPedro === alturaLucas){
    console.log(`Em ${anos} Pedro e Lucas estão com a mesma altura, ${alturaLucas}m`);
  }
  if(alturaLucas > alturaPedro){
    console.log(`Lucas demorou ${anos} anos para passar de Pedro, ficou com ${alturaLucas}`)
    break;
  }
}

// 3. Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ...

let numero = 5
for(let i = 1; i<=10;i++){
  console.log(`${numero} x ${i} = ${numero*i}`);
}

// 4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
// e verifique quais números são múltiplos de 3 e quais são múltiplos
// de 5.

let multiploTres= '';
let multiploCinco= '';

for(let i = 1; i<=250; i++){
  if(i % 3 === 0){
    multiploTres += `${i} `;
  }
  if(i % 5 === 0){
    multiploCinco += `${i} `;
  }
}

console.log(`Multipos de 5: ${multiploCinco}

  Multiplos de 3: ${multiploTres}`)

// 5. Faça um programa usando a estrutura “for” que leia um número
// inteiro positivo e mostre na tela uma contagem de 0 até o valor
// digitado:
// Ex: Digite um valor: 9
// Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!

let numeroDigitado = parseInt(prompt('Digite um numero inteiro positivo'));
let contagem = ''
for(let i = 0; i <= numeroDigitado; i++){
  contagem += i + ', '
}
document.write(`Contagem: ${contagem}FIM`)

// 6. Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

document.write('<br>')

for(let i=30; i>=1; i--){
  let primo = true;
  for(let j=2; j<i; j++){
    if(i % j === 0){
        primo = false;
        break;
        }
    }
  if(primo){
    document.write(`[${i}] `)
      }else{
        document.write(`${i} `)
      }
}

// 7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.
let soma = 0;
let positivos = 0;
let negativos = 0;

for(let i = 1; i<=10;i++){
  let numeros = parseInt(prompt(`Digite o ${i}º número`));
  soma += numeros;
  if(numeros > 0){
    positivos++;
  }
  if(numeros < 0){
    negativos++;
  }
}

console.log(`A média dos numeros é ${soma/10}`);
console.log(`A quantidade de numeros positivos é ${positivos}`);
console.log(`A quantidade de numeros negativos é ${negativos}`);
console.log(`O percentual de numeros positivos é ${(positivos/10)*100}%`);
console.log(`O percentual de numeros negativos é ${(negativos/10)*100}%`);
