


const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  };

accountTransaction(user)

console.table(user)

console.log('the highest transaction by type were:')
console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))

console.log('the average transaction value is:')
console.log(getAverageTransactionValue())

console.log('the transaction count is:')
console.log(getTransactionCount())



// TRANSAÇÕES
 function createTransaction(user) {

    user.transactions.push ( //ABERTURA DO MÉTODO PUSH

        {

            type: 'credit',
            value: 30

        },

        {

            type: 'debit',
            value: 200
    
        },

        {

            type: 'credit',
            value: 100
    
        }


    ) //FECHAMENTO DO METODO PUSH

    
 }

 function accountBalance(user){

    for(let c = 0 ; c < user.transactions.length ; c ++ ) {
        if( user.transactions[c].type == 'credit' ){
                       
            user.balance = user.balance + user.transactions[c].value 
            
        }
    }
    
    for(let c = 0 ; c < user.transactions.length ; c ++ ){
        if(user.transactions[c].type == 'debit'){
           
            user.balance = user.balance - user.transactions[c].value
            
        }

    }

 }

 function accountTransaction(user){ //função para calcular movimentação e atualizar saldo

    createTransaction(user)
    accountBalance(user)
   
 } 

 
//RELATÓRIOS
 function getHigherTransactionByType(type){

    let higherTransaction;
    let highestValue = 0 ;

    for(let transaction of user.transactions){

        if(transaction.type == type && transaction.value > highestValue ){

            highestValue = transaction.value;
            higherTransaction = transaction;
        }
    

    }

    return higherTransaction
 }
 
 function getAverageTransactionValue(){

    let avgT = 0;
    let sum = 0;

    for(let transaction of user.transactions){
        
        sum = sum + transaction.value

    }

    avgT = sum / user.transactions.length;
    
    return avgT;
 }
 

 function getTransactionCount(){

    let transactionCount =  {

                                Credit: 0,
                                Debit: 0

                            } 

    for(transaction of user.transactions)
        if(transaction.type == 'credit'){

            transactionCount.Credit ++

        }else{

            transactionCount.Debit ++
        }

        return transactionCount
 }