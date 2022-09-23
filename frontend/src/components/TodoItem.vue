<template>
    <Dropdown
        class="w-full"
        :actions="dropdownActions"
        @action="dropdownAction"
    >
        <button class="w-full shadow bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-full uns">
            {{ todo.name }}
        </button>
    </Dropdown>
</template>

<script>

import Dropdown from "@/components/Dropdown";
import {
    TODO_ITEM_EVENT_DONE, TODO_ITEM_EVENT_MOVE_TO_TODO,
    TODO_ITEM_EVENT_MOVE_TO_URGENT,
    TODO_ITEM_EVENT_REMOVE
} from "@/store/todo-actions";

export default {
    name: "TodoItem",
    components: {Dropdown},
    props: {
        todo: Object,
    },
    data: () => ({

    }),
    methods: {
        dropdownAction(event) {
            console.log(event, this.todo)
        }
    },
    computed: {
        dropdownActions() {
            let actionTypes = [
                {
                    text: 'Done',
                    icon: 'check',
                    event: TODO_ITEM_EVENT_DONE,
                },
                {
                    text: 'Remove',
                    icon: 'trash',
                    event: TODO_ITEM_EVENT_REMOVE,
                },
            ]
            if (!this.todo.urgent) {
                actionTypes.push({
                    text: 'Move to urgent',
                    icon: 'flag',
                    event: TODO_ITEM_EVENT_MOVE_TO_URGENT,
                })
            }
            if (this.todo.urgent) {
                actionTypes.push({
                    text: 'Return to todo',
                    icon: 'arrow-left-long',
                    event: TODO_ITEM_EVENT_MOVE_TO_TODO,
                })
            }
            return actionTypes
        }
    },
}
</script>

<style scoped>


</style>
