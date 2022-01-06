<template>
    <div class="check-tabs-com">
        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
            <el-tab-pane label="所有任务" name="1">
                <el-table :data="tableDataAll" style="width: 100%" :header-cell-style="{
            color: '#BBCEEE'
          }">
                    <el-table-column prop="address" label="任务编号" />
                    <el-table-column prop="name" label="任务名称" />
                    <el-table-column prop="address" label="状态" />
                    <el-table-column prop="date" label="预计完成时间" />
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="待完成" name="2">
                <el-table :data="tableDataAll" style="width: 100%" :header-cell-style="{
            color: '#BBCEEE'
          }">
                    <el-table-column prop="address" label="任务编号" />
                    <el-table-column prop="name" label="任务名称" />
                    <el-table-column prop="address" label="状态" />
                    <el-table-column prop="date" label="预计完成时间" />
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="已完成" name="3">
                <el-table :data="tableDataAll" style="width: 100%" :header-cell-style="{
            color: '#BBCEEE'
          }">
                    <el-table-column prop="address" label="任务编号" />
                    <el-table-column prop="name" label="任务名称" />
                    <el-table-column prop="address" label="状态" />
                    <el-table-column prop="date" label="预计完成时间" />
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import { defineComponent, nextTick, ref } from "vue";

export default defineComponent({
    props: {
    },
    setup(props, ctx) {
        let activeName = ref('1')

        let tableDataAll = ref([
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'NoLos Anges',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 18geles',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189s',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189',
            },
        ])

        const handleClick = () => {

        }

        return {
            activeName, handleClick,
            tableDataAll
        }
    }
})
</script>

<style lang="scss" scoped>
.check-tabs-com
    :deep(.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active) {
    box-shadow: 0px 4px 0px 0px #409eff inset;
    color: #666666;
    font-size: 14px;
}

:deep(.el-tabs--border-card) {
    background-color: rgba(255, 255, 255, 0);
}

.check-tabs-com :deep(.el-tabs--border-card) {
    box-shadow: none;
    border: none;
}
.check-tabs-com :deep(.el-tabs--border-card > .el-tabs__content) {
    padding: 0;
}
.check-tabs-com :deep(.el-tabs--border-card > .el-tabs__header) {
    width: 482px;
    background-color: #dfe7f4;
}

:deep(.el-table td),
:deep(.el-table th) {
    padding: 4px 0 !important;
}
:deep(.el-table th > .cell) {
    color: #8b8b8b;
    font-size: 14px;
    font-weight: 600;
}
</style>