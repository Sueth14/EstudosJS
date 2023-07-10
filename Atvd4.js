let distance = prompt("Insira uma distancia em anos-luz: ")

let option = prompt("Escolha uma unidade para conversão:\n1- Parsec(pc)\n2- Unidade astronônima(AU)\n3- Quilômetros(km)")

let name

let value

switch(option){
    case '1':
        name = 'Parsec(pc)'
        value = (distance * 0.306601)
        break
    case '2':
        name = 'Unidade astronônima(AU)'
        value = (distance * 63241.1)
        break
    case '3':
        name = 'Quilômetros(km)'
        value = distance * Math.pow(10,12)
        break
    default:
        name = "Unidade não indentificada"
        value = "Conversão fora do escopo"
}

alert("Distancia em anos luz:" + distance + "\n" + name + ": " + value)