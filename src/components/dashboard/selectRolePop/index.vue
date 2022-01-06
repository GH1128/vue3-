<template>
    <div class="role-pop">
        <el-popover placement="bottom" :width="104" trigger="hover">
            <template #reference>
                <div class="select-hint">切换用户</div>
            </template>
            <div class="role-list">
                <div class="role-item" v-for="(item,index) in roleList" @click="changeRole(index)" :key="index">{{ item.label }}</div>
            </div>
        </el-popover>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { ElPopover } from "element-plus";
import { useRouter } from 'vue-router'

export default defineComponent({

    components: {
        ElPopover
    },

    setup(props, ctx) {
        let router = useRouter()
        let visible = ref(false)
        let roleList = ref([
            {
                value: '1',
                label: '公司门户'
            },
            {
                value: '2',
                label: '个人门户'
            },
            {
                value: '3',
                label: '高管门户'
            },
            {
                value: '4',
                label: '后台门户'
            },
        ])

        // 方法
        function changeRole(e) {
            console.log(e);
            if (e == 0) {
                router.push('/company')
            } else if (e == 1) {
                router.push('/portal')
            }
        }
        return {
            visible,
            roleList,
            changeRole
        }
    }

})
</script>

<style lang="scss" scoped>
.role-list {
    .role-item {
        cursor: pointer;
        background-color: #fff;
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        color: rgba(110, 116, 125, 1);

        &:hover {
            color: rgba(73, 119, 252, 1);
            background-color: rgba(246, 247, 249, 1);
        }
    }
}

.select-hint {
    font-size: 18px;
    color: rgba(137, 152, 172, 1);
}
</style>
