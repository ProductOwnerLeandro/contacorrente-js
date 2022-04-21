import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{ //C_Corrente está herdando fa Classe Conta através do extends
  
        static numeroDeContas = 0; //Contador com atributo estático para manter o número total

        //////////////  Construtor  ///////////

        constructor(cliente, agencia){
            super(0, cliente, agencia); //Super chama o contrutur da classe Conta
            ContaCorrente.numeroDeContas += 1; //Contador com atributo estático como um todo
        }
     
        /////// Operações /////////

        sacar(valor){ //Metodo , está sobrescreve o metodo da classe Conta
            let taxa = 1.1; //Taxa para sacar CC
            return this._sacar(valor, taxa); //Como é importado herda itens privados, podendo usar this ou super
        
        }
        
        teste(){
          //  super.teste();
            console.log("Teste C Corrente");
        }
    
    }