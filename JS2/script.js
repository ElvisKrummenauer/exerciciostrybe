// let clientesTrybeBank = ['Ada', 'John', 'Gus'];
// function novocliente(nome) {

//   if (typeof nome === 'string') {
//     clientesTrybeBank.push(nome);
//     return 'nome adicionado com susseco';
//   } else {
//     return "erro nome invalido";
//   }
// }
// console.log(novocliente(true));
// console.log(novocliente('krum'))
// console.log(novocliente('elvis'));
// console.log(clientesTrybeBank);
let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function removecliente(nome) {
  if (typeof nome === 'string') {
    let clienteencontrado = false
    for (let index = 0; index < clientesTrybeBank.length; index++) {
      if (nome === clientesTrybeBank[index]){
        clientesTrybeBank.splice(index, 1)
        clienteencontrado = true
        return 'cliente excluido'
      }
      if (clienteencontrado === true) {
        return 'cliente excluido'
        
      }else {
        return 'cliente nao encontrado'
      }
     else {
      return 'parametro invalido'
    }
    }
}
console.log(removeCliente(false)); // O parâmetro passado deve ser do tipo "string"!
console.log(removeCliente('Elvis')); // Cliente não encontrada(o)
console.log(removeCliente('Jonh')); // Cliente excluída(o) com sucesso.
console.log(clientesTrybeBank)