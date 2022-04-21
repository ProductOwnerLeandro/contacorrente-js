import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
export class Cliente{ //Class é um molde
    //nome;       //Abaixo são os atributos
   // _cpf;
   
  
    get cpf(){
       return this._cpf;
    }

    constructor(nome, cpf, senha){ // Contrutor atributo especial vai atribuir os parametros ao objeto
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;

    }

    autenticar(senha){
        return senha == this._senha;
    }

}