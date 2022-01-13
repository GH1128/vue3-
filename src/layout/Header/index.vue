<template>
    <div class="header">
        <div class="left-box">
            <!-- 收缩按钮 -->
            <div class="menu-icon" @click="opendStateChange">
                <el-icon size="24">
                    <Fold v-if="$store.state.app.isCollapse"></Fold>
                    <!-- <v-if ="$store.state.app" Fold /> -->
                    <Expand v-else> </Expand>
                </el-icon>
            </div>
            <!-- 面包屑 -->
            <Breadcrumb />
        </div>
        <div class="right-box">
            <!-- 快捷功能按钮 -->
            <div class="function-list">
                <!-- 放大 -->
                <el-icon size="33" @click="toggle">
                    <FullScreen />
                </el-icon>
            </div>
            <!-- 用户信息 -->
            <el-dropdown>
                <span class="el-dropdown-link">
                    管理员
                    <el-icon size="20" >
                        <ArrowDown></ArrowDown>
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>其他操作</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import Breadcrumb from './Breadcrumb.vue'
import { useFullscreen } from '@vueuse/core'
// 变量
let store = useStore()
const { toggle } = useFullscreen()

// 方法
function opendStateChange() {
    console.log(store.dispatch)
    store.commit('app/isCollapseChange', !store.state.app.isCollapse)
}
</script>

<style lang='less'>
.header {
    height: 100%;
    width: calc(100% - 24px);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.left-box {
    height: 100%;
    display: flex;
    align-items: center;
    .menu-icon {
        width: 60px;

        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        font-weight: 100;
        cursor: pointer;
        margin-right: 10px;
        &:hover {
            background-color: #f0f2f5;
        }
    }
}
.right-box {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    .function-list {
        margin-right: 30px;
        transform: translateY(1px);
        .el-icon {
            cursor: pointer;
        }
    }
}
</style>