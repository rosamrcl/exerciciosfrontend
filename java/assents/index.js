// function eBissexto(ano){
//     if ((ano%4==0)&&(ano%100!==0)||(ano%400===0)){
//         return true;
//     }
//     return false;
// }

//  let array = [2020, 2021,2022,2023,2024,2025,2026,2027,2028]
//  for (let i =0; i<array.length; i++){
//     if (eBissexto(array[i])){
//         console.log (`O ano ${array[i]} é Bisseto.`)
//     }
//  }




// function Tabuada(numero){
//     for(let i=1; i<=10;i++){
//         console.log(numero + "x" + i+ "="+numero*i)
//     }
// }

// function ParImpar(Array){
//     let contadores=[0,0]
//     for(let i=0; i<Array.length; i++){
//         if(Array[i]%2===0){
//             contadores[0]=contadores[0]+1
//         }else{
//             contadores[1]=contadores[1]+1
//         }
//     }
//         return contadores
// }
// console.log (Tabuada(3))
// console.log (ParImpar([1,2,6]))





// let numero=parseInt(prompt("Digite um número"))
// function statusNumero(numero){
//     if (numero<0){
//         return 'Negativo'
//     }else if (numero>0) {
//         return'Positivo'
//     } 
//     return'Zero'
// }
// console.log(statusNumero(numero))

// function media(notas){
    
//     let contador = 0
//     for (let i=0; i<notas.length ; i++) {
//         contador=contador+notas[i]
//     }
//     return contador/notas.length
// }

// let notas=[]

// for (let i=0; i<3; i++) {
//     let nota=parseFloat(prompt("Digite as notas:"))
//     notas.push(nota)
// }


// console.log(media(notas))



// let idade=parseInt(prompt("Digite sua idade:"))
// function statusIdade(idade) {
//     if (idade<12) {
//         return 'Criança'        
//     }else if (idade<=17) {
//         return 'Adolescente'
//     }else if (idade<64){
//         return 'Adulto' 
//     }else {
//         return 'Idoso'
//     }
// }
// // console.log (statusIdade(idade))
// alert (statusIdade(idade))



// Função
// let alunos = ['Britney', 'Beyonce', 'Rihanna']
// for (let i=0; i<alunos.length; i++) {
//     saudacao (alunos[i])
// }
// function saudacao (alunos) {
//     console.log (`Olá, ${alunos}, boa tarde`)
// }

// let alunos = ['Britney', 'Beyonce', 'Rihanna']
// for (let i=0; i<alunos.length; i++) {
//     console.log ("Olá, " +(alunos) [i], ",boa tarde")
// }
// console.log ("Tchau")


// function saudacao(nome){
//     return "Olá, "+ nome;
// }
// console.log (saudacao("Lana Del Rey"))


// Exibir a soma dos 100 primeiro númros pares
// let acumulador=0
// for(let i=1; i<=200; i++){
//     if (i%2===0)
//   acumulador=acumulador+i  
// }
// console.log(acumulador)

// calcular o perimetro de um pentagono
// let acumulador=0
// for(let i=1; i<5; i++){
//     let lado=prompt ("Digite o lado do pentagono")
//     acumulador=acumulador+parseFloat (lado)
// }
// console.log (acumulador)


// calcular quantos divisores um número possui

// let num=10
// let divisores=[]
// for (let i=num-1; i>0; i--){
//     if (num%i===0){
//         divisores.push(i)
//     }
// }
// console.log (divisores)



// Idade e altura de 5 pessoas. exibir a mais alta, mais baixa mais nova e mais velha
// let age=[]
// for (let i=0;i<5; i++) {
//     let idade= prompt ("Digite a idade:")
//     age.push (parseInt (idade))
// }
// let alt=[]
// for (let i=0;i<5; i++) {
//     let altura= prompt ("Digite a altura:")
//     alt.push (parseFloat (altura))
// }
// let maioridade=age[0]
// let menoridade=age[0]

// for (let x=0; x<age.length; x++){
//             if (maioridade<age[x]){
//                 maioridade=age[x]
//             }
//             if (menoridade>age[x]){
//                 menoridade=age[x]
//             }
// }  
// let maioraltura=alt[0]
// let menoraltura=alt[0]
// for (let y=0; y<alt.length;y++){
//         if (maioraltura<alt[y]){
//             maioraltura=alt[y]
//         }
          
//         if (menoraltura>alt[y]){
//             menoraltura=alt[y]
//         }
//     }
// console.log (maioridade)
// console.log (menoridade)
// console.log (maioraltura)
// console.log (menoraltura)


// Cacule a média de idade e diga qual a maior e menor idade
// let array=[]
// for (let i=0; i<5; i++) {
//     let idade=prompt ("Digite a idade:")
//     array.push (parseInt (idade))
// }

// let acumulador=0
// let maior=array[0]
// let menor=array[0]
// for (let x=0; x < array.length; x++){
//     if (maior<array[x]){
//         maior=array[x]
//     }
//     if (menor>array[x]){
//         menor= array[x]
//     }
//     acumulador=acumulador+array[x]
// }
// console.log (acumulador/array.length)
// console.log (maior)
// console.log (menor)


// Calcular média
// função push ela adiciona número na array 
// length conta a quatidade de elementos na array


// console.log(array)
// let media = (array[0]+ array[1]+array[2])/array.length
// if (media<6) {
// console.log (media+ ":Reprovado")
// } else{
//     console.log (media+ ": Aprovado")
//  }



// Somando de 1 a 100 usando for

// let acumulador=0
// for(let i=1; i<=100; i++){
//   acumulador=acumulador+i  
// }
// console.log(acumulador)


// Dizer quem é par ou impar na lista
// let par=0
// for (let n=1; n<100; n++) {
//     if (n%2===0)
        
// }
// console.log (n+par)
// let array=[4,7,15,20,326]
// let contadorPares=0
// let contadorImpar=0

// for (let indice=0;indice <array.length; indice++){
// if (array[indice]%2===0){
//     contadorPares=contadorPares+1    
// }else{ 
//     contadorImpar=contadorImpar+1
// }
// }
// console.log("par:" + contadorPares)
// console.log("impar:" + contadorImpar)

// ctrl; (para comentar)   length-conta quantos elementos tem numa array
// If (se)

// let n=prompt ("Digite o valor:")
// if (n<0)
// {
// console.log ("negativo")
// }
// else if (n>0) {
// console.log ("positivo")
// }
// else {
// console.log ("zero")
// }

// if eslse if (se senão)

// let p=prompt ("Escreva sua idade:")
// if(p<=12){
// console.log ("Criança")
// }
// else if(p<18)
// {
// console.log ("Adolescente")
// }
// else if(p<65) {
// console.log ("Adulto")
// }
// else {
// console.log ("Idoso")
// }
// Array (matriz)

// let array = [10,4,5]
// let media = (array[0]+ array[1]+array[2])/array.length
// if (media<6) {
// console.log (media+ ":Reprovado")
// } else{
//     console.log (media+ ": Aprovado")
// }

// Laços de repetição
// For
// for (let i=1; i <=10; i++) {
//     console.log (i)
// }

// While (enquanto)
// let i=1
// while (i<=10)
//     {
//     console.log (i);
//     i++;
// }
// console.log ("fim do loop")


// let n=prompt("digite um valor:")
// for (let i=1; i<=10; i++) {
// console.log(n*i)
// }


