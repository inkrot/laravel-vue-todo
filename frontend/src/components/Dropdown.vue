<template>
    <div class="inline-block">
        <div @click="onClickDropdown">
            <slot name="default" />
        </div>
        <ul
            ref="dropdownMenu"
            :style="{
                'top': top + 'px',
                'left': left + 'px',
            }"
            :class="{'block': open, 'hidden': !open}"
            class="dropdown-menu min-w-max absolute bg-white z-50 float-left py-2 text-left rounded-lg shadow-lg mt-1 m-0 border border-gray-300"
        >
            <li v-for="action of actions">
                <div
                    class="dropdown-action cursor-pointer flex items-center justify-center"
                    @click="onClickDropdownAction(action)"
                >
                    <icon class="text-sm text-gray-600" :icon="action.icon"></icon>
                    <span class="ml-2 font-medium text-gray-600">{{ action.text }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

function hasClass(el, cls) {
    return !!el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

function addClass(el, cls) {
    if (!hasClass(el, cls)) el.className += " " + cls
}

function removeClass(el, cls) {
    if (hasClass(el, cls)) {
        let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
        el.className = el.className.replace(reg, ' ')
    }
}

export default {
    name: "Dropdown",
    props: {
        actions: {
            type: Array,
            default: [],
        },
        item: {
            type: Object
        },
    },
    data: () => ({
        open: false,
        top: 0,
        left: 0,
    }),
    mounted() {
        document.addEventListener('click', event => {
            const isClickInside = this.$el.contains(event.target)
            if (!isClickInside) {
                this.open = false
            }
        })
        window.addEventListener('scroll', () => {
            this.open = false
        }, true)
    },
    methods: {
        onClickDropdown(e) {
            addClass(this.$refs.dropdownMenu, 'offscreen')
            let height = this.$refs.dropdownMenu.offsetHeight
            removeClass(this.$refs.dropdownMenu, 'offscreen')
            this.open = !this.open
            this.top = e.pageY - height
            this.left = e.pageX
        },
        onClickDropdownAction(action) {
            this.open = false
            action.callback(this.item)
        },
    },
}
</script>

<style scoped>

.dropdown-menu {
    position: absolute;
    inset: 0px auto auto 0px;
    margin: 0px;
}

.dropdown-action {
    @apply text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100
}

.offscreen {
    position: fixed !important;
    left: -9999px !important;
    display: inline !important;
}

</style>
