export class Conta{  //Classe "abstrata", não pode ser instanciada, só pode ser herdada.
    constructor(saldoInicial, cliente, agencia){
       
        if(this.constructor == Conta) { // Evita utilização dos objetos Conta diretamente
           throw new Error("Você não deveria instanciar um objeto do tipo conta diretamen");
        }
      
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
     
    }
////// Assessores ////////
    set cliente(novoValor){       // Asessor SET Manipula cliente apenas na classe ContaCorrente
        if(novoValor instanceof Cliente){  // Só aceita se for uma nova instância de cliente
         this._cliente = novoValor;
        }
         
     }
     
     get cliente(){ //Assessor GET Para pegar um valor do cliente
         return this._cliente;
  
     }
     
    // _saldo = 0; //Não é de boa prática acessar atributos com '_' de fora da classe.
      
     get saldo(){
         return this._saldo;
     }
    /////// Atributos e métodos ///////
        
    sacarX(valor){ //Metodo público da classe para sacar
        let taxa = 1; //Taxa para sacar
        return this._sacar(valor, taxa);
 
    }

    //Novo metodo sacar abstrato, vai forçar as contas herdadas a sobrescrever
    sacar(valor){
        throw new Error("O metodo sacar é abstrato");

    }

    _sacar(valor, taxa){       //Método privado da class para sacar

        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){ //parametros
            this._saldo -= valorSacado;
            return valorSacado;
        }
            return 0;

    }

    depositar(valor){
        this._saldo += valor;
    }


    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    teste(){
        console.log("Teste Conta");
    }

}