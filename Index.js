import { Cliente} from "./Cliente.js";
import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";


//Cria cliente
const cliente1 = new Cliente("Ricardo", 111111111111);
const cliente2 = new Cliente("Alice", 22222222222);

//Cria conta
const conta2 = new ContaCorrente(cliente2, 1001);
const conta1 = new ContaCorrente(cliente1, 1002);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1)


//// Operações
 conta1.depositar(0)
 conta1.depositar(500)
 conta1.transferir(0, conta2);
 conta1.sacar(100);
contaPoupanca.sacar(20);

contaSalario.depositar(100);
contaSalario.sacar(10);

// let valorSacado = 100;
const valorSacado = conta1.sacar(0);

//Chama contador
const numeroContaCorrente = ContaCorrente.numeroDeContas; 
const numeroContaPoupanca = ContaPoupanca.numeroDeContas;
/////

console.log(contaSalario);

//conta1.teste();
//contaPoupanca.teste();
//console.log(conta_1);