export {sd}
import { cliente } from "./banco";  
import{ banco } from "./banco";

class SD extends banco {

mostrarConta(): void {
    console.log (`o saldo do cliente  é ${cliente.sd}`);
}
}
var sd = new mostrarSD();
 sd.mostrarSD();