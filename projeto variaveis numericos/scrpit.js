function carregar() {

let msg = document.getElementById('msg')
let img = document.getElementById('imagem')
let data = new Date() //pegar a data
let hora = data.getHours() // pegar hora local
msg.innerHTML = `Agora sao ${hora} horas.` //escrever oque quero
if (hora  >= 0 && hora < 12 ) {// bom dia
    img.src = 'manha.png'
    document.body.style.background = '#f2edc8'
} else if (hora >= 12 && hora < 18){//boa tarde 
    img.src = 'tarde.png'
    document.body.style.background = '#b8d0f7' // aplicar igual ao hmtl
} else {
    //boa noite
    img.src = 'noite.png' //pegar a imagem .png
    document.body.style.background = '#64405c'
}
}