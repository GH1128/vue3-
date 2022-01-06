<template>
    <div class="page-header">
        <div class="header-logo">
            <img src="@/assets/dashboard/OA@2x.png" alt />
        </div>
        <div class="header-share">
            <div class="share-select">
                <el-select v-model="searchForm.select" placeholder="全部">
                    <el-option label="全部" value="1"></el-option>
                    <el-option label="流程" value="2"></el-option>
                    <el-option label="项目" value="3"></el-option>
                    <el-option label="成员" value="4"></el-option>
                    <el-option label="邮件" value="5"></el-option>
                </el-select>
            </div>
            <div class="share-line"></div>
            <div class="share-input">
                <el-input v-model="searchForm.input" placeholder="请输入关键字搜索">
                    <template #suffix @change="loadDataFun">
                        <i class="el-input__icon el-icon-search"></i>
                    </template>
                </el-input>
            </div>
        </div>

        <div class="header-Right">
            <div class="open-select">
                <img src="@/assets/dashboard/yingyong@2x.png" alt />
                <selectAppPop></selectAppPop>
            </div>

            <div class="open-select">
                <img src="@/assets/dashboard/qiehuanyonghu@2x.png" alt />
                <selectRolePop></selectRolePop>
            </div>

            <div style="margin-left:70px" class="open-select">
                <img src="@/assets/dashboard/jieogu@2x.png" alt />
            </div>
            <div class="open-select">
                <img src="@/assets/dashboard/lingdang@2x.png" alt />
            </div>
            <div class="open-select">
                <img src="@/assets/dashboard/shoucang@2x.png" alt />
            </div>

            <div class="user-select">
                <div>欢迎！张三</div>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item>切换账号</el-dropdown-item>
                            <el-dropdown-item>切换公司</el-dropdown-item>
                            <el-dropdown-item @click="exitLogin">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>

        <!-- <architecturalPop :dialogShow="architecturaleShow"></architecturalPop> -->
    </div>
</template>s

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from 'vue-router'

import useHomeHeader from './composables/home-header.ts'
import selectAppPop from '../selectAppPop/index.vue'
import selectRolePop from '../selectRolePop/index.vue'
import architecturalPop from '@/components/dashboard/architecturalPop/index.vue'
export default defineComponent({

    components: {
        architecturalPop, selectAppPop, selectRolePop,
    },

    setup() {
        const { searchForm } = useHomeHeader()
        const startValue = ref('1')
        const router = useRouter()

        // 方法
        function exitLogin() {
            localStorage.removeItem('token')
            router.push('/login')
        }
        return {
            searchForm,
            startValue,
            exitLogin
        }
    }

})
</script>

<style lang="scss" scoped>
.page-header {
    height: 70px;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    padding: 16px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-logo {
        width: 291px;
        height: 35px;
        img {
            width: 100%;
            height: 100%;
        }
    }

    .header-share {
        width: 582px;
        height: 46px;
        border-radius: 60px;
        border: 1px solid #d8e2f0;

        display: flex;
        align-items: center;
        .share-select {
            width: 14%;
            margin-left: 20px;
        }
        .share-line {
            height: 24px;
            width: 1px;
            background-color: #d8e2f0;
        }
        .share-input {
            width: 80%;
        }
    }
    .header-Right {
        display: flex;
        align-items: center;
        margin-right: 60px;
    }
    .open-select {
        font-size: 16px;

        color: #8998ac;
        margin-left: 30px;
        display: flex;
        flex-shrink: 0;
        cursor: pointer;

        img {
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }
    }

    :deep(.el-input__inner) {
        border: none;
    }

    .user-select {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        margin-left: 40px;
        color: #8998ac;
        font-size: 14px;
    }
    .user-select :deep(.el-input__inner) {
        text-align: right;
        // padding-right: 4px;
        color: #8998ac;
        font-size: 14px;
    }
}
</style>