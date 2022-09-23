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
                    :todos="regularTodos"
                    @action="actionHandler"
                />
                <TodoList
                    class="todo-list-col w-full ml-4"
                    :title="'Urgent Todos'"
                    :todos="urgentTodos"
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

export default {
    components: {TodoList},
    data: () => ({
        allTodos: [
            {
                id: 1,
                name: 'Thing1',
                done: false,
                urgent: false,
            },
            {
                id: 2,
                name: 'Buy milk',
                done: false,
                urgent: true,
            },
            {
                id: 3,
                name: 'Thing2',
                done: false,
                urgent: false,
            },
            {
                id: 4,
                name: 'Thing3',
                done: false,
                urgent: true,
            },
        ],
    }),
    computed: {
        regularTodos() {
            return this.allTodos.filter(todo => !todo.urgent)
        },
        urgentTodos() {
            return this.allTodos.filter(todo => todo.urgent)
        },
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
