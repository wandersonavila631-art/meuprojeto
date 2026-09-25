const imgsDestaque = ["./assets/img/eFootball-2023-1.jpg", "assets/img/maxresdefault.jpg"]

let imagemAtual= 1;

const imagem = document.querySelector("#imagemDestaque")

setInterval(function (){
    imagemAtual++;
    if(imagemAtual >= imgsDestaque.length){
        imagemAtual = 0;
    }

    imagem.src = imgsDestaque[imagemAtual]
},2000)