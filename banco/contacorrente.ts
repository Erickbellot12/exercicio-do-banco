export {cc}
import{cliente} from "./banco";
import{banco } from "./banco";

class CC extends banco {

mostrarCC(): void {
        console.log (` o valor disponivel em sua conta corrente é ${cliente.cc}`)
}
}
 var cc = new mostrarCC();
 cc.mostrarCC();