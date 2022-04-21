import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Dirtor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


///// Usuários
const cliente1 = new Cliente("Lais", 777777777, "a1234");
const diretor = new Diretor("Rodrigo", 10000, 1234567898);
const gerente = new Gerente("Magno", 5000, 44444444444);
diretor.cadastrarSenha("a123456");
gerente.cadastrarSenha("a1x234");



const gerenteLogado = SistemaAutenticacao.login(gerente, "a1x234");
const diretorLogado = SistemaAutenticacao.login(diretor, "a123456");
const clienteLogado = SistemaAutenticacao.login(cliente1, "a1234");


console.log(gerenteLogado, diretorLogado, clienteLogado);