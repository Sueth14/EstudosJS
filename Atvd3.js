let nome = prompt('Insira o nome do piloto aqui:')
let velocidade = 0
let acelerar = prompt('A que velocidade você gostaria de acelerar a nave')
let confirmar = confirm('A velocidade esta aumentando para ' + acelerar + ' km/h')

if(confirmar == true) {
    velocidade = acelerar
}

if(velocidade <= 0){
    alert('Nave está parada. Considere partir e aumentar a velocidade')
} else if(velocidade < 40){
    alert('Você está devagar, podemos aumentar mais')
} else if(velocidade < 80) {
    alert('Parece uma boa velocidade para se manter')
} else if(velocidade < 100){
    alert('Velocidade alta considere diminuir')
}else if (velocidade > 100){
    alert('Velocidade perigosa. Controle automático ativado')
}

alert('Nome do piloto: ' + nome + '\nVelocidade atual: ' + velocidade + ' km/h')