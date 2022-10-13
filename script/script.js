const decoracoes = document.querySelector(".apresente_cartao");
const btn = document.querySelector(".btn-container");
const passosContainer = document.querySelector(".passos");
const addClass = [btn, passosContainer];

setTimeout(()=>{
    decoracoes.classList.add("off");
    addClass.forEach((item)=>{
        item.classList.add("ativo");
    })
}, 2000)

