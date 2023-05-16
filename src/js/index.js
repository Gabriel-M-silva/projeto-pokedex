const botaoAlterarTema =document.getElementById("botao-alterar-tema");
const body=document.querySelector("body");
const imgBotaoAlterarTema = document.querySelector(".imagen-botao");

botaoAlterarTema.addEventListener("click",()=>{
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");
    if(modoEscuroAtivo) {imgBotaoAlterarTema.setAttribute("src","./src/imagens/sun.png");}
    else{ imgBotaoAlterarTema.setAttribute("src","./src/imagens/moon.png");}
    });

