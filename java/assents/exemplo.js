function adcionarElemento() {
    let conteudo=document.createElement("p");
    if(document.getElementsByClassName ("conteudo").length>3){
        conteudo.setAttribute ("class", "conteudo");
    }
    
    conteudo.innerHTML="Adcionei um elemento";
    let container = document.querySelector(".container");
    container.appendChild(conteudo);
}

function removeElemento(){
    let container = document.querySelector (".container")
    let conteudo = container.getElementsByTagName("p")
     if(conteudo.length>0){
         let ultimoElemento = conteudo [conteudo.length-1];
         container.removeChild(ultimoElemento)
          }
 }
 


// function mudarCorTitulo (){
//     const titulo = document.getElementById("titulo")
//     const paragrafo = document.getElementById("paragrafo")
//     titulo.setAttribute ("style","color: red")
//     paragrafo.setAttribute("class","paragrafo-azul")
// }
// function negrito(){
//     const spanTeste = document.querySelector(`.negrito`)
//     spanTeste.setAttribute (`style`, `font-weight:bold`)
// }
// function normal (){
//     const spanTeste = document.querySelector (`.negrito`)
//     spanTeste.setAttribute (`style`, `font-weight:100`)
// }

// function TestQueries(){
//     const elementos=document.getElementsByTagName ("h1")
//     // console.log(elementos)
//     for(let i=0; i<elementos.length; i++){
//         let titulo= document.querySelector (`.elemento${i+1}`)
//         titulo.innerHTML=`elemento${i+1}`
//         console.log (titulo)
//     }
// }



// function mudarTitulo (){
//     let elemento=document.getElementById ("titulo")
//     elemento.innerHTML="Curiosinho você"
// }


// function mudarTitulo(){
//     let elemento=document.querySelector ("#titulo")
//     elemento.innerHTML = "Curiosinho você"
// }



// function clickBotao(){
//     //let titulo = document.getElementById ("titulo")
//     let paragrafo =document.getElementById ('paragrafo')
//     titulo.innerHTML= "Cliquei no botão"
//     paragrafo.innerHTML="<p>Lorem Ipsum...</p>"
// }

// let div=document.getElementById("div1")
// console.log(div)