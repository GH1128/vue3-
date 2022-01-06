<template>
    <div class="home-page">

        <div class="home-main">
            <div class="main-left">
                <div class="comm-box user-punch">
                    <div class="punch-left">
                        <div class="hint">张三，早上好！</div>
                        <ElTimeline>
                            <ElTimelineItem color="#4977FC" size="large" type="primary" v-for="(item, index) in punch_list" :key="index">
                                <div class="comm-line-content" v-if="index < 2">
                                    <span>{{ index ? '上班打卡' : '下班打卡' }}</span>
                                    {{ item.content }}
                                </div>
                                <div v-else>
                                    <el-button type="primary">打卡</el-button>
                                </div>
                            </ElTimelineItem>
                        </ElTimeline>
                    </div>
                    <div class="punch-right">
                        <div class="hint">
                            <div>今天待办工作总计</div>
                            <span>2021年9月15日</span>
                        </div>
                        <div class="user-info-list">
                            <div class="user-info-item">
                                <div class="item-single">我的OKR</div>
                                <div class="item-num">10</div>
                            </div>
                            <div class="user-info-item">
                                <div class="item-single">我的OKR</div>
                                <div class="item-num">10</div>
                            </div>
                            <div class="user-info-item">
                                <div class="item-single">我的OKR</div>
                                <div class="item-num">10</div>
                            </div>
                            <div class="user-info-item">
                                <div class="item-single">我的OKR</div>
                                <div class="item-num">10</div>
                            </div>
                            <div class="user-info-item">
                                <div class="item-single">我的OKR</div>
                                <div class="item-num">10</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="comm-box">
                    <div class="comm-title">
                        <div class="title-left">我的OKR</div>
                        <div class="title-right">
                            <div class="update">
                                <img src="@/assets/dashboard/shuaxin@2x.png" />
                            </div>
                            <div class="unfold">
                                <img src="@/assets/dashboard/more-line@2x.png" />
                            </div>
                        </div>
                    </div>
                    <div class="kor-list">
                        <ElTimeline>
                            <ElTimelineItem color="#4977FC" size="large" type="primary" v-for="(item, index) in kor_lsit" :key="index">
                                <div class="comm-line-content kor-item">
                                    <div style="width: 20%;">{{ item.title }}:{{ item.titleName }}</div>
                                    <div>权重:{{ item.weight }}</div>
                                    <div>{{ item.date }}</div>
                                </div>
                            </ElTimelineItem>
                        </ElTimeline>
                    </div>
                </div>

                <div class="comm-box">
                    <div class="comm-title">
                        <div class="title-left">我的流程</div>
                        <div class="title-right">
                            <div class="update">
                                <img src="@/assets/dashboard/shuaxin@2x.png" />
                            </div>
                            <div class="unfold">
                                <img src="@/assets/dashboard/more-line@2x.png" />
                            </div>
                        </div>
                    </div>
                    <div class="flow-box">
                        <div class="flow-button">
                            <div @click="chooseFlowFun(item, index)" v-for="(item,index) in flow_button_lsit" :key="index" :class="['flow-button-item', item.current ? 'actiev' : '']">{{ item.name }}</div>
                        </div>
                        <div class="flow-list">
                            <ElTimeline>
                                <ElTimelineItem color="#4977FC" size="large" type="primary" v-for="(item, index) in kor_lsit" :key="index">
                                    <div class="comm-line-content flow-item">
                                        <div style="width: 20%;">{{ item.title }}:{{ item.titleName }}</div>
                                        <div>权重:{{ item.weight }}</div>
                                        <div>{{ item.date }}</div>
                                    </div>
                                </ElTimelineItem>
                            </ElTimeline>
                        </div>
                    </div>
                </div>
                <div class="comm-box">
                    <div class="comm-title">
                        <div class="title-left">我的项目</div>
                        <div class="title-right">
                            <div class="update">
                                <img src="@/assets/dashboard/shuaxin@2x.png" />
                            </div>
                            <div class="unfold">
                                <img src="@/assets/dashboard/more-line@2x.png" />
                            </div>
                        </div>
                    </div>
                    <div class="project-box">
                        <div class="project-box-tabs">
                            <div :class="['project-tabs-item', item.current == projectTabs ? 'is-active' : '']" v-for="(item,index) in project_tabs_list" :key="index" @click="chooseProjectTabsFun(item.current)">{{ item.name }}</div>
                        </div>
                        <div class="project-box-progress">
                            <div class="progress-top">
                                <ElProgress type="circle" :indeterminate="true" :stroke-width="6" :percentage="50" color="#4977FC" :width="100">
                                    <template #default="{ percentage }">
                                        <div class="progress-label">已完成</div>
                                        <div class="progress-value">50%</div>
                                    </template>
                                </ElProgress>
                            </div>
                            <div class="progress-bottom">
                                <div class="progress-item">
                                    <span class="ball"></span>
                                    <div>预计</div>
                                    <div class="progress-time">100小时</div>
                                </div>
                                <div class="progress-item">
                                    <span class="ball blue"></span>
                                    <div>消耗</div>
                                    <div class="progress-time">50小时</div>
                                </div>
                                <div class="progress-item">
                                    <span class="ball gray"></span>
                                    <div>剩余</div>
                                    <div class="progress-time">50小时</div>
                                </div>
                            </div>
                        </div>
                        <div class="project-box-tables">
                            <tabsTable></tabsTable>
                        </div>
                    </div>
                </div>

                <div class="comm-box">
                    <div class="comm-title">
                        <div class="title-left">
                            <span>我的邮件</span>
                            <div class="title-choose">
                                <div v-for="(item,index) in email_list" :key="index" @click="chooseEmailFun(item.value)" :class="['title-choose-item', currentEmailTitle == item.value ? 'is-active' : '']">{{ item.title }}</div>
                            </div>
                        </div>
                        <div class="title-right">
                            <div class="update">
                                <img src="@/assets/dashboard/shuaxin@2x.png" />
                            </div>
                            <div class="unfold">
                                <img src="@/assets/dashboard/more-line@2x.png" />
                            </div>
                        </div>
                    </div>
                    <div class="email-box">
                        <div v-if="currentEmailTitle == 0" class="email-interior">
                            <div class="email-item" v-for="item in 4" :key="item">
                                <div class="email-img">
                                    <img src="@/assets/dashboard/ziyuan@2x.png" alt />
                                </div>
                                <div class="email-title">邮件标题</div>
                                <div class="email-user" style="width: 8%;">张三</div>
                                <div class="email-branch" style="width: 8%;">人事部</div>
                                <div class="email-level" style="width: 14%;">紧急程度：100%</div>
                                <div class="email-date" style="width: 16%;">2021年9月15日</div>
                            </div>
                        </div>
                        <div v-else class="email-external">
                            <div class="email-item" v-for="item in 4" :key="item">
                                <div class="email-img">
                                    <img src="@/assets/dashboard/ziyuan@2x.png" alt />
                                </div>
                                <div class="email-title">外部邮件标题</div>
                                <div class="email-user" style="width: 8%;">张三</div>
                                <div class="email-branch" style="width: 8%;">人事部</div>
                                <div class="email-level" style="width: 14%;">紧急程度：100%</div>
                                <div class="email-date" style="width: 16%;">2021年9月15日</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="comm-box">
                    <div class="comm-title">
                        <div class="title-left">
                            <div class="title-tabs">
                                <div v-for="(item,index) in inform_tabs" :key="index" @click="chooseInformFun(item.value)" :class="['title-tabs-item', currentInformTabs == item.value ? 'is-active' : '']">{{ item.title }}</div>
                            </div>
                        </div>
                        <div class="title-right">
                            <div class="update">
                                <img src="@/assets/dashboard/shuaxin@2x.png" />
                            </div>
                            <div class="unfold">
                                <img src="@/assets/dashboard/more-line@2x.png" />
                            </div>
                        </div>
                    </div>
                    <div class="inform-box">
                        <div v-if="currentInformTabs == 0" class="inform-interior">
                            <div class="inform-item" v-for="item in 4" :key="item">
                                <div class="inform-img">
                                    <img src="@/assets/dashboard/ziyuan@2x.png" alt />
                                </div>
                                <div class="inform-title">通知标题</div>
                                <div class="inform-date" style="width: 16%;">2021年9月15日</div>
                            </div>
                        </div>
                        <div v-else-if="currentInformTabs == 1" class="inform-external">
                            <div class="inform-item" v-for="item in 4" :key="item">
                                <div class="inform-img">
                                    <img src="@/assets/dashboard/ziyuan@2x.png" alt />
                                </div>
                                <div class="inform-title">公告标题</div>
                                <div class="inform-date" style="width: 16%;">2021年9月15日</div>
                            </div>
                        </div>
                        <div v-else class="inform-external">
                            <div class="inform-item" v-for="item in 4" :key="item">
                                <div class="inform-img">
                                    <img src="@/assets/dashboard/ziyuan@2x.png" alt />
                                </div>
                                <div class="inform-title">知识库</div>
                                <div class="inform-date" style="width: 16%;">2021年9月15日</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-right">
                <div class="company-vision">
                    <div class="vision-top">
                        <div class="company-log">
                            <img src="@/assets/dashboard/shareme@2x.png" alt />
                        </div>
                        <div class="company-box">
                            <div class="name">深圳市虾米智联科技有限公司</div>
                            <div>公司愿景</div>
                        </div>
                    </div>
                    <div class="vision-bottom">公司愿景公司愿景公司愿景公司愿景公司愿景公司愿景公司愿景公司愿景公司愿景公司愿景公司愿景公司愿景公司愿景公司愿景公司愿景公司愿景公司愿景公司愿景公司愿景公司愿景</div>
                </div>
                <div class="comm-box">
                    <div class="comm-title">
                        <div class="title-left">我的日程</div>
                        <div class="title-right">
                            <div class="update">
                                <img src="@/assets/dashboard/shuaxin@2x.png" />
                            </div>
                            <div class="unfold">
                                <img src="@/assets/dashboard/more-line@2x.png" />
                            </div>
                        </div>
                    </div>
                    <div class="schedule-box">
                        <el-calendar ref="calendarRef" v-model="currentDate">
                            <template #header="{ date }">
                                <div class="schedule-header">
                                    <span @click="selectDate('prev-month')">
                                        <el-icon>
                                            <arrow-left-bold />
                                        </el-icon>
                                    </span>
                                    <div class="schedule-date">{{ date }}</div>
                                    <span @click="selectDate('prev-month')">
                                        <el-icon>
                                            <arrow-right-bold />
                                        </el-icon>
                                    </span>

                                    <div @click="createScheduleFun" class="add-schedule">+</div>
                                </div>
                            </template>
                            <template #dateCell="{ data }">
                                <div class="date-item">
                                    <!-- {{ data.day }} -->
                                    <div style="height: 30px;">{{ data.day.split('-').slice(1).slice(-1, 2).toString() }}</div>
                                    <div :class="['day-ball', importanceDay.includes(data.day)?'day-sign':ordinaryDay.includes(data.day)?'day-ordin':'']"></div>
                                </div>
                            </template>
                        </el-calendar>
                        <div class="schedule-info-box">
                            <div class="title">日程标题</div>
                            <div class="info">
                                日程描述 日程描述 日程描述 日程描述 日程描述 日程描述
                                日程描述
                            </div>
                        </div>
                    </div>
                </div>
                <div class="comm-box">
                    <div class="comm-title">
                        <div class="title-left">我的考试</div>
                        <div class="title-right">
                            <div class="update">
                                <img src="@/assets/dashboard/shuaxin@2x.png" />
                            </div>
                            <div class="unfold">
                                <img src="@/assets/dashboard/more-line@2x.png" />
                            </div>
                        </div>
                    </div>
                    <div class="exam-list">
                        <ElTimeline>
                            <ElTimelineItem color="#4977FC" size="large" type="primary" v-for="(item, index) in exam_list" :key="index">
                                <div class="comm-line-content exam-item">
                                    <div>{{ item.date }} {{ item.titleName }}</div>
                                </div>
                            </ElTimelineItem>
                        </ElTimeline>
                    </div>
                </div>
                <div class="comm-box">
                    <div class="comm-title">
                        <div class="title-left">
                            <span>文档中心</span>
                            <div class="title-choose">
                                <div v-for="(item,index) in file_list" :key="index" @click="chooseFileFun(item.value)" :class="['title-choose-item', currentFileTitle == item.value ? 'is-active' : '']">{{ item.title }}</div>
                            </div>
                        </div>
                        <div class="title-right">
                            <div class="update">
                                <img src="@/assets/dashboard/shuaxin@2x.png" />
                            </div>
                            <div class="unfold">
                                <img src="@/assets/dashboard/more-line@2x.png" />
                            </div>
                        </div>
                    </div>
                    <div class="file-box">
                        <div v-if="currentFileTitle == 0" class="file-interior">
                            <div class="file-item" v-for="item in 8" :key="item">
                                <div class="file-img">
                                    <img src="@/assets/dashboard/wendang@2x.png" alt />
                                </div>
                                <div class="file-title">我的收藏--2021.09.16 14:28</div>
                            </div>
                        </div>
                        <div v-else class="file-external">
                            <div class="file-item" v-for="item in 8" :key="item">
                                <div class="file-img">
                                    <img src="@/assets/dashboard/wendang@2x.png" alt />
                                </div>
                                <div class="file-title">常用文档--2021.09.16 14:28</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <createSchedulePop :dialogShow="createScheduleShow"></createSchedulePop>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import useHomePage from './compoasbles/use-home-page';


import tabsTable from '@/components/dashboard/tabsTableCom/index.vue'
import createSchedulePop from '@/components/dashboard/createSchedulePop/index.vue'

export default defineComponent({

    components: {

        tabsTable,
        createSchedulePop,
    },
    setup(props, ctx) {
        // let date = ref('***')
        const {
            punch_list, kor_lsit,
            flow_button_lsit, chooseFlowFun,
            project_tabs_list, projectTabs, chooseProjectTabsFun,
            email_list, currentEmailTitle, chooseEmailFun,
            file_list, currentFileTitle, chooseFileFun,
            inform_tabs, currentInformTabs, chooseInformFun,
            exam_list,
            calendarRef, currentDate, selectDate,
            createScheduleShow, createScheduleFun,
            importanceDay, ordinaryDay
        } = useHomePage()

        return {
            punch_list, kor_lsit,
            flow_button_lsit, chooseFlowFun,
            project_tabs_list, projectTabs, chooseProjectTabsFun,
            email_list, currentEmailTitle, chooseEmailFun,
            file_list, currentFileTitle, chooseFileFun,
            inform_tabs, currentInformTabs, chooseInformFun,
            exam_list,
            calendarRef, currentDate, selectDate,
            createScheduleShow, createScheduleFun,
            importanceDay, ordinaryDay
        }
    }

})
</script>
<style lang="scss" scoped>
$fontColor: rgba(137, 152, 172, 1);
$fontSzie: 14px;
div {
    box-sizing: border-box;
}

.home-page {
    min-height: 100%;
    width: 100%;
    background-color: #f5f6fa;
    color: #8998ac;
    font-size: 14px;
}

.home-main {
    // width: 1533px;
    width: 90%;
    margin: 27px auto;
    display: flex;
    .main-left {
        flex: 1;

        box-sizing: border-box;
        margin-right: 20px;
    }
    .main-right {
        width: 472px;
    }
}

/** 公共块 和 公共标题 */
.comm-box {
    box-sizing: border-box;
    padding: 21px 42px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 20px;

    .comm-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        color: rgba(51, 51, 51, 1);

        .title-left {
            color: #333333;
            font-size: 16px;

            // 普通选中样式
            .title-choose {
                display: inline-block;
                box-sizing: border-box;
                margin-left: 20px;
                color: $fontColor;
                border-left: 1px solid #4976fc3b;
                .title-choose-item {
                    display: inline-block;
                    box-sizing: border-box;
                    padding-left: 20px;
                    cursor: pointer;
                    transition: 0.2s;
                }

                .is-active {
                    color: #333333;
                }
            }

            // tabs样式
            .title-tabs {
                margin-left: -20px;
                display: flex;
                .title-tabs-item {
                    cursor: pointer;
                    width: 60px;
                    text-align: center;
                    color: #333333;
                    border-bottom: 2px solid #4976fc00;
                    transition: 0.2s;
                    box-sizing: border-box;
                    padding-bottom: 10px;
                    font-size: 16px;
                }
                .is-active {
                    color: #4977fc;
                    border-bottom: 2px solid #4977fc;
                }
            }
        }

        .title-right {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            .update,
            .unfold {
                width: 30px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .update {
                margin-right: 10px;
                img {
                    width: 20px;
                    height: 18px;
                }
            }
            .unfold {
                img {
                    width: 24px;
                    height: 4px;
                }
            }
        }
    }
}
/** 公共块 和 公共标题 end */

/** tabs中 公共颜色 */
.comm-line-content {
    font-size: $fontSzie;
    color: $fontColor;
    text-align: left;
    * {
        font-size: $fontSzie;
        color: $fontColor;
    }
}
/** tabs中 公共颜色end */

/** 顶部打卡 */
.user-punch {
    width: 100%;
    height: 260px;
    padding-top: 20px;
    display: flex;
    .punch-left {
        font-size: 16px;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 20px;
        width: 20%;
        border-right: 1px solid #f4f7fb;

        .hint {
            margin: 20px 0px;
            text-align: left;
        }
    }
    .punch-right {
        width: 80%;
        font-size: 16px;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 20px;
        box-sizing: border-box;
        // padding-left: 40px;

        .hint {
            margin: 20px 0px;
            display: flex;
            align-items: center;
            padding-left: 44px;
            span {
                color: $fontColor;
                padding-left: 10px;
            }
        }

        .user-info-list {
            width: 100%;
            margin-top: 46px;
            .user-info-item {
                width: 20%;
                display: inline-block;
                text-align: center;
                .item-single {
                    color: #8998ac;
                    font-size: 14px;
                }
                .item-num {
                    font-size: 36px;
                    padding-top: 12px;
                    color: #333333;
                }
            }
        }
    }
}
/** 顶部打卡end */

/** KOR */
.kor-list {
    margin-top: 20px;

    .kor-item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
/** KOR end */

/** 流程 */
.flow-box {
    .flow-button {
        display: flex;
        margin: 10px 0px;
        .flow-button-item {
            width: 80px;
            height: 34px;
            text-align: center;
            line-height: 34px;
            color: 100%;
            cursor: pointer;
            box-shadow: 1px 2px 5px 0px rgba(210, 210, 210, 0.5);
            border-radius: 3px;
            margin-right: 20px;
        }
        .actiev {
            color: #4977fc;
        }
    }

    .flow-list {
        margin-top: 20px;
        .flow-item {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
}
/** 流程end */

/** 我的项目 */
.project-box {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    .project-box-tabs {
        width: 10%;
        color: #8998ac;
        font-size: 14px;
        .project-tabs-item {
            // padding: 4px;
            cursor: pointer;
            padding-left: 20px;
            margin-bottom: 14px;
            border-left: 2px solid #4976fc00;
            transition: 0.2s;
        }
        .is-active {
            border-left: 2px solid #4977fc;
            color: #333333;
        }
    }

    .project-box-progress {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .progress-top {
            .progress-value {
                font-size: #333333;
                margin-top: 6px;
                font-size: 22px;
            }
        }

        .progress-bottom {
            margin-top: 20px;
            width: 180px;
            height: 40px;
            text-align: center;
            display: flex;
            .progress-item {
                width: 33.3%;
                .ball {
                    display: inline-block;
                    background-color: #fff;
                    height: 8px;
                    width: 8px;
                    border-radius: 50%;
                    margin-bottom: 8px;
                }

                .blue {
                    background-color: #4977fc;
                }
                .gray {
                    background-color: #eff2f7;
                }
                .progress-time {
                    color: #333333;
                }
            }
        }
    }
    .project-box-tables {
        width: 50%;
    }
}
/** 我的项目end */

/** 我的邮件 */
.email-box {
    margin-top: 30px;
    height: 130px;
    .email-item {
        display: flex;
        // justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        text-align: left;
        cursor: pointer;

        &:hover {
            color: rgba(100, 146, 247, 0.719);
        }
        .email-img {
            width: 18px;
            height: 12px;
            img {
                width: 100%;
                height: 100%;
            }
        }

        .email-title {
            padding-left: 10px;

            width: 55%;
        }
    }
}
/** 我的邮件end */

/**公告 */
.inform-box {
    margin-top: 30px;
    height: 130px;
    .inform-item {
        display: flex;
        // justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        text-align: left;
        cursor: pointer;

        &:hover {
            color: rgba(100, 146, 247, 0.719);
        }
        .inform-img {
            width: 18px;
            height: 12px;
            img {
                width: 100%;
                height: 100%;
            }
        }

        .inform-title {
            padding-left: 10px;
            width: 30%;
        }
    }
}
/**公告end */

/** 我的日程 */
.schedule-box {
    height: 420px;
    margin-top: 20px;
    overflow-y: auto;

    .schedule-header {
        width: 100%;
        cursor: pointer;
        text-align: center;
        color: #333333;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        position: relative;

        .schedule-date {
            width: 110px;
            padding-bottom: 2px;
        }
        .add-schedule {
            right: 0;
            position: absolute;
            width: 32px;
            height: 32px;
            color: #ffffff;
            font-size: 16px;
            border-radius: 8px;
            line-height: 32px;
            text-align: center;
            background-color: #4977fc;
        }

        span {
            padding: 0 10px;
        }
    }

    .schedule-info-box {
        box-sizing: border-box;
        padding: 11px 20px;
        margin-top: 10px;
        width: 99%;
        height: 100px;
        overflow-y: auto;
        background: #ffffff;
        box-shadow: 1px 2px 5px 0px rgba(210, 210, 210, 0.5);
        border-radius: 8px;
        .title {
            color: #333333;
            margin-bottom: 16px;
        }
        .info {
            text-align: left;
            line-height: 20px;
        }
    }
}

.date-item {
    display: flex;
    flex-direction: column;
    .day-ball {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        margin: 0 auto;
    }
    .day-sign {
        background-color: #ff5555;
    }
    .day-ordin {
        background-color: #6672fb;
    }
}
/** 我的日程end */

/** 考试 */
.exam-list {
    margin-top: 10px;

    .exam-item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
/** 考试 end */

/** 公司愿景 */
.company-vision {
    width: 100%;
    height: 260px;
    margin-bottom: 20px;
    background: linear-gradient(180deg, #679cf6 0%, #4072ee 100%);
    box-shadow: 0px 2px 4px 0px rgba(73, 119, 252, 0.35);
    border-radius: 10px;
    box-sizing: border-box;
    padding: 30px;
    text-align: left;
    .vision-top {
        display: flex;
        align-items: center;
        color: #ffffff;
        .company-log {
            width: 54px;
            height: 50px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .company-box {
            margin-left: 20px;
            .name {
                font-size: 18px;
                margin-bottom: 14px;
            }
        }
    }

    .vision-bottom {
        color: #fff;
        margin-top: 50px;
        text-indent: 30px;
        line-height: 18px;
    }
}
/** 公司愿景end */

/** 文档中心 */
.file-box {
    height: 400px;
    margin-top: 10px;
    overflow-y: auto;
    .file-item {
        margin-bottom: 18px;
        display: flex;
        align-items: center;
        &:hover {
            color: rgba(100, 146, 247, 0.719);
        }
        .file-img {
            width: 12px;
            height: 14px;
            margin-right: 19px;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
/** 文档中心end */

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
:deep(.el-timeline-item__wrapper) {
    top: 0;
    text-align: left;
}

.schedule-box :deep(.el-calendar-table .el-calendar-day) {
    box-sizing: border-box;
    text-align: center;
    font-size: 15px;
    // max-width: 38px !important;
    overflow: hidden;
    height: 38px;
    line-height: 38px;
    border-radius: 8px;
    padding: 0px;
}
.schedule-box :deep(.el-calendar-table td) {
    width: 38px;
    border-radius: 8px;
    border: none;
    // &:hover {
    //   background-color: #4977fc !important;
    // }
    // &:focus {
    //   background-color: #4977fc !important;
    // }
}
.schedule-box :deep(.current) {
    width: 38px !important;
    border-radius: 8px;
    border: none;
}
.schedule-box :deep(.el-calendar-table td.is-selected) {
    width: 38px !important;
    border-radius: 8px;
    // background-color: #4977fc !important;
    // color: #fff !important;
}
.schedule-box :deep(.el-calendar) {
    background-color: #fff !important;
    .el-calendar-table td {
        &:hover {
            // background-color: #4977fc !important;
        }
    }
    // --el-calendar-selected-bg-color
    // &:hover{
    //   background-color: #4977fc !important;
    // }
}

.schedule-box :deep(.el-calendar__header) {
    padding: 9px 6px;
    border: none;
}
.schedule-box :deep(.el-calendar__body) {
    padding: 0;
}
</style>
