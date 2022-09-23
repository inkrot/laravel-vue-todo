import {createStore} from 'vuex'

import TodosModule from "@/store/modules/todos";

const store = createStore({
    modules: {
        TodosModule,
    },
    state: () => ({

    }),
    getters: {},
    mutations: {},
    actions: {},
})

export default store
