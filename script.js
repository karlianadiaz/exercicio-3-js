function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    // ...
}

function verificaMaisVelho(pessoas) {
    let maiorIdade;  // undefined
    let pessoaMaisVelha;

    for (let pessoa of pessoas) {
        if (typeof maiorIdade == 'undefined') {
            maiorIdade = pessoa.idade
            pessoaMaisVelha = pessoa
        } else {
            if (pessoa.idade > maiorIdade) {
                maiorIdade = pessoa.idade
                pessoaMaisVelha = pessoa
            }
        }
    }

    return pessoaMaisVelha
}

// function checaCoresFavoritas()

function listaRegistros(registros) {
    // for (let registro of registros) {

    // }
    console.log('Esses são os registros que foram feitos:')
    registros.forEach( registro => {
        console.log(`${registro.nome} possui ${registro.idade} anos`)
    } )
}

let registros = []

while (true) {
    
    // pega os dados
    let nome = prompt("Digite o nome")
    let idade = prompt("Digite a idade")
    idade = Number(idade)

    // cria o registro
    let pessoa = new Pessoa(nome, idade)

    // guarda o registro
    registros.push(pessoa)

    let resposta = prompt("Deseja registrar outra pessoa? ")
    if (resposta == 'n' || resposta == 'não') {
        break;
    }
}

listaRegistros(registros)
let maisVelho = verificaMaisVelho(registros)
console.log(`A pessoa mais velha é ${maisVelho.nome} com ${maisVelho.idade} anos`)

