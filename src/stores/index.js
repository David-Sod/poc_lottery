import { reactive } from 'vue';
import { Decimal } from '@cosmjs/math'

const state =  reactive(
    {
        balance:'',
        signingClient: null,
        loading:false,
        fromInput:'',
    }
)

const methods = {
    setBalance(balance){
        state.balance = balance;
    },
    setSigningClient(signing){
        state.signingClient = signing;
    },
}
const getters = {
    humanBalance(){
        if(!state.balance) return '';
        return Decimal.fromAtomics(state.balance,6);
    }
}
export default {
    state,
    methods,
    getters
}