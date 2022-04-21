import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{  //C_Poupanca está herdando fa Classe Conta através do extends, 
                                            //no caso do constrututor usando o método super
    
    static numeroDeContas = 0; //Contador com atributo estático para manter o número total

    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
        ContaPoupanca.numeroDeContas += 1; //Contador com atributo estático como um todo
           
    }



    sacar(valor){ //Metodo , está sobrescreve o metodo da classe Conta
       const taxa = 1.02 //Taxa para sacar Cnta Poupanca
        return this._sacar(valor, taxa); //Como é importado herda itens privados, podendo usar this ou super
    
    }

    teste(){
        super.teste();
        console.log("Teste C Poupanca");
    }


}