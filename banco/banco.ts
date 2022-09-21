export {cliente}
export class banco {
    sd: number;
    cc: number;
    cp: number;
    invest: number;
    mostrarsSd(): void {
        
   console.log (`o saldo do cliente  é ${cliente.sd}`);
         }
   mostrarCC(): void {
    console.log (` O valor disponivel em sua conta corrente é ${cliente.cc}`)
   }
   mostrarCP(): void {
    console.log (` O valor disponivel em sua conta poupanca é ${cliente.cp}`)
}
mostrarInvest(): void {
    console.log (`o o seu valot investido é : ${cliente.invest}`)
}
} 
 var cliente = new banco();
 cliente.cc = 20
 cliente.cp = 30
 cliente.sd =50
 cliente.invest = 100;
 