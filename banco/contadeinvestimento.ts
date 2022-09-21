export {invest}
import{ banco } from "./banco";
import{ cliente } from "./banco";
class Invest extends banco {

    mostrarInvest(): void {

        console.log (`o seu valor investido é : ${cliente.invest}`)
}
}
var invest = new mostrarInvest();
 invest.mostrarInvest();