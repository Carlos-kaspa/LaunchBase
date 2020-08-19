console.log('---------------------------')
console.log('Exercício: Fazendo Cálculos com JS')


// crie um programa que calcula a média
// das notas entre os alunos e envia mensagem
// do cálculo da média

const aluno01 = 'carlos';
    const nota01 = 3;
const aluno02 = 'monique';
    const nota02 = 0;
const aluno03 = 'jane';
    const nota03 = 0;
const aluno04 = 'maria';
    const nota04 = 8;
const aluno05 = 'fabricio';
    const nota05 = 7;

    
    const mediaAlunos = ( nota01 + nota02 + nota03 + nota04 + nota05 )/5;

    
    console.log(` A média das notas dos alunos: ${aluno01}, ${aluno02}, ${aluno03}, ${aluno04} e ${aluno05} é ${mediaAlunos}.`)
    console.log('---------------------------')

    console.log('---------------------------')
    console.log('Aula: Condicionais')
    
// se a média da turma for maior que 5, parabenizar a turma

var mensagem = 'a';
if ( mediaAlunos > 5 ) {
    var mensagem = 'Parabéns pelo esforço!'}else
    {var mensagem = 'Precisam se esforçar mais!'};

    /* ou conforme proposto em aula:
    if (mediaAulos > 5){
        console.log( ` A média da turma foi ${mediaAlunos}. Parabéns`)
    }else{ 'A média da turma foi menor que 5, precisam se esforçar mais' }. */



console.log(mensagem)
console.log('---------------------------')
console.log('---------------------------')
console.log( 'Aula: Operadores Relacionais e Comparativos')

// DESAFIO 1 
// verificar se a pessoa é maior que 18
// se sim, deixar entrar, se não, bloquear entrada

const idade = 18;
if ( idade >= 18 ){
    console.log( 'Deixar entrar')
}else{ 
    if ( idade == 17 )
        console.log( 'Volte quando completar 18')
            if( idade < 17 )
                console.log( 'Bloquear entrada' )
     }

 console.log('---------------------------')
 console.log('---------------------------')
 




