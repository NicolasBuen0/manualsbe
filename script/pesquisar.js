const teclas = document.querySelectorAll(".grid")
const input = document.querySelector(".campo")
const linhas = document.querySelector(".linhas")

function digitaCampo(event){
    const elemento = event.target
    if(elemento.innerText === "CLR"){
        input.innerText = "" 
    }
    else{
        input.innerText += elemento.innerText
        linhas.style.display="flex";
    }
   
    console.log()
}

teclas.forEach((item)=>{
    item.addEventListener("click", digitaCampo)
})

