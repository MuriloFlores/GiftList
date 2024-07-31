import {defineStore} from "pinia";
import {ref} from "vue";

export const useSearchStore = defineStore("SearchStore", () => {
    const searchParam = ref("")

    function setSearchParam(key: string) {
        searchParam.value = key;
        console.log("valor interno a store: " + searchParam.value)
    }

    return {searchParam, setSearchParam}
})