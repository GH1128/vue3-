<template>
    <div>
        <el-popover placement="bottom" :width="310" trigger="hover">
            <template #reference>
                <div class="select-hint">全部应用</div>
            </template>

            <div class="app-box">
                <div class="app-item" v-for="(item,index) in appList" :key="index">
                    <img :src="item.img" alt="">
                    <span>{{item.label}}</span>
                </div>
            </div>
        </el-popover>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { ElPopover } from "element-plus";

export default defineComponent({

    components: {
        ElPopover
    },

    setup(props, ctx) {
        let visible = ref(false)

        let appList = ref([{
            img: require('@/assets/dashboard/renshi@2x.png'),
            router: '#',
            label: '人事变动'
        }, {
            img: require('@/assets/dashboard/CRM@2x.png'),
            router: '#',
            label: 'CRM'
        }, {
            img: require('@/assets/dashboard/yongzhang@2x.png'),
            router: '#',
            label: '用章申请'
        }, {
            img: require('@/assets/dashboard/huiyi@2x.png'),
            router: '#',
            label: '会议管理'
        }, {
            img: require('@/assets/dashboard/feiyong@2x.png'),
            router: '#',
            label: '费用管理'
        }, {
            img: require('@/assets/dashboard/youjian@2x.png'),
            router: '#',
            label: '邮件管理'
        }, {
            img: require('@/assets/dashboard/gonggao@2x.png'),
            router: '#',
            label: '公告管理'
        }, {
            img: require('@/assets/dashboard/xiangmu@2x.png'),
            router: '#',
            label: '项目管理'
        }, {
            img: require('@/assets/dashboard/OKR@2x.png'),
            router: '#',
            label: 'OKR'
        }
        ])
        return {
            visible, appList
        }
    }

})
</script>

<style lang="scss" scoped>
.app-box {
    height: 318px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    // background-color: rgba(228, 228, 228, 0.97);

    .app-item {
        width: 88px;
        height: 88px;
        border-radius: 8px;
        background-color: #fff;
        box-shadow: 0px 0px 17px 1px rgba(211, 215, 221, 0.35);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        img {
            width: 46px;
            height: 46px;
        }
        span {
            font-size: 14px;
            color: rgba(137, 152, 172, 1);
            padding-top: 10px;
        }
    }
}

.select-hint {
    font-size: 18px;
    color: rgba(137, 152, 172, 1);
}
</style>