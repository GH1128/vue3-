<template>
    <el-breadcrumb class="app-breadcrumb hidden-sm-and-down" separator="/">
        <transition-group appear name="breadcrumb">
            <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
                <span v-if="item.redirect === 'noRedirect' || index == levelList.length - 1" class="no-redirect">{{
                    item.meta.title
                }}</span>
                <a v-else @click.prevent="handleLink(item)">
                    {{ item.meta.title }}
                </a>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script lang="ts">
import { ref, defineComponent, watch, Ref } from 'vue'
import { useRoute, useRouter, RouteLocationMatched } from 'vue-router'
export default defineComponent({
    setup() {
        const levelList: Ref<RouteLocationMatched[]> = ref([])
        const route = useRoute()
        const router = useRouter()
        const getBreadcrumb = (): void => {
            let matched = route.matched.filter((item) => item.meta && item.meta.title)
            levelList.value = matched.filter((item) => item.meta && item.meta.title && item.meta.breadcrumb !== false)
        }
        getBreadcrumb()
        watch(
            () => route.path,
            () => getBreadcrumb()
        )
        const handleLink = (item: RouteLocationMatched): any => {
            const { redirect, path } = item
            if (redirect) {
                router.push(redirect.toString())
                return
            }
            router.push(path)
        }
        return { levelList, handleLink }
    },
})
</script>

<style lang="less" scoped >
.app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
}
</style>