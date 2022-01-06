<template>
    <div class="time-line-com">
        <div class="item-box">
            <div class="time-line-item">
                <div class="item-info top-info">
                    <div class="info-title">2018年1月20号·创立</div>
                    <div class="info-main">XXX公司正式成立</div>
                </div>
                <div class="item-line top-line"></div>
                <div class="item-time">
                    <span>2018年1月</span>
                </div>
            </div>
            <div class="time-line-item">
                <div class="item-info bottom-info">
                    <div class="info-title">2018年1月20号·创立</div>
                    <div class="info-main">XXX公司正式成立</div>
                </div>
                <div class="item-line bottom-line"></div>
                <div class="item-time">
                    <span>2018年1月</span>
                </div>
            </div>
            <div class="time-line-item">
                <div class="item-info top-info">
                    <div class="info-title">2018年1月20号·创立</div>
                    <div class="info-main">XXX公司正式成立</div>
                </div>
                <div class="item-line top-line"></div>
                <div class="item-time">
                    <span>2018年1月</span>
                </div>
            </div>
            <div class="time-line-item">
                <div class="item-info bottom-info">
                    <div class="info-title">2018年1月20号·创立</div>
                    <div class="info-main">XXX公司正式成立</div>
                </div>
                <div class="item-line bottom-line"></div>
                <div class="item-time">
                    <span>2018年1月</span>
                </div>
            </div>
        </div>

        <div class="item-line"></div>
    </div>
</template>

<script>
import { defineComponent, nextTick, ref } from "vue";

export default defineComponent({
    components: {
    },
    props: {
    },
    setup(props, ctx) {
        return {

        }
    }
})
</script>

<style lang="scss" scoped>
.time-line-com {
    box-sizing: border-box;
    width: 100%;
    height: 180px;
    position: relative;
    div {
        text-align: left;
    }

    .item-box {
        position: absolute;
        display: flex;
        top: 50%;
        z-index: 2;
        transform: translate(-64%, -50%);
        left: 50%;
        // margin-right: 60px;
        .time-line-item {
            max-width: 210px;
            min-width: 190px;
            height: 200px;
            position: relative;
            .item-time {
                width: 76px;
                height: 25px;

                color: #fff;
                line-height: 25px;
                text-align: center;
                background: linear-gradient(90deg, #49a6fc 0%, #4977fc 100%);
                border-radius: 13px;
                position: absolute;
                top: 50%;
                transform: translate(-50%, -50%);
                left: 50%;
            }
            .item-line {
                height: 18px;
                width: 1px;
                background: #4977fc;
                // margin-left: 50%;
                position: absolute;
                left: 50%;
            }

            .top-line {
                top: 70px;
            }
            .bottom-line {
                top: 110px;
            }

            .item-info {
                max-width: 210px;
                height: 68px;
                box-sizing: border-box;
                padding: 5px 10px;
                background: #ffffff;
                box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.09);
                overflow-y: auto;

                .info-title {
                    color: #333333;
                    line-height: 18px;
                    margin-bottom: 13px;
                }
                .info-main {
                    color: #8998ac;
                }
            }

            .top-info {
                position: absolute;
                top: 0px;
                left: 0;
                right: 0;
                margin: auto;
            }
            .bottom-info {
                position: absolute;
                bottom: 0px;
                left: 0;
                right: 0;
                margin: auto;
            }
        }
    }

    .item-line {
        position: absolute;
        top: 50%;
        background: #4977fc;
        height: 1px;
        width: 100%;
    }
}
</style>