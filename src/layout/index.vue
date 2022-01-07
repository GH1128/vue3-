<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="260px">
    
                <Menu />
            </el-aside>
            <el-container>
                <el-header>
                  
                </el-header>
                <el-main>
                    <div v-if="$store.state.isRosterSet" @click="goBack" class="backtrack">
                        <!-- <img src="@/assets/image/Layout/fanhui.png" alt=""> -->
                        <p>返回</p>
                    </div>
                    <div class="lineBox"> </div>
                    <router-view v-slot="{ Component, route }">
                        <transition :name="route.meta.transition || 'fade-transform'" mode="out-in">
                            <div class="layout-container">
                                <component :is="Component" :key="route.fullPath" />
                            </div>
                        </transition>
                    </router-view>
                </el-main>

                <!-- <img class="headerImg" src="@/assets/images/headerRight.png" alt=""> -->
            </el-container>
        </el-container>
    </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useStore } from 'vuex'
import Menu from "./Menu/index.vue";
// import Logo from "./Logo/index.vue";
// import Header from "./Header/index.vue";
import Tabs from "./Tabs/index.vue";
import { useRouter } from 'vue-router'
export default defineComponent({
    components: {
        Menu,
        // Logo,
        // Header,
        Tabs,
    },

    setup() {
        let store = useStore()
        const router = useRouter()
        function goBack() {
            router.push('/staff/roster')
        }

        onMounted(() => {

        })
        return {
            goBack
        };
    },
});
</script>

<style lang="scss" scoped>
.common-layout {
    background: #f5f6fa;
}

.el-header,
.el-footer {
    // background-color: #b3c0d1;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #ffffff;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 200px;
    overflow-x: hidden;
}

.el-main {
    z-index: 1;
    background-repeat: no-repeat;
    background-size: 100%;
    color: var(--el-text-color-primary);
    text-align: center;
    position: relative;
    overflow: hidden;
}

.lineBox {
    height: 1px;
    width: 120%;
    transform: translateX(-30px) translateY(-20px);
    background: white;
    opacity: 0.3;
}
.backtrack {
    width: 64px;
    height: 26px !important;
    background: #ffffff;
    color: #4977fc;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    position: absolute;
    transform: translateX(17px) translateY(-14px);
    img {
        width: 14px;
        height: 12px;
        margin-right: 6px;
    }
}
body > .el-container {
    margin-bottom: 40px;
    background-color: #e9eef3;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}

.el-header {
    height: 80px;
    display: flex;
    padding: 0;
    z-index: 1;
    Header {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
    }
}
Logo {
    width: 260px;
}
.headerImg {
    width: calc(100% - 260px);
    height: 466px;
    position: fixed;
    top: 0;
    right: 0;
}
</style>