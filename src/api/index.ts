import qs from 'qs'
import request from '@/utils/request'

//登录的接口
export function openidConfiguration(data: any): Promise<any> {
    return request({
        method: 'POST',
        url: '/connect/token',
        data: qs.stringify(data),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
}

//发送手机短信验证码
export function SendIphoneSmsCode(data: any): Promise<any> {
    return request({
        method: 'POST',
        url: '/api/account/send-verification-code',
        data: data,
        headers: { 'Content-Type': 'application/json' }
    })
}

//短信验证码登录
export function SmsCodeLogin(data: any): Promise<any> {
    return request({
        method: 'POST',
        url: '/api/account/request-token/by-verification-code',
        data: data,
        headers: { 'Content-Type': 'application/json' }
    })
}


// 全局的接口
export function applicationConfiguration(data: any): Promise<any> {
    return request({
        method: 'GET',
        url: '/api/abp/application-configuration',
        data,
        headers: { 'Content-Type': 'application/json' }
    })
}