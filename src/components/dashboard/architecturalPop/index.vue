<template>
  <div>
    <el-dialog v-model="dialogTableVisible" title="结构总图" width="640px">
      <div class="architectural-box">
        <div class="architectural-main">
          <div class="architectural-title">前端门户中心</div>
          <div class="architectural-list">
            <div class="architectural-item">公司门户</div>
            <div class="architectural-item">个人门户</div>
            <div class="architectural-item">高管门户</div>
            <div class="architectural-item">知识门户</div>
          </div>
        </div>
        <div class="architectural-main">
          <div class="architectural-title">应用中心</div>
          <div class="architectural-list">
            <div class="architectural-item">流程管理</div>
            <div class="architectural-item">考勤管理</div>
            <div class="architectural-item">薪酬中心</div>
            <div class="architectural-item">日程计划</div>
            <div class="architectural-item">招聘管理</div>
            <div class="architectural-item">培训考试</div>
            <div class="architectural-item">排班管理</div>
            <div class="architectural-item">假期管理</div>
            <div class="architectural-item">OKR管理</div>
            <div class="architectural-item">项目管理</div>
            <div class="architectural-item">会议管理</div>
            <div class="architectural-item">用章管理</div>
          </div>
        </div>
        <div class="architectural-main">
          <div class="architectural-title">后台中心</div>
          <div class="architectural-list">
            <div class="architectural-item">组织权限中心</div>
            <div class="architectural-item">流程引擎</div>
            <div class="architectural-item">内容引擎</div>
            <div class="architectural-item">应用中心</div>
          </div>
        </div>
      </div>
      <div>
        <span>
          <el-button @click="dialogTableVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent, ref, watch, nextTick } from "vue";

import { ElMessage, ElRow, ElCol, ElDialog } from 'element-plus'
export default defineComponent({
  components: {
    ElRow, ElCol, ElDialog
  },
  props: {
    dialogShow: {
      type: Boolean,
      defalut: false
    }
  },
  setup(props, ctx) {
    let dialogTableVisible = ref(false)

    // 监听
    watch(
      () => props.dialogShow,
      (newData) => {
        console.log(newData);
        dialogTableVisible.value = true
      }
    );
    return {
      dialogTableVisible,
    }
  }
})
</script>

<style lang='scss' scope>
$fontColor: "#66666";
$fontSize: 14px;

.architectural-box {
  * {
    color: $fontColor;
    font-size: $fontSize;
  }
}

.flex-row {
  display: flex;
}

.architectural-main {
  // height: 60px;
  box-sizing: border-box;
  padding: 14px 10px;
  background: #ffffff;
  border: 1px solid #d8e2f0;
  box-shadow: 0px 10px 25px 0px rgba(211, 215, 221, 0.3);
  border-radius: 8px;
  display: flex;

  align-items: center;
  margin: 10px 0;

  .architectural-title {
    min-width: 118px;
    margin-right: 20px;
    text-align: center;
    color: #333333;
  }

  .architectural-list {
    // display: flex;
    .architectural-item {
      display: inline-block;
      width: 98px;
      height: 32px;
      line-height: 32px;
      margin: 10px 5px;
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.09);
      border-radius: 3px;
    }
  }
}
</style>

<style lang="scss" scoped>
:deep(.el-button--primary) {
  width: 104px;
  height: 40px;
  background: linear-gradient(90deg, #2ebeff 0%, #3273ff 100%);
  box-shadow: 4px 4px 8px 0px rgba(50, 115, 255, 0.35);
  border-radius: 5px;
  font-size: 14px;
  font-family: Microsoft YaHei;
}
:deep(.el-dialog__body){padding-top: 10px;}
</style>