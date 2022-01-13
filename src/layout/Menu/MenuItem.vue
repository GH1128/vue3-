<template>
    <template v-if="!menu.hideMenu">
        <el-sub-menu v-if="showMenuType === 2" :index="pathResolve" :show-timeout="0" :hide-timeout="0">
            <template #title>
                <!-- <i :class="menu.meta.icon" v-if="menu.meta.icon"></i> -->
                <el-icon size="16" v-if="menu.meta.icon">
                    <HomeFilled></HomeFilled>
                </el-icon>
                <span>{{ menu.meta.title }}</span>
            </template>
            <menu-item v-for="(item, key) in menu.children" :key="key" :menu="item" :basePath="pathResolve" />
        </el-sub-menu>
        <app-link v-else-if="showMenuType === 1" :to="pathResolve">
            <el-menu-item :index="pathResolve" v-if="!menu.children[0].children || menu.children[0].children.length === 0">
                <i :class="menu.children[0].meta.icon || menu.meta.icon" v-if="menu.children[0].meta.icon || menu.meta.icon"></i>
                <template #title>{{ menu.children[0].meta.title }}</template>
            </el-menu-item>
            <el-sub-menu v-else :index="pathResolve" :show-timeout="0" :hide-timeout="0">
                <template #title>
                    <!-- <i
                        :class="menu.children[0].meta.icon || menu.meta.icon"
                        v-if="menu.children[0].meta.icon || menu.meta.icon"
                    ></i> -->
                    <el-icon size="16" v-if="menu.meta.icon">
                        <HomeFilled></HomeFilled>
                    </el-icon>
                    <span>{{ menu.children[0].meta.title }}</span>
                </template>
                <menu-item v-for="(item, key) in menu.children[0].children" :key="key" :menu="item" :basePath="pathResolve" />
            </el-sub-menu>
        </app-link>
        <app-link v-else :to="pathResolve">
            <el-menu-item :index="pathResolve">
                <!-- <HomeFilled v-if="menu.meta.icon"></HomeFilled> -->
                <el-icon size="16" v-if="menu.meta.icon">
                    <HomeFilled></HomeFilled>
                </el-icon>
                <template #title>{{ menu.meta.title }}</template>
            </el-menu-item>
        </app-link>
    </template>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import appLink from './Link.vue'
export default defineComponent({
    name: 'menu-item',
    props: ['menu', 'basePath'],
    components: {
        appLink,
    },
    setup(props) {
        // todo: 优化if结构
        const showMenuType = computed(() => {
            // 0: 无子菜单， 1：有1个子菜单， 2：显示上下级子菜单
            if (
                props.menu.children &&
                (props.menu.children.length > 1 || (props.menu.children.length === 1 && props.menu.alwayShow))
            ) {
                return 2
            } else if (props.menu.children && props.menu.children.length === 1 && !props.menu.alwayShow) {
                return 1
            } else {
                return 0
            }
        })
        // todo: 优化多层if
        const pathResolve = computed(() => {
            let path = ''
            if (showMenuType.value === 1) {
                if (props.menu.children[0].path.charAt(0) === '/') {
                    path = props.menu.children[0].path
                } else {
                    let char = '/'
                    if (props.menu.path.charAt(props.menu.path.length - 1) === '/') {
                        char = ''
                    }
                    path = props.menu.path + char + props.menu.children[0].path
                }
            } else {
                path = props.menu.path
            }
            path = props.basePath ? props.basePath + '/' + path : path
            return path
        })
        return {
            showMenuType,
            pathResolve,
        }
    },
})
</script>