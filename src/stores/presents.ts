import {defineStore, storeToRefs} from "pinia";
import getPresents from "@/http/getPresents";
import {computed, ref} from "vue";
import {useSearchStore} from "@/stores/search";

export const usePresentStore = defineStore('present', () => {
    const presents = ref<Present[]>([])
    const searchStore = useSearchStore();
    const filteredPresents = computed( () => {
        const {searchParam} = storeToRefs(searchStore)

        console.log("valor interno ao filtro: " + searchParam)

        if(searchParam.value === '') {
            return presents.value
        }
        console.log('if 2')
        return presents.value.filter(
            present =>
                present.name.toLowerCase()
                    .startsWith(searchParam.value.toLowerCase()))
    })

    async function setPresent(): Promise<void> {
        if(presents.value.length === 0) {
            presents.value = await getPresents()
        }
    }

    function getPresent(): Present[] {
        return presents.value
    }

    return {setPresent, getPresents, filteredPresents}
})