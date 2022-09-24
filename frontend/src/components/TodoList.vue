<template>
    <div class="flex flex-col p-4 bg-gray-200 rounded-xl">
        <div class="text-xl font-bold flex justify-center items-center text-gray-600">
            <p>{{ title }}</p>
            <p
                :class="{'text-red-500': isCountBadgeColoring}"
                class="ml-2 py-0 px-2 bg-white rounded-full"
            >
                {{ todosCount }}
            </p>
        </div>
        <hr class="my-3 bg-gray-400 border-0" style="height: 1px">
        <ul class="h-full overflow-y-auto overscroll-auto">
            <li class="mb-2 w-full" v-for="item in items">
                <TodoItem
                    :item="item"
                />
            </li>
        </ul>
    </div>
</template>

<script>

import Dropdown from "@/components/Dropdown";
import TodoItem from "@/components/TodoItem";

export default {
    name: "TodoList",
    components: {TodoItem, Dropdown},
    props: {
        title: {
            type: String,
            default: '',
        },
        items: {
            type: Array,
            default: [],
        },
        countBadgeColoring: {
            type: Boolean,
            default: false,
        },
        countBadgeColoringCount: {
            type: Number,
            default: 3,
        },
    },
    data: () => ({
    }),
    computed: {
        isCountBadgeColoring() {
            return this.countBadgeColoring && this.todosCount >= this.countBadgeColoringCount
        },
        todosCount() {
            return this.items?.length ?? 0
        },
    },
    methods: {
    },
}
</script>

<style scoped>


</style>
