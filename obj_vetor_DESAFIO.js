console.log('Aula: Objetos')

const alunos = [
    {
        nome: 'Carlos',
        nota: 2
    },

    {
        nome: 'Monique',
        nota: 10
    },

    {
        nome: 'Maria',
        nota: 5
    },

    {
        nome: 'Jane',
        nota: 7
    }

]

console.log( `Os alunos são ${alunos[0].nome}, ${alunos[1].nome}, ${alunos[2].nome} e ${alunos[3].nome}` )

console.log('--------------------------------')
console.log('DESAFIO 1-2')
console.log('--------------------------------')

/*onstrução e impressão de objetos
Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

Nome: Rocketseat

Cor: Roxo

Foco: Programação

Endereço:

Rua: Rua Guilherme Gembala
Número: 260
Obs.: Para armazenar os dados de endereço da empresa você pode criar objetos intercalados, por exemplo:

const usuario = {
  nome: "Diego",
  empresa: {
    nome: "Rocketseat"
  }
};
Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:

A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260*/

console.log('--------------------------------')
console.log('Desafio 1 - Objeto')

const empresa = {

    nome: 'RocketSeat',
    cor: 'roxo',
    foco: 'programação',
    endereço: { rua: 'Rua Guilherme Gembala',
                numero: '260'
    }

}

console.log ( `A Empresa ${empresa.nome} está localizada em ${empresa.endereço.rua} no número ${empresa.endereço.numero}` )

console.log('--------------------------------')
console.log('--------------------------------')
console.log('Desafio 2 - Vetor e Objetos')

/*Vetores e objetos
Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }
Por exemplo:

const objeto = {
  propriedade: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: "JavaScript", especialidade: "Web/Mobile" }
  ]
};
Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop*/

const programador = {
    
    nome: 'Carlos',
    idade: 28,
    tecnologias: [
        {   nomeTec: '.NET', 
            especialidade: 'Desktop'
        },

        {   nomeTec: 'JavaScript',
            especialidade: 'Web/Mobile'
        }
   
    ]   

}

console.log( `O Usuário ${programador.nome} tem ${programador.idade} e usa a tecnologia ${programador.tecnologias[0].nomeTec} na especialidade ${programador.tecnologias[0].especialidade} ` )


console.log('--------------------------------')
console.log('--------------------------------')

console.log( ' Aula: Funções e Métodos ' );

const alunosTurmaA = [

    {
        nome: 'Carlos',
        nota: 5
    },

    {
        nome: 'Monique',
        nota: 3
    },

    {
        nome: 'Maria',
        nota: 7
    },

    {
        nome: 'Jane',
        nota: 4
    },

    {
        nome: 'Fabricio',
        nota: 2
    }

]


const alunosTurmaB = [

    {
        nome: 'Thyco',
        nota: 6
    },

    {
        nome: 'Snoopy',
        nota: 2
    },

    {
        nome: 'Hercules',
        nota: 10
    },

    {
        nome: 'Zeus',
        nota: 8
    },

    {
        nome: 'Nina',
        nota: 11
    }

]

//SOLUÇÃO PROPOSTA EM AULA: 
/*
function calculaMedia(turma){

    return console.log( ( turma[0].nota + turma[1].nota + turma[2].nota + turma[3].nota + turma[4].nota ) / 5 )
}

const media1 = calculaMedia(alunosTurmaA) - 
const media2 = calculaMedia(alunosTurmaB)

function enviaMensagem(media,turma){

    if(media < 5){
        console.log( `A média da ${turma} foi ${media}, portanto, abaixo da média` )
        console.log( `Os alunos da ${turma} estão reprovados` )
    }else{

        console.log( `A média da ${turma} foi ${media}, portanto, acima da média ` )
        console.log( `Os alunos da ${turma} estao aprovados, parabéns!` )
    }

}

enviaMensagem(media1,'Turma A')
enviaMensagem(media2,'Turma B')
*/


calculaMedia1(alunosTurmaA, 'Turma A' )
calculaMedia1(alunosTurmaB, 'Turma B' )


function calculaMedia1(turma,nomeTurma){

        const media = ( turma[0].nota + turma[1].nota + turma[2].nota + turma[3].nota + turma[4].nota ) / 5
        
        return enviaMensagem(media,nomeTurma)

    
}


function enviaMensagem(media,turma){

    if(media < 5){
        console.log( `A média da ${turma} foi ${media}, portanto, abaixo da média` )
        console.log( `Os alunos da ${turma} estão reprovados` )
    }else{

        console.log( `A média da ${turma} foi ${media}, portanto, acima da média ` )
        console.log( `Os alunos da ${turma} estao aprovados, parabéns!` )
    }

}

console.log('--------------------------------')
console.log('--------------------------------')

console.log(' Aula: Estrutura de Repetição')

const TurmaA = [

    {
        nome: 'Carlos',
        nota: 5
    },

    {
        nome: 'Monique',
        nota: 3
    },

    {
        nome: 'Maria',
        nota: 7
    },

    {
        nome: 'Jane',
        nota: 4
    },

    {
        nome: 'Fabricio',
        nota: 2
    }

]


const TurmaB = [

    {
        nome: 'Thyco',
        nota: 6
    },

    {
        nome: 'Snoopy',
        nota: 2
    },

    {
        nome: 'Hercules',
        nota: 10
    },

    {
        nome: 'Zeus',
        nota: 8
    },

    {
        nome: 'Nina',
        nota: 11
    }

]


calculaMedia(TurmaA, 'Turma A' )
calculaMedia(TurmaB, 'Turma B' )


function calculaMedia(turma,nomeTurma){

    let media = 0

    for(let c = 0 ; c < turma.length ; c ++ ){

         media = media += turma[c].nota
        
    }
    
    const mediaFinal = media / turma.length
            
        return enviaMensagem(mediaFinal,nomeTurma)
    
}

console.log('--------------------------------')
console.log('--------------------------------')
console.log(" DESAFIO 1-3 - Funções e Estruturas de Repetição")

/*
Usuários e tecnologias
Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];
Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

Carlos trabalha com HTML, CSS
Jarmine trabalha com JavaScript, CSS
Tuane trabalha com HTML, Node.js*/

const usuarios = [

    { nome: 'Carlos' , tecnologias: [ 'HTML' , 'CSS' ] },
    { nome: 'Monique' , tecnologias: [ 'JavaScript' , 'CSS'] },
    { nome: 'Jane' , tecnologias: [ 'HTML' , 'Node.Js'] }

]

    for (let c = 0 ; c < usuarios.length ; c ++){

        console.log( ` O usuário ${usuarios[c].nome} trabalha com as tecnologias ${usuarios[c].tecnologias}.` )

    }

    console.log('--------------------------------')
    console.log('--------------------------------')
    console.log( ' BUSCA POR TECNOLOGIA ')

    /*Busca por tecnologia
Baseado no desafio anterior, utilize a mesma lista de usuários construída.

Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

Por exemplo:

function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false
}
Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário:*/

function buscaTecnologia(usuarios,tecnologia){

    for( let c = 0 ; c < usuarios.length ; c ++ ){

        for( let x = 0 ; x < usuarios[c].tecnologias.length ; x ++ ){

            if( usuarios[c].tecnologias[x] == tecnologia){

            console.log( ` O usuário ${usuarios[c].nome}, possui conhecimento em ${usuarios[c].tecnologias[x]} ` ) ;

            }          

        }
    
    }      
    
}

buscaTecnologia(usuarios,'CSS')

console.log('--------------------------------')
console.log('--------------------------------')
console.log(' DESAFIO - Despesas e Receitas' )

/*
Soma de despesas e receitas
Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

Utilize o array de usuários abaixo:

const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];
Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:

function calculaSaldo(receitas, despesas) {}
Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:

function somaNumeros(numeros) {
  // Soma todos números dentro do array "numeros"
}
A função calculaSaldo deve utilizar a função somaNumeros para calcular a soma de receitas e despesas e no fim retornar o saldo do usuário, ou seja receitas - despesas.

No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO:

Fulano possui saldo POSITIVO de 43.3
Sicrano possui saldo NEGATIVO de -90.3*/



const usuariosDS = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

     for (let u = 0 ; u < usuariosDS.length ; u ++ ){

        console.log( `${usuariosDS[u].nome}:` )
        calculaSaldo(usuariosDS[u].receitas , usuariosDS[u].despesas)
        console.log('---------------------------------------')

     }

     function calculaSaldo(receitas,despesas){

        const saldoPositivo = somaNumeros(receitas)
        const saldoNegativo = somaNumeros(despesas)
        const saldoFinal = saldoPositivo - saldoNegativo

            if(saldoFinal == 0){
            
                console.log( `O seu saldo final é ${saldoFinal}` )

            }else{

                if(saldoFinal < 0){

                    console.log( `Você possui um saldo NEGATIVO de ${saldoFinal}` )
                
                }else{

                    console.log( `Você possui um saldo POSITIVO de ${saldoFinal}` )
               
                }
            }

     }

     function somaNumeros(numeros){

        let soma = 0;

        for(let c = 0 ; c < numeros.length ; c ++){

            soma = soma + numeros[c]
        }

        return soma;
     } 