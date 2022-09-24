<template>
    <Dropdown
        class="w-full"
        :actions="dropdownActions"
        :item="item"
    >
        <button class="w-full shadow bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-full uns">
            {{ item.name }} <span v-if="item.done" class="bg-green-700 text-white">DONE</span>
        </button>
    </Dropdown>
</template>

<script>

import Dropdown from "@/components/Dropdown";
import { UPDATE_TODO_ITEM } from "@/store/action-types";

export default {
    name: "TodoItem",
    components: {Dropdown},
    props: {
        item: Object,
    },
    data: () => ({

    }),
    methods: {
    },
    computed: {
        dropdownActions() {
            const _vm = this
            let actionTypes = [
                {
                    text: 'Done',
                    icon: 'check',
                    callback(item) {
                        let id = item.id
                        let body = JSON.parse(JSON.stringify(item))
                        body.done = true
                        _vm.$store.dispatch(UPDATE_TODO_ITEM, {
                            id, body
                        })
                    }
                },
                {
                    text: 'Remove',
                    icon: 'trash',
                    callback(item) {
                        console.log(item)
                    }
                },
            ]
            if (!this.item.urgent) {
                actionTypes.push({
                    text: 'Move to urgent',
                    icon: 'flag',
                    callback(item) {
                        console.log(item)
                    }
                })
            }
            if (this.item.urgent) {
                actionTypes.push({
                    text: 'Return to todo',
                    icon: 'arrow-left-long',
                    callback(item) {
                        console.log(item)
                    }
                })
            }
            return actionTypes
        }
    },
}
</script>

<style scoped>


</style>
