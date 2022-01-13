<template>
    <div class="tags-view-item" :class="active ? 'active' : ''">
        <router-link :to="menu.path" v-if="menu.meta.title">
            {{ menu.meta.title }}
        </router-link>
        <el-icon @click.stop="closeTab" v-if="!menu.meta.hideClose"><close /></el-icon>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Close } from '@element-plus/icons'
export default defineComponent({
    props: {
        menu: {
            type: Object,
            default: () => {
                return {
                    path: '',
                    meta: {
                        label: '',
                        hideClose: false,
                    },
                }
            },
        },
        active: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        Close,
    },
    setup(props, { emit }) {
        // 关闭按钮
        function closeTab() {
            emit('close')
        }
        // 刷新按钮
        function reload() {
            emit('reload')
        }
        return {
            closeTab,
            reload,
        }
    },
})
</script>

<style lang="less" scoped>
.tags-view-item {
    border: 1px solid #d8dce5;
    display: inline-flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    border-radius: 2px;
    a {
        height: 26px;
        display: inline-block;
        padding-left: 8px;
        padding-right: 8px;
    }
    .el-icon-refresh-right {
        display: inline-block;
        margin-right: 5px;
    }
    .el-icon-close {
        display: inline-block;
        height: 26px;
    }
    &:first-of-type {
        margin-left: 15px;
    }
    &:last-of-type {
        margin-right: 15px;
    }
    &.active {
        background: #4dc86f;
        border-color: #4dc86f;
        color: white;
        a {
            color: white;
        }
        &:hover {
            background: #4dc86f;
            color: white;
        }
    }
    &:hover {
        background-color: #4dc86f;
        
    }
}
</style>