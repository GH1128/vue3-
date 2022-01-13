<template>
    <el-scrollbar>
        <el-menu
            class="layout-menu system-scrollbar"
            :default-active="activeMenu"
            active-text-color="red"
            :collapse="isCollapse"
            :collapse-transition="false"
            :unique-opened="expandOneMenu"
        >
            <menu-item v-for="(menu, key) in allRoutes" :key="key" :menu="menu" />
        </el-menu>
    </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import MenuItem from './MenuItem.vue'
export default defineComponent({
    components: {
        MenuItem,
    },
    setup() {
        const store = useStore()
        const isCollapse = computed(() => store.state.app.isCollapse)
        const expandOneMenu = computed(() => store.state.app.expandOneMenu)
        const allRoutes = useRouter().options.routes

        const route = useRoute()
        const activeMenu = computed(() => {
            const { meta, path } = route
            if (meta.activeMenu) {
                return meta.activeMenu
            }
            return path
        })
        return {
            isCollapse,
            expandOneMenu,
            allRoutes,
            activeMenu,
        }
    },
})
</script>
