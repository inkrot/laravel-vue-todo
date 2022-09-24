<template>
    <Dropdown
        class="w-full"
        :actions="dropdownActions"
        :item="item"
    >
        <div class="item-row flex items-center w-full shadow bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full uns">
            <div
                v-if="item.done"
                class="done-icon-wrapper bg-green-500 rounded-full flex justify-center items-center"
            >
                <icon class="text-xl text-white" icon="check" />
            </div>
            <p class="ml-2">{{ item.name }}</p>
        </div>
    </Dropdown>
</template>

<script>

import Dropdown from "@/components/Dropdown";
import { GET_TODO_ITEMS, UPDATE_TODO_ITEM } from "@/store/action-types";

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
            let actionTypes = []
            actionTypes.push({
                text: this.item.done ? 'Undone' : 'Done',
                icon: this.item.done ? 'arrow-rotate-left' : 'check',
                callback(item) {
                    let id = item.id
                    let body = JSON.parse(JSON.stringify(item))
                    body.done = !body.done
                    _vm.$store.dispatch(UPDATE_TODO_ITEM, {
                        id, body
                    }).then(() => {
                        _vm.$store.dispatch(GET_TODO_ITEMS)
                    })
                }
            })
            actionTypes.push({
                text: 'Remove',
                icon: 'trash',
                callback(item) {
                    console.log(item)
                }
            })
            actionTypes.push({
                text: this.item.urgent ? 'Return to todo' : 'Move to urgent',
                icon: this.item.urgent ? 'arrow-left-long' : 'flag',
                callback(item) {
                    let id = item.id
                    let body = JSON.parse(JSON.stringify(item))
                    body.urgent = !body.urgent
                    _vm.$store.dispatch(UPDATE_TODO_ITEM, {
                        id, body
                    }).then(() => {
                        _vm.$store.dispatch(GET_TODO_ITEMS)
                    })
                }
            })
            return actionTypes
        }
    },
}
</script>

<style scoped>

.item-row {
    min-height: 56px;
}

.done-icon-wrapper {
    min-width: 32px;
    min-height: 32px;
}


</style>
