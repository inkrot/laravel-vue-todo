import {createStore} from 'vuex'

import TodoItemsModule from "@/store/modules/todo-items";

const store = createStore({
    modules: {
        TodoItemsModule,
    },
    state: () => ({

    }),
    getters: {},
    mutations: {},
    actions: {},
})

export default store
