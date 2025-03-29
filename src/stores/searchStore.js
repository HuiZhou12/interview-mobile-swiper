import { defineStore } from 'pinia'
import { getCurrentInstance } from 'vue/dist/vue'

const { proxy } = getCurrentInstance()
export const useCounterStore = defineStore('search', {
    //data
    state: () => {
        return {
            searchHistory: [],
            activeTab: 'all',
            swiperData: []
        }
    },
    //method
    actions: {
    }     
})
