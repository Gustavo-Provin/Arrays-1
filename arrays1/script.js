//1. Criar um array e percorrê-lo utilizando o loop for
//a. Crie um array com o nome "nomes" e adicione 4 nomes de
//pessoas que você conhece
//b. Utilize o loop for para percorrer o array e exibir os nomes na
//tela

let nomes = ["Claudiomir ", "Claudia ", "Claudio ", "Claudete"]

for (let i = 0; i < nomes.length; i++) {
    document.write(nomes[i])
}

document.write('</br></br>')

for (let nome of nomes){
    document.write(nome)
}

document.write('</br></br>')

//2. Criar um array e percorrê-lo utilizando o loop for of
//a. Crie um array com o nome "numeros" e adicione 5 números de
//sua escolha
//b. Utilize o loop for of para percorrer o array e exibir a soma dos
//números na tela

let numeros = [6, 18, 11, 13]

for (let numero of numeros){
    document.write(numero)
    document.write('</br>')
}

document.write('</br></br>')

//3. Utilizar os métodos push, pop, unshift e shift para manipular um
//array
//a. Crie um array com o nome "frutas" e adicione 3 tipos de frutas
//de sua escolha
//b. Utilize o método push para adicionar uma fruta no final do
//array
//c. Utilize o método pop para remover a última fruta do array
//d. Utilize o método unshift para adicionar uma fruta no início do
//array
//e. Utilize o método shift para remover a primeira fruta do array
//f. Exiba o array resultante na tela

let frutas = ['Jabuticaba ', 'Melância ', 'Bergamota '];
document.write("Array inicial das frutas:", frutas);
document.write('</br></br>')

frutas.push('Açaí');
document.write("Após adicionar o Açaí:", frutas);
document.write('</br></br>')

let ultimaFrutaRemovida = frutas.pop();
document.write("Fruta removida:", ultimaFrutaRemovida);
document.write('</br></br>')
document.write("Array após remover:", frutas);
document.write('</br></br>')

frutas.unshift('Tomate');
document.write("Após adicionar o Tomate:", frutas);
document.write('</br></br>')

let primeiraFrutaRemovida = frutas.shift();
document.write("Fruta removida:", primeiraFrutaRemovida);
document.write('</br></br>')
document.write(" Array resultante:", frutas);