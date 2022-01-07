<template>
    <div class="box">
        <!--背景图片-->
        <div class="login-background"></div>
        <!-- 标题 -->
        <div class="login_title">
            <img src="@/assets/image/login/logo.png" alt="">
            <div class="login_title_text">
                <span class="login_t_txt1">深圳市虾米智联科技有限公司</span>
                <span class="login_t_txt2">万物互联共享，让生活更简便！</span>
            </div>
        </div>
        <!-- 登录的内容部分 -->
        <div class="login-content">
            <p>企业经营数字化管理系统</p>
            <span>管理后台</span>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username" v-show="loginWay1">
                    <el-input v-model="param.username" maxlength="20" placeholder="请输入账号" clearable>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password" v-show="loginWay1">
                    <el-input v-model="param.password" maxlength="15" @keyup.enter.native='test' placeholder="请输入密码" type="password" clearable>
                    </el-input>
                </el-form-item>
                <el-form-item prop="iphone" v-show="loginWay2">
                    <el-input v-model="param.iphone" maxlength="11" placeholder="请输入手机号" clearable>
                    </el-input>
                </el-form-item>
                <el-form-item prop="verificat" v-show="loginWay2">
                    <el-input v-model="param.verificat" maxlength="6" placeholder="请输入验证码" clearable>
                    </el-input>
                    <div class="getVerificat">
                        <el-button @click="sendCode()" :disabled="disabled" type="primary">{{btnCodeTitle}}</el-button>
                    </div>
                </el-form-item>
                <div class="login-btn">
                    <el-button @click="submitForm()" :type="(param.username !== '' && param.password !== '')||(param.iphone!=='' && param.verificat!=='')? 'primary':'info'">登 录</el-button>
                </div>
            </el-form>
            <div class="login-way">
                <div class="login-way1" @click="clickWay1()">
                    <img src="@/assets/image/login/password.png" v-show="loginWay2" alt="" />
                    <img src="@/assets/image/login/clickPassword.png" v-show="loginWay1" alt="" />
                    <span :class="loginWay2 ? 'login_txt' : 'login_txt1'">密码</span>
                </div>
                <div class="login-way1" @click="clickWay2()">
                    <img src="@/assets/image/login/clickVerify.png" v-show="loginWay2" alt="" />
                    <img src="@/assets/image/login/verify.png" v-show="loginWay1" alt="" />
                    <span :class="loginWay2 ? 'login_txt1' : 'login_txt'">验证码</span>
                </div>
            </div>
        </div>
    </div>
    <input style="border: 1px solid bule" type="hidden" v-model="param.captchaResponseInput" id="captchaResponse" />

</template>
<style>
/*隐藏谷歌人机校验提示*/
.grecaptcha-badge {
    display: none;
}
</style>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import {
    openidConfiguration,
    SendIphoneSmsCode,
    SmsCodeLogin,
} from '@/api/index';

export default defineComponent({
    name: 'Login',
    setup() {
        const router = useRouter();
        let loginWay1 = ref(true);
        let loginWay2 = ref(false);
        let btnCodeTitle = ref('获取验证码');
        let disabled = ref(false);
        let siteKey = ref('6Leb3FkdAAAAAPMyVm8HnxviZhAw3KxP1iYiYDX4');
        const param = reactive({
            username: '',
            password: '',
            verificat: '',
            iphone: '',
            captchaResponseInput: '',
        });
        const rules = {
            username: [
                {
                    required: true,
                    message: '请输入账号',
                    trigger: 'blur',
                },
            ],
            password: [
                {
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur',
                },
            ],
            iphone: [
                {
                    required: true,
                    message: '请输入手机号',
                    trigger: 'blur',
                },
            ],
            verificat: [
                {
                    required: true,
                    message: '请输入验证码',
                    trigger: 'blur',
                },
            ],
        };
        const _openidConfiguration = async () => {
            const res = await openidConfiguration({
                grant_type: 'password',
                scope: 'offline_access openid profile role email phone EMC',
                username: param.username,
                password: param.password,
                client_id: 'EMC_App',
                client_secret: '1q2w3e*',
            });
            await loginRes(res);
        };
        const loginRes = async (res: any) => {
            localStorage.setItem(
                'token',
                `${res.token_type} ${res.access_token}`
            );
            setTimeout(() => {
                router.push('/');
            }, 1000);
        };
        const login = ref(null);
        const submitForm = () => {
            if (loginWay1.value) {
                if (param.username.length == 0) {
                    ElMessage.error('账号不能为空！');
                    return false;
                }
                if (param.password.length == 0) {
                    ElMessage.error('密码不能为空！');
                    return false;
                }
                _openidConfiguration();
            } else {
                if (param.iphone.length == 0) {
                    ElMessage.error('手机号不能为空！');
                    return false;
                }
                if (param.verificat.length == 0) {
                    ElMessage.error('验证码不能为空！');
                    return false;
                } else if (param.verificat.length != 6) {
                    ElMessage.error('验证码格式错误！');
                    return false;
                }
                _smsCodeLogin();
            }
        };

        const _smsCodeLogin = async () => {
            const res = await SmsCodeLogin({
                phoneNumber: param.iphone,
                verificationCode: param.verificat,
            });
            await loginRes(res);
        };

        onMounted(() => {
            LoadRecaptchaScript();
        });

        const LoadRecaptchaScript = async () => {
            const s = document.createElement('script');
            s.type = 'text/JavaScript';
            s.src =
                'https://www.recaptcha.net/recaptcha/api.js?render=' +
                siteKey.value;
            document.body.appendChild(s);
            s.onload = () => {
                const win: any = window;
                const grecaptcha = win.grecaptcha;
                setTimeout(() => {
                    grecaptcha.ready(function () {
                        refreshToken(grecaptcha);
                        setInterval(() => {
                            refreshToken(grecaptcha);
                        }, 120000);
                    });
                }, 200);
            };
        };

        const refreshToken = async (grecaptcha: any) => {
            grecaptcha
                .execute(siteKey.value, { action: 'login' })
                .then((token) => {
                    param.captchaResponseInput = token;
                });
        };

        const sendCode = () => {
            if (validatePhone()) {
                sendIphoneSmsCode();
            }
        };

        const validatePhone = () => {
            if (param.iphone.length == 0) {
                ElMessage.error('手机号码不能为空！');
                return false;
            } else if (
                param.iphone.length != 11 ||
                !/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(param.iphone)
            ) {
                ElMessage.error('手机号格式不正确！');
                return false;
            }
            return true;
        };

        const validateBtn = () => {
            let time = 60;
            let timer = setInterval(() => {
                if (time == 0) {
                    clearInterval(timer);
                    disabled.value = false;
                    btnCodeTitle.value = '获取验证码';
                } else {
                    btnCodeTitle.value = time + '秒后重试';
                    disabled.value = true;
                    time--;
                }
            }, 1000);
        };

        const sendIphoneSmsCode = async () => {
            const res = await SendIphoneSmsCode({
                verificationCodeType: 1,
                phoneNumber: param.iphone,
                providerName: 'Recaptcha',
                captchaResponse: param.captchaResponseInput,
            });
            if (res.result == 1 && res.description == 'Success') {
                validateBtn();
                ElMessage({
                    message: '验证码发送成功！',
                    type: 'success',
                });
            }
        };

        //方法
        const clickWay1 = () => {
            loginWay1.value = true;
            loginWay2.value = false;
        };
        const clickWay2 = () => {
            loginWay1.value = false;
            loginWay2.value = true;
        };
        function test() {
            submitForm();
        }
        return {
            test,
            loginWay1,
            loginWay2,
            clickWay1,
            clickWay2,
            param,
            rules,
            login,
            submitForm,
            btnCodeTitle,
            sendCode,
            disabled,
        };
    },
});
</script>
<style lang="less" scoped>
.box {
    display: flex;
}
.login-background {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    background: url(~@/assets/image/login/bg.png) no-repeat;
    background-size: 100% 100%;
}
.login_title {
    display: flex;
    flex-direction: row;
    margin-left: 100px;
    margin-top: 60px;
    img {
        width: 98px;
        height: 98px;
    }
    .login_title_text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 20px;
        .login_t_txt1 {
            font-size: 38px;
            font-family: ShiShangZhongHeiJianTi;
            font-weight: 400;
            color: #2c2c2c;
            line-height: 53px;
        }
        .login_t_txt2 {
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #666666;
            line-height: 30px;
        }
    }
}
.login-content {
    position: absolute;
    top: 20%;
    left: 60%;
    float: right;
    width: 520px;
    height: 535px;
    background: #ffffff;
    box-shadow: 2px 2px 2px 5px #ccc;
    border-radius: 36px;
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
    align-items: center;
    box-shadow: 0 0 20px -5px #cccccc;

    p {
        font-size: 32px;
        font-family: ShiShangZhongHeiJianTi;
        font-weight: 400;
        color: #2c2c2c;
        line-height: 53px;
        padding-top: 30px;
    }
    span {
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #666666;
        line-height: 30px;
        padding-top: 30px;
    }
    .login-button {
        width: 350px;
        height: 46px;
        background: #4977fc;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
            color: #ffffff;
        }
    }
    .login-way {
        width: 80%;
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .login-way1 {
            width: 80%;
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
                height: 52px;
                width: 52px;
            }
            .login_txt {
                font-size: 14px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #b2b2b2;
            }
            .login_txt1 {
                font-size: 14px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #4977fc;
            }
        }
    }
}
.ms-content {
    margin-top: 40px;
    width: 60%;
    .getVerificat {
        margin-left: 20px;
    }
}
.login-btn button {
    width: 100%;
}
/deep/ .el-form-item__content {
    display: flex;
    flex-direction: row;
}
/deep/ .el-button--primary {
    display: flex;
    justify-content: center;
}
</style>
