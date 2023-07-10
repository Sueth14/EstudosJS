let cont = 0
let enter = ''

let name = prompt("Insira o nome da nave")

enter = prompt("Deseja entrar em dobra espacial?\n1- Sim\n2- Não")

while(enter == '1'){
    cont += 1
    enter = prompt("Deseja realizar a proxima dobra?\n1- Sim\n2- Não")
}

alert("Nave: " + name + "\nQuantidade de dobras: " + cont)