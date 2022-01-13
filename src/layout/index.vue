<template>
    <el-container>
        <el-aside :width="isCollapse ? '60px' : '250px'" :class="isCollapse ? 'hide-aside' : 'show-side'">
            <div class="logo">logo</div>
            <Menu />
        </el-aside>
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <Tabs />
            <el-main>
                <transition name="el-zoom-in-top">
                    <router-view />
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>
<script setup>
import { computed, ref } from 'vue'
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import Tabs from './Tabs/index.vue'
import { useStore } from 'vuex'
let store = useStore()

const isCollapse = computed(() => store.state.app.isCollapse)
</script>

<style lang="less">
//css
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>