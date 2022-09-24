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
        <hr class="my-2 bg-gray-400 border-0" style="height: 1px">
        <div class="h-full px-4 overflow-y-auto overscroll-auto">
            <ul class="-mx-3 mb-10">
                <li class="mb-2 w-full" v-for="item in items">
                    <TodoItem
                        :item="item"
                    />
                </li>
            </ul>
        </div>
        <div
            v-if="showNewItemInput"
            class="mt-4 h-12 flex"
        >
            <input
                type="text"
                class="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid transition ease-in-out focus:outline-none rounded-xl"
                :class="{
                    'border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600': newItemNameValid || !newItemNameInputErrorDecoration,
                    'border-red-600 focus:text-gray-700 bg-red-100': !newItemNameValid && newItemNameInputErrorDecoration,
                }"
                placeholder="Enter task here"
                @keyup.enter="addNewItem"
                v-model="newItemName"
            />
            <div class="add-new-button-wrapper ml-1">
                <VueCustomTooltip
                    :label="newItemNameError"
                    class="w-full h-full"
                >
                    <button
                        @click="addNewItem"
                        class="w-full h-full bg-green-500 border-gray-300 transition ease-in-out rounded-xl flex justify-center items-center"
                    >
                        <icon class="text-xl text-white" icon="plus" />
                    </button>
                </VueCustomTooltip>
            </div>
        </div>
    </div>
</template>

<script>

import Dropdown from "@/components/Dropdown";
import TodoItem from "@/components/TodoItem";
import { CREATE_TODO_ITEM, GET_TODO_ITEMS } from "@/store/action-types";
import VueCustomTooltip from '@adamdehaven/vue-custom-tooltip'

export default {
    name: "TodoList",
    components: {TodoItem, Dropdown, VueCustomTooltip},
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
        showNewItemInput: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        newItemName: '',
        newItemNameError: '',
    }),
    computed: {
        isCountBadgeColoring() {
            return this.countBadgeColoring && this.todosCount >= this.countBadgeColoringCount
        },
        todosCount() {
            return this.items?.length ?? 0
        },
        newItemNameInputErrorDecoration() {
            return this.newItemName?.length > 0
        },
        newItemNameValid() {
            if (this.newItemName?.length < 1) {
                this.newItemNameError = 'Enter the name of the task'
                return false
            }
            if (this.newItemName?.length > 512) {
                this.newItemNameError = 'Max length of the task name should not be longer than 512 characters'
                return false
            }
            this.newItemNameError = ''
            return true
        },
    },
    methods: {
        addNewItem() {
            if (!this.newItemNameValid) {
                return
            }
            this.$store.dispatch(CREATE_TODO_ITEM, {
                name: this.newItemName
            }).then(() => {
                this.newItemName = ''
                this.$store.dispatch(GET_TODO_ITEMS)
            })
        }
    },
}
</script>

<style scoped>

.add-new-button-wrapper {
    min-width: 40px;
}

</style>
