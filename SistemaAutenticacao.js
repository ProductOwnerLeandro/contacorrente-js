/*
Ser autnticável significa ter o método autenticar
Duck type - Maneira e usar propriedaes em objetos diferentes
*/
export class SistemaAutenticacao{
    static login(autenticavel, senha){  //Metodo estático login
        
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            
            return autenticavel.autenticar(senha);
        }
            return false;
       
    }
    static ehAutenticavel(autenticavel){ // Tratamento de erro se uma chave existe dentro de um objeto
        return "autenticar" in autenticavel && // Uso de operador in e operador instanceOf
        autenticavel.autenticar instanceof Function;
    }
}