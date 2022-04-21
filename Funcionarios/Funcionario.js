export class Funcionario{
        constructor(nome, salario, cpf){
            this._nome = nome;
            this._salario = salario;

            this._cpf = cpf;
            this._bonificacao = 1;
            this._senha;
        }

/*
        get senha(){        //Acessor para manter o metodo senha privado
            return  this._senha

        }
*/
        autenticar(senha){      //Método que Substitui o get acima
            return senha == this._senha;
        }
//////
        cadastrarSenha(senha){ //Metodo cadastra senha
            this._senha = senha;

        }

}