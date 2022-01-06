<template>
    <el-container class="home">
        <el-header>
            <Header></Header>
        </el-header>
        <el-main>
            <router-view />
        </el-main>
    </el-container>
</template>

<script >
import Header from '../components/dashboard/homeHeader';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Home',
    components: { Header },
    setup() { },
});
</script>

<style lang="less" scoped>
.jualig {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.home {
    width: 100%;
    height: 100%;
    background: #f5f6fa;
    overflow-x: scroll;
}
</style>
