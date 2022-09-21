export {cp}
import{cliente} from "./banco"
import{ banco } from "./banco";

class CP extends banco {

 mostrarContaPoupanca(): void {
    console.log (`o valor disponivel em sua conta poupanca é ${cliente.cp}`)
}
}
var cp = new mostrarCP();
 cp.mostrarCP();