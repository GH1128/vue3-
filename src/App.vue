<template>
    <el-config-provider :locale="locale">
        <router-view />
    </el-config-provider>
</template>  
<script>
import { defineComponent, ref } from 'vue'

import { ElConfigProvider } from 'element-plus'

import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
    components: {
        [ElConfigProvider.name]: ElConfigProvider,
    },

    setup() {
        let versions = ref('v.1.09281')
        return {
            versions,
            locale: ref(zhCn),
        }
    },
})
</script>

<style lang="less">
@import './style/common.less';

</style>