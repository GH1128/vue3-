<template>
    <div class="home-page">

        <div class="home-main">
            <div class="main-left">
                <div class="banner">
                    <el-carousel height="360px" direction="vertical" :autoplay="true">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <img src="@/assets/dashboard/banner.png" style="width:100%;height:100%" />
                        </el-carousel-item>
                    </el-carousel>
                </div>

                <div class="comm-box">
                    <div class="comm-title flex-jcs">
                        <div class="title-left company-title-left">公司介绍</div>
                        <div class="title-right company-title-right">
                            <div v-for="(item,index) in company_button" @click="chooseCompanyFun(item)" :key="index" :class="['compan-current', companyCurrent == item.value ? 'active' : '']">{{ item.name }}</div>
                        </div>
                    </div>
                    <div class="company-introduce">
                        <div v-if="companyCurrent == 0" class="introduce-info">
                            <div class="info-logo">
                                <div class="company-log">
                                    <img src="@/assets/dashboard/logo.png" alt />
                                </div>
                                <div class="company-name">
                                    <div>乐虾科技</div>
                                    <div class="company-slogan">成为物联网行业的领导者！</div>
                                </div>
                            </div>
                            <div class="info-slogan">
                                <div class="slogan-item">创新——谋发展，不断的技术创新、管理创新和服务创新，企业发展的源动力。</div>
                                <div class="slogan-item">品质——领未来，持续改善产品的品质，管理的品质，服务的品质，企业持续发展的保证。</div>
                                <div class="slogan-item">服务——铸辉煌，全员参与，以用户为中心，提供快捷，专业，增值的服务，企业使命必达的保证。</div>
                                <div class="slogan-item">共享——立天地，共享不仅是时代的方向，也是企业的方向，共同创造，一起分享，企业最核心的价值观。</div>
                            </div>
                        </div>
                        <div v-else class="introduce-history">
                            <timeLineCom></timeLineCom>
                        </div>
                    </div>
                </div>

                <div class="main-left-bottom">
                    <div class="small-comm-box">
                        <div class="comm-title">
                            <div class="title-left">我的流程</div>
                            <div class="title-right">
                                <span style="padding-right: 6px;">更多</span>
                                <img src="@/assets/dashboard/jinrujiantou.png" alt />
                            </div>
                        </div>
                        <div class="comm-list-box">
                            <div class="comm-list-item" v-for="item in 5" :key='item'>
                                <div class="item-img">
                                    <img src="@/assets/dashboard/guizhangzhidu.png" alt />
                                </div>
                                <div class="item-info">
                                    <div class="item-title">规章制度</div>
                                    <div class="item-time">2021-9-15</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="small-comm-box">
                        <div class="comm-title">
                            <div class="title-left">员工活动</div>
                            <div class="title-right">
                                <span style="padding-right: 6px;">更多</span>
                                <img src="@/assets/dashboard/jinrujiantou.png" alt />
                            </div>
                        </div>
                        <div class="comm-list-box">
                            <div class="comm-list-item" v-for="item in 5" :key='item'>
                                <div class="item-img">
                                    <img src="@/assets/dashboard/huodong.png" alt />
                                </div>
                                <div class="item-info">
                                    <div class="item-title">员工活动</div>
                                    <div class="item-time">2021-9-15</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="small-comm-box">
                        <div class="comm-title">
                            <div class="title-left">协作交流</div>
                            <div class="title-right">
                                <span style="padding-right: 6px;">更多</span>
                                <img src="@/assets/dashboard/jinrujiantou.png" alt />
                            </div>
                        </div>
                        <div class="comm-list-box"> 
                            <div class="comm-list-item" v-for="item in 5" :key='item'>
                                <div class="item-img">
                                    <img src="@/assets/dashboard/jiaoliu.png" alt />
                                </div>
                                <div class="item-info">
                                    <div class="item-title">协作交流</div>
                                    <div class="item-time">2021-9-15</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="small-comm-box">
                        <div class="comm-title">
                            <div class="title-left">知识库</div>
                            <div class="title-right">
                                <span style="padding-right: 6px;">更多</span>
                                <img src="@/assets/dashboard/jinrujiantou.png" alt />
                            </div>
                        </div>
                        <div class="comm-list-box">
                            <div class="comm-list-item" v-for="item in 5" :key='item'>
                                <div class="item-img">
                                    <img src="@/assets/dashboard/zhishiku.png" alt />
                                </div>
                                <div class="item-info">
                                    <div class="item-title">知识库</div>
                                    <div class="item-time">2021-9-15</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-right">
                <div class="comm-box">
                    <div class="comm-title">
                        <div class="title-left">企业价值观</div>
                    </div>
                    <div class="value-img">
                        <img src="@/assets/dashboard/jiazhiguan.png" alt />
                    </div>
                </div>

                <div class="comm-box">
                    <div class="comm-title">
                        <div class="title-left">新闻动态</div>
                        <div class="title-right">
                            <span style="padding-right: 6px;">更多</span>
                            <img src="@/assets/dashboard/jinrujiantou.png" alt />
                        </div>
                    </div>
                    <div class="press-list">
                        <ElTimeline>
                            <ElTimelineItem color="#4977FC" size="large" type="primary" v-for="(item, index) in kor_lsit" :key="index">
                                <div class="comm-line-content press-item">
                                    <div style="width: 30%;">{{ item.titleName }}</div>
                                    <div>{{ item.weight }}</div>
                                    <div>{{ item.date }}</div>
                                </div>
                            </ElTimelineItem>
                        </ElTimeline>
                    </div>
                </div>
                <div class="comm-box">
                    <div class="comm-title">
                        <div class="title-left">新员工入职</div>
                        <div class="title-right">
                            <span style="padding-right: 6px;">更多</span>
                            <img src="@/assets/dashboard/jinrujiantou.png" alt />
                        </div>
                    </div>
                    <div class="new-employee">
                        <div class="welcome-title">欢迎新员工入职</div>
                        <div class="employee-item" v-for="item in 3" :key='item'>
                            <div class="employee-top">
                                <div class="employee-img">
                                    <img src="@/assets/dashboard/user.png" alt />
                                </div>
                                <div class="employee-info">
                                    <div class="employee-name">
                                        <span class="name">张三</span>
                                        <span class="date">2021.9.15</span>
                                    </div>
                                    <div class="employee-branch">产品部</div>
                                </div>
                            </div>
                            <div class="employee-main">介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍 介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍 介绍介绍介绍介绍介绍介绍介绍介绍介绍</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

import useHomePage from './compoasbles/use-home-page'
import timeLineCom from './timeLineCom/index.vue'
export default defineComponent({

    components: {
       timeLineCom,
     
    },
    setup(props, ctx) {

        const {
            kor_lsit,
            company_button, companyCurrent, chooseCompanyFun
        } = useHomePage()

        return {
            kor_lsit,
            company_button, companyCurrent, chooseCompanyFun
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
        overflow: hidden;
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
        }

        .title-right {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            color: #4977fc;
            font-size: 14px;
        }

        // 公司标题
        .company-title-right {
            font-size: 14px;
            color: #8998ac;
            cursor: pointer;
            margin-left: 20px;
            border-left: 1px solid #eff2f7;

            .compan-current {
                padding-left: 20px;
            }
            .active {
                color: #333333;
            }
        }
    }

    .flex-jcs {
        justify-content: start;
    }
}

.small-comm-box {
    box-sizing: border-box;
    padding: 21px 42px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 20px;
    width: 49%;
    .comm-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        color: rgba(51, 51, 51, 1);

        .title-left {
            color: #333333;
            font-size: 16px;
        }

        .title-right {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            color: #4977fc;
            font-size: 14px;

            img {
                margin-bottom: 4px;
            }
        }
    }
}
/** 公共块 和 公共标题 end */

/**公共列表展示 */
.main-left-bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.comm-list-box {
    margin-top: 20px;
    .comm-list-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 18px;
        .item-img {
            width: 14px;
            height: 14px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .item-info {
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding-left: 8px;
            font-size: $fontSzie;
            color: $fontColor;
            cursor: pointer;

            &:hover {
                color: rgba(129, 166, 248, 0.932);
            }

            .item-title {
            }
            .item-time {
            }
        }
    }
}
/**公共列表展示end */

.banner {
    height: 360px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    margin-bottom: 20px;
}

/** tabs中 公共颜色 */
.comm-line-content {
    font-size: $fontSzie;
    color: $fontColor;

    * {
        font-size: $fontSzie;
        color: $fontColor;
    }
}
/** tabs中 公共颜色end */

/** 公司介绍 */
.company-introduce {
    margin-top: 30px;
    height: 180px;
    .introduce-info {
        width: 100%;

        .info-logo {
            display: flex;

            .company-log {
                width: 50px;
                height: 48px;
                margin-right: 22px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .company-name {
                font-size: 18px;
                color: #333333;

                .company-slogan {
                    padding-top: 14px;
                    font-size: 14px;
                    color: #8998ac;
                }
            }
        }

        .info-slogan {
            margin-top: 30px;
            .slogan-item {
                color: #8998ac;
                font-size: 14px;
                line-height: 20px;
            }
        }
    }

    .introduce-history {
        position: relative;
    }
}
/** 公司介绍 end */

/** 价值观图 end*/
.value-img {
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 80%;
        height: 96%;
    }
}
/** 价值观图 end*/

/**新闻动态 */
.press-list {
    margin-top: 20px;
    .press-item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
/**新闻动态end */

/** 新员工入职 */
.new-employee {
    height: 460px;
    overflow: hidden;
    overflow-y: auto;
    .welcome-title {
        font-size: 14px;
        color: #333539;
        margin: 20px auto;
        text-align: center;
    }
    .employee-item {
        width: 388px;
        height: 120px;
        background: #ffffff;
        box-shadow: 0px 0px 5px 0px rgba(210, 210, 210, 0.5);
        border-radius: 4px;
        margin-bottom: 14px;
        box-sizing: border-box;
        padding: 15px 12px;

        .employee-top {
            display: flex;
            align-items: center;
            .employee-img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .employee-info {
                flex: 1;
                margin-left: 9px;
                .employee-name {
                    display: flex;
                    justify-content: space-between;

                    .name {
                        color: #333333;
                        font-size: 14px;
                    }
                }

                .employee-branch {
                    margin-top: 8px;
                    color: #4977fc;
                }
            }
        }

        .employee-main {
            margin-top: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
}
/** 新员工入职end */

:deef(.el-button--primary) {
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

:deep(.el-carousel__indicators--vertical) {
    display: none;
}

/** 时间线样式*/
:deep(.el-timeline-item) {
    padding-bottom: 14px;
}
/** 时间线样式end*/
</style>
