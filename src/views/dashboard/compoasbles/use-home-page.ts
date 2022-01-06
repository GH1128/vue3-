import { ref, reactive } from 'vue'

export default function useHomePage() {

  const projectTabs = ref(0)
  const currentEmailTitle = ref(0)
  const currentFileTitle = ref(0)
  const currentInformTabs = ref(0)
  const calendarRef = ref() // 日程组件
  const currentDate = ref()
  const importanceDay = reactive(['2021-12-26','2021-12-08','2021-12-31'])  // 临时重要日期
  const ordinaryDay = reactive(['2022-01-01'])  // 临时一般日期

  const createScheduleShow = ref(false)
  let punch_list = reactive([
    {
      content: '08：50',
    },
    {
      content: '18：50',
    },
    {}
  ])

  let kor_lsit = reactive([
    {
      title: 'O',
      titleName: "任务目标",
      weight: '50%',
      date: '2021年9月15日'
    },
    {
      title: 'KR1',
      titleName: "任务结果",
      weight: '50%',
      date: '2021年9月15日'
    },
    {
      title: 'KR2',
      titleName: "任务结果",
      weight: '50%',
      date: '2021年9月15日'
    }
  ])

  // 流程按钮列表
  let flow_button_lsit = reactive([
    {
      name: '我的待办',
      current: true
    },
    {
      name: '已办流程',
      current: false
    },
    {
      name: '办结流程',
      current: false
    },
    {
      name: '我的发起',
      current: false
    },
    {
      name: '抄送流程',
      current: false
    },
  ])


  // 选择流程项
  const chooseFlowFun = (rowItem:any, rowIndex:number) => {
    flow_button_lsit.map((item, index) => {
      item.current = index == rowIndex
    })
  }


  // 项目选项
  let project_tabs_list = reactive([
    {
      name: '小呗出行',
      current: 0
    },
    {
      name: '虾米智联',
      current: 1
    },
    {
      name: '乐虾科技',
      current: 2
    },
    {
      name: '小呗出行',
      current: 3
    },
    {
      name: '虾米智联',
      current: 4
    },
    {
      name: '乐虾科技',
      current: 5
    }
  ])

  // 选择我的项目功能
  const chooseProjectTabsFun = (current:number) => {
    projectTabs.value = current
  }


  // 邮件列表
  const email_list = ref([
    {
      title: '内部邮件',
      value: 0
    },
    {
      title: '外部邮件',
      value: 1
    }
  ])

  // 选择邮件列表
  const chooseEmailFun = (value:number) => {
    currentEmailTitle.value = value
  }

  // 考试列表
  const exam_list = ref([
    {
      titleName: "【员工手册培训截止时间3天后】",
      date: '2021.9.15 14:28'
    },
    {
      titleName: "【员工手册培训截止时间3天后】",
      date: '2021.9.15 14:28'
    },
    {
      titleName: "【入职考试截止时间3天后】",
      date: '2021.9.15 14:28'
    },
    {
      titleName: "【入职考试截止时间3天后】",
      date: '2021.9.15 14:28'
    }, {
      titleName: "【入职考试截止时间3天后】",
      date: '2021.9.15 14:28'
    }
  ])

  
  // 邮件列表
  const file_list = ref([
    {
      title: '我的收藏',
      value: 0
    },
    {
      title: '常用文档',
      value: 1
    }
  ])

  // 选择邮件列表
  const chooseFileFun = (value:number) => {
    currentFileTitle.value = value
  }

  // 消息tabs
  const inform_tabs = ref([
    {
      title: '通知',
      value: 0
    },
    {
      title: '公告',
      value: 1
    },
    {
      title: '知识库',
      value: 2
    }
  ])

  // 选中消息tabs
  const chooseInformFun=(value:number)=>{
    currentInformTabs.value = value
  }

  // 日期组件方法
  const selectDate = (val: string) => {
    calendarRef.value.selectDate(val)
  }

  const createScheduleFun = ()=>{
    createScheduleShow.value = true
  }



  return {
    punch_list, kor_lsit,
    project_tabs_list, projectTabs, chooseProjectTabsFun,
    flow_button_lsit, chooseFlowFun,
    email_list, currentEmailTitle, chooseEmailFun,
    file_list, currentFileTitle, chooseFileFun,
    inform_tabs,currentInformTabs,chooseInformFun,
    exam_list,
    calendarRef,selectDate,currentDate,
    createScheduleShow,createScheduleFun,

    importanceDay,ordinaryDay
    
  }

}