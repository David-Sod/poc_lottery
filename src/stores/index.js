import { reactive } from 'vue';

const state =  reactive(
    {
        counter:0,
    }
)

const methods = {
    decreaseCounter(){
        state.counter--;
    },
    increaseCounter(){
        state.counter++
    },
    reset(){
        state.counter=0
    }
}

export default {
    state,
    methods
}