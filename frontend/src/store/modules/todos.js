import $api from "@/api"
import {DATA_STATUS_ERROR, DATA_STATUS_INIT, DATA_STATUS_LOADED, DATA_STATUS_LOADING} from "@/store/data-statuses";
import { SET_TODOS } from "@/store/mutation-types";


const TodosModule = {
    state: {
        todos: [],
        todosStatus: DATA_STATUS_INIT,
    },
    getters: {
        todos: state => state.todos,
        todosStatus: state => state.todosStatus,
    },
    mutations: {
        [SET_TODOS](state, todos) {
            state.todos = todos
            state.todosStatus = DATA_STATUS_LOADED
        },
    },
    actions: {

    }
}

export default TodosModule
