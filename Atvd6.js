let spaceship = prompt("Qual o nome de sua espaçonave?")

let newSpaceship = ""

let caractere1 = prompt("Qual caractere você deseja substituir?")

let caractere2 = prompt("Por qual caractere você deseja substituir?")

for( let car = 0; car < spaceship.length; car++ ){
    if(spaceship[car] == caractere1){
        newSpaceship += caractere2}

        else{
            newSpaceship += spaceship[car]
        }
}
alert("O novo nome da nave é: " + newSpaceship )