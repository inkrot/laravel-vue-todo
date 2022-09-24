<template>
    <div class="wrapper w-full h-full flex flex-col justify-center items-center p-4 md:p-0">
        <div class="mt-5 md:mt-0 mb-4">
            <h1 class="text-xl md:text-2xl text-white font-bold">Todo app</h1>
        </div>
        <div class="main-container-wrapper overflow-hidden rounded-xl border-2 w-full h-full md:w-5/6 md:h-4/6 bg-white">
            <div class="main-container shadow-dark-blue w-full h-full p-4 flex flex-row">
                <TodoList
                    class="todo-list-col w-full"
                    :title="'Todos'"
                    :items="regularTodoItems"
                    :show-new-item-input="true"
                    @action="actionHandler"
                />
                <TodoList
                    class="todo-list-col w-full ml-4"
                    :title="'Urgent Todos'"
                    :items="urgentTodoItems"
                    :count-badge-coloring="true"
                    :count-badge-coloring-count="3"
                    @action="actionHandler"
                />
            </div>
        </div>
    </div>
</template>

<script>

import TodoList from "@/components/TodoList";
import { mapGetters } from "vuex";
import { GET_TODO_ITEMS } from "@/store/action-types";

export default {
    components: {TodoList},
    data: () => ({

    }),
    computed: {
        ...mapGetters(['todoItems', 'regularTodoItems', 'urgentTodoItems', 'todoItemsStatus']),
    },
    mounted() {
        this.$store.dispatch(GET_TODO_ITEMS)
    },
    methods: {
        actionHandler(action) {
            console.log(action)
        }
    },
}
</script>
<style>

.wrapper {
    background: rgb(44,108,180);
    background: linear-gradient(190deg, rgb(41, 103, 172) 0%, rgb(36, 112, 64) 100%);
}

.main-container-wrapper {
    max-width: 900px;
    max-height: 70vh;
}

.main-container {
    overflow-x: auto;
}

.shadow-dark-blue {
    -webkit-box-shadow: 2px 2px 50px 4px rgba(34, 60, 80, 0.75);
    -moz-box-shadow: 2px 2px 50px 4px rgba(34, 60, 80, 0.75);
    box-shadow: 2px 2px 50px 4px rgba(34, 60, 80, 0.75);
}

.todo-list-col {
    min-width: 250px;
}

</style>
