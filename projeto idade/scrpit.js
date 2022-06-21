function verificar() {
    let dia = new Date()
    let ano = dia.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0  || Number(fano.value) > ano) {
        window.alert('verefique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radesex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
    
    
        if ( fsex[0].checked ) { 
    genero = 'Homem'
    if (idade >= 0 && idade <= 12 ) {
        //criança
        img.setAttribute('src','menino.png')
    } else if (idade >= 13 && idade < 21) {
        //jovem
        img.setAttribute('src','jovem.png')
    }
    else if (idade > 22 && idade < 50) {
        //adulto
        img.setAttribute('src','adulto.png')
    }
    else {
        //idoso
        img.setAttribute('src','idoso.png')
    }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12 ) {
                //criança
                img.setAttribute('src','menina.png')
            } else if (idade >= 13 && idade < 21) {
                //jovem
                img.setAttribute('src','jovemmulher.png')
            }
            else if (idade > 22 && idade < 50) {
                //adulto
                img.setAttribute('src','mulher.png')
            }
            else {
                //idoso
            img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = 'center'
         res.innerHTML = `detectamos: ${genero} com ${idade} anos.`
         res.appendChild(img)
        }

    

}
