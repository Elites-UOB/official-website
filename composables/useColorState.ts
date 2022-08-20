import { Ref } from "nuxt/dist/app/compat/vue-demi"

type textState = {
    number: Number,
    text: String
}

export default () => {
    const states: Ref<textState[]> = ref([])

    const textColor = (state: Number) => {
        switch (state){
            case 1:
                return 'text-success'
            case 2:
                return 'text-warning'
            case 3:
                return 'text-error'
        }
    }

    const bgColor = (state: Number) => {
        switch (state){
            case 1:
                return 'bg-success'
            case 2:
                return 'bg-warning'
            case 3:
                return 'bg-error'
        }
    }
    
    const stateText = (state: Number) => {
        return states.value.find(_state => _state.number == state)?.text
    }

    return { textColor, bgColor, stateText, states }
}