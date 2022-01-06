<template>
  <div>
    <el-dialog v-model="dialogTableVisible" title="新建日程" width="680px">
      <div class="manuallyAdd">
        <el-form label-width="130px" :model="setForm" ref="setFormRef" size="small" :rules="rules" status-icon>
          <el-row>
            <el-col>
              <el-form-item label="日程标题：" prop="title">
                <el-input v-model="setForm.title"></el-input>
              </el-form-item>
            </el-col>
            <el-col>
              <el-form-item label="日程内容：" prop="main">
                <el-input v-model="setForm.main" type="textarea"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="重要程度：">
                <el-radio-group v-model="setForm.resource">
                  <div class="flex-row">
                    <el-radio label="1">一般</el-radio>
                    <el-radio label="2">重要</el-radio>
                  </div>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="日程时间：" prop="title">
                <el-date-picker
                  v-model="setForm.date"
                  type="daterange"
                  range-separator="到"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="提示方式：">
                <el-checkbox-group v-model="setForm.checkList">
                  <div class="flex-row">
                    <el-checkbox :label="0">发送系统信息</el-checkbox>>
                    <el-checkbox :label="1">发送手机短信</el-checkbox>>
                    <el-checkbox :label="2">发送电子邮件</el-checkbox>>
                  </div>
                </el-checkbox-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="20">
              <el-form-item>
                <div class="flex-row">
                  <el-checkbox :label="0">开始前提醒</el-checkbox>
                  <div class="set-minute-box">
                    <div>
                      开始前 
                      <el-input class="input"></el-input>
                    </div>
                    <el-select v-model="setForm.select" placeholder="分钟" style="width:80px">
                      <el-option label="分钟" value="1"></el-option>
                      <el-option label="小时" value=""></el-option>
                    </el-select>
                  </div>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="20">
              <el-form-item>
                <div class="flex-row">
                  <el-checkbox :label="0">结束前提醒</el-checkbox>
                  <div class="set-minute-box">
                    <div>
                      结束前 
                      <el-input class="input"></el-input>
                    </div>
                    <el-select v-model="setForm.select" placeholder="分钟" style="width:80px">
                      <el-option label="分钟" value="1"></el-option>
                      <el-option label="小时" value=""></el-option>
                    </el-select>
                  </div>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="20">
              <el-form-item>
                <div class="flex-row">
                  <el-checkbox :label="0">超期后提醒</el-checkbox>
                  <div class="set-minute-box">
                    <div>
                      超期后
                      <el-input class="input"></el-input>
                    </div>
                    <el-select v-model="setForm.select" placeholder="分钟" style="width:80px">
                      <el-option label="分钟" value="1"></el-option>
                      <el-option label="小时" value=""></el-option>
                    </el-select>
                  </div>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div>
        <span>
          <el-button @click="dialogTableVisible = false">取 消</el-button>
          <el-button type="primary" @click="validateFormFun">确 定</el-button>
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
    let setForm = ref({
      resource: '1',
      checkList: [0]
    })
    const setFormRef = ref(null)
    const rules = ref({
      title: [
        {
          required: true,
          message: '请输入标题',
          trigger: 'blur'
        }
      ],
      main: [
        {
          required: true,
          message: '请输入内容',
          trigger: 'blur'
        }
      ]
    })

    // 表单验证
    const validateFormFun = () => {
      setFormRef.value.validate((valid) => {
        if (valid) {
          // createScheduleFun()
          dialogTableVisible.value = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }

    // 监听
    watch(
      () => props.dialogShow,
      (newData) => {
        dialogTableVisible.value = true
      }
    );
    return {
      dialogTableVisible,
      setForm, rules, setFormRef,
      validateFormFun,
    }
  }
})
</script>

<style lang='scss' scope>
.entryTextPop {
  width: 210px;
  height: 38px;
  border: 1px solid #e4e6e8;
  box-shadow: 0px 3px 15px 0px rgba(50, 115, 255, 0.08);
  border-radius: 4px;
  background-color: #ffffff;
  margin-right: 10px;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  font-size: 14px;

  span {
    display: inline-block;
    width: 80%;
    height: 38px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgb(192, 194, 199);
    line-height: 38px;
  }
  .update-btn {
    width: 20%;
    border-left: 1px solid #e8eaed;
    text-align: center;
    cursor: pointer;
    font-weight: 400;
    color: #4977fc;
    height: 38px;
  }
}
.el-form-item {
  margin-bottom: 20px !important;
}

.flex-row {
  display: flex;
}

.set-minute-box {
  margin-left: 44px;
  display: flex;
  align-items: center;
  .input {
    width: 60px;
    margin-right: 12px;
  }
}
.manuallyAdd {
  // margin-top: 24px;
  display: flex;
  justify-content: center;
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
:deep(.el-button--default) {
  width: 104px;
  height: 40px;
  font-size: 14px;
  font-family: Microsoft YaHei;
}
:deep(.el-form-item__content) {
  text-align: left !important;
}

:deep(.el-form-item) {
  margin-bottom: 22px !important;
}
</style>