import $api from "@/api"
import { DATA_STATUS_ERROR, DATA_STATUS_INIT, DATA_STATUS_LOADED, DATA_STATUS_LOADING } from "@/store/data-statuses";
import { SET_TODO_ITEMS } from "@/store/mutation-types";
import {CREATE_TODO_ITEM, DELETE_TODO_ITEM, GET_TODO_ITEMS, UPDATE_TODO_ITEM} from "@/store/action-types";

const TodoItemsModule = {
    state: {
        todoItems: [],
        regularTodos: [],
        urgentTodos: [],
        todoItemsStatus: DATA_STATUS_INIT,
    },
    getters: {
        todoItems: state => state.todoItems,
        regularTodoItems: state => state.regularTodoItems,
        urgentTodoItems: state => state.urgentTodoItems,
        todoItemsStatus: state => state.todoItemsStatus,
    },
    mutations: {
        [SET_TODO_ITEMS](state, todoItems) {
            state.todoItems = todoItems
            state.regularTodoItems = todoItems.filter(item => !item.urgent)
            state.urgentTodoItems = todoItems.filter(item => item.urgent)
            state.todoItemsStatus = DATA_STATUS_LOADED
        },
    },
    actions: {
        [GET_TODO_ITEMS]: (context) => {
            context.state.todoItemsStatus = DATA_STATUS_LOADING
            return new Promise((resolve, reject) => {
                $api.get(
                    '/api/todo-items'
                ).then(r => {
                    context.commit(SET_TODO_ITEMS, r.data)
                    resolve(r)
                }).catch(e => {
                    context.state.todoItemsStatus = DATA_STATUS_ERROR
                    reject(e)
                })
            })
        },
        [CREATE_TODO_ITEM]: (context, body) => {
            return new Promise((resolve, reject) => {
                $api.post(
                    '/api/todo-items', body
                ).then(r => {
                    resolve(r)
                }).catch(e => reject(e))
            })
        },
        [UPDATE_TODO_ITEM]: (context, {id, body}) => {
            return new Promise((resolve, reject) => {
                $api.put(
                    '/api/todo-items/' + id, body
                ).then(r => {
                    resolve(r)
                }).catch(e => reject(e))
            })
        },
        [DELETE_TODO_ITEM]: (context, id) => {
            return new Promise((resolve, reject) => {
                $api.delete(
                    '/api/todo-items/' + id
                ).then(r => {
                    resolve(r)
                }).catch(e => reject(e))
            })
        }
    }
}

export default TodoItemsModule
