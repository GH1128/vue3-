<template>
    <el-menu class="layout-menu " background-color="#ffffff" text-color="#3B4859" unique-opened :default-active="activeMenu">
        <menu-item v-for="(menu, key) in allRoutes" :key="key" :menu="menu" />
    </el-menu>
</template>

<script>
import { defineComponent, computed, } from 'vue'
import { useRoute } from 'vue-router'
import routerList from '@/router/index'
import MenuItem from './MenuItem.vue'
import { useStore } from 'vuex';
export default defineComponent({
    components: {
        MenuItem
    },
    setup(props, context) {
        const store = useStore()
        const allRoutes = routerList.options.routes
        console.log('allRoutes', allRoutes);
        const route = useRoute()
        const activeMenu = computed(() => {
            const { meta, path } = route;
            if (meta.activeMenu) {
                return meta.activeMenu;
            }
            if (path == '/staff/rosterSet') {
                store.commit('changeRosterT')
            } else {
                store.commit('changeRosterF')
            }
            return path;
        });

        return {
            allRoutes,
            activeMenu,
        }
    }
})
</script>

<style lang="scss" scoped>
.layout-menu {
    width: 260px;
    &.collapse {
        margin-left: 0px;
    }
    :deep() {
        .el-menu-item,
        .el-submenu {
            background-color: #fff !important;
        }
        .el-menu-item i,
        .el-menu-item-group__title,
        .el-submenu__title i {
            color: #3b4859 !important;
        }
        .el-menu-item,
        .el-submenu__title {
            &.is-active {
                background-color: #f5f8fc !important;
                color: #3b4859 !important;
                i {
                    color: #3b4859 !important;
                }
                &:hover {
                    background-color: #fff !important;
                    color: #3b4859 !important;
                }
            }
            &:hover {
                background-color: #f5f8fc !important;
            }
        }
        .el-submenu {
            &.is-active {
                > .el-submenu__title,
                > .el-submenu__title i {
                    color: #3b4859 !important;
                }
            }
            .el-menu-item {
                background-color: #f5f8fc !important;
                &.is-active {
                    background-color: #f0f3f7 !important;
                    color: #4977fc !important;
                    &:hover {
                        background-color: #f5f8fc !important;
                        color: #4977fc !important;
                    }
                }
                &:hover {
                    background-color: #f5f8fc !important;
                }
            }
            .el-submenu {
                .el-submenu__title {
                    background-color: red !important;
                    &:hover {
                        background-color: red !important;
                    }
                }
            }
        }
    }
}
</style>