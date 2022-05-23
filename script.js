let escolha = document.querySelector('.escolha-usuario')
let areaJogo = document.querySelector('.area-jogo')

let imgUsuario = document.querySelector('#img-usuario')
let imgComputador = document.querySelector('#img-computador')

let textoResultado = document.querySelector('#resultado')
let textoPontuacao = document.querySelector('#pontuacao')
let pontuacao = 0

let escolhaComputador
let opcoes = ['pedra', 'papel', 'tesoura']

function geraEscolhaComputador() {
    let numeroEscolha = Math.floor(Math.random() * 3)
    escolhaComputador = opcoes[numeroEscolha]
}

function iniciaJogo(escolhaUsuario) {

    escolha.classList.add('inativo')
    areaJogo.classList.remove('inativo')

    geraEscolhaComputador()

    if (escolhaComputador == 'pedra') {
        imgComputador.src = 'img/pedra.png'
        
        if (escolhaUsuario ==  'pedra') {
            imgUsuario.src = 'img/pedra.png'
            textoResultado.textContent = 'EMPATOU!'
        }

        if (escolhaUsuario ==  'papel') {
            imgUsuario.src = 'img/papel.png'
            textoResultado.textContent = 'VOCÊ GANHOU!!!'
        }

        if (escolhaUsuario ==  'tesoura') {
            imgUsuario.src = 'img/papel.png'
            textoResultado.textContent = 'VOCÊ PERDEU...'
        }
    }

    if (escolhaComputador == 'papel') {
        imgComputador.src = 'img/papel.png'

        if (escolhaUsuario ==  'pedra') {
            imgUsuario.src = 'img/pedra.png'
            textoResultado.textContent = 'VOCÊ PERDEU...'
        }

        if (escolhaUsuario ==  'papel') {
            imgUsuario.src = 'img/papel.png'
            textoResultado.textContent = 'EMPATOU!'
        }

        if (escolhaUsuario ==  'tesoura') {
            imgUsuario.src = 'img/tesoura.png'
            textoResultado.textContent = 'VOCÊ GANHOU!!!'
        }
    }

    if (escolhaComputador == 'tesoura') {
        imgComputador.src = 'img/tesoura.png'

        if (escolhaUsuario ==  'pedra') {
            imgUsuario.src = 'img/pedra.png'
            textoResultado.textContent = 'VOCÊ GANHOU!!!'
        }

        if (escolhaUsuario ==  'papel') {
            imgUsuario.src = 'img/papel.png'
            textoResultado.textContent = 'VOCÊ PERDEU...'
        }

        if (escolhaUsuario ==  'tesoura') {
            imgUsuario.src = 'img/tesoura.png'
            textoResultado.textContent = 'EMPATOU!'
        }
    }

    atualizaPlacar()
}

function voltaInicio() {
    escolha.classList.remove('inativo')
    areaJogo.classList.add('inativo')
}

function atualizaPlacar() {
    if (textoResultado.textContent == 'VOCÊ GANHOU!!!') {
        pontuacao +=1
    }

    if (textoResultado.textContent == 'VOCÊ PERDEU...') {
        pontuacao -=1
    }

    if (pontuacao < 0) {
        pontuacao = 0
    }
    
    textoPontuacao.textContent = pontuacao
}
