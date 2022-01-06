// 封装axios
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

import router from '../router/index'

import qs from 'qs'
// 创建一个axios实例    
const instance = axios.create({
    // timeout: 10000, // 设置超时时间10秒
    baseURL: process.env.VUE_APP_BASE_API, // 设置默认的URL
    headers: {
        // 'Content-Type': 'application/json'
    },
})

// 设置请求拦截器
instance.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    // todo...
    // 后面我们会在请求之前做一些事情(比如：登录... token这些)
    return config
}, (error: AxiosError) => {
    return error
})

// 设置响应拦截器
instance.interceptors.response.use((result: AxiosResponse) => {
    // todo...
    // 后面我们在这里做一些判断，比如：404，200，502...
    return Promise.resolve(result.data)
}, (error: AxiosError) => {
    const badMessage: any = error.message || error
    showError({ message: error.response })
    return Promise.reject(error)
})

interface IRequestConfig {
    method: 'get' | 'post' | 'GET' | 'POST' | 'PUT' | 'put' | 'delete' | 'DELETE' | 'patch',
    url: string,
    data: any,
    headers: any
}

// 错误处理
function showError(error: any) {
    // token过期，清除本地数据，并跳转至登录页面
    if (error.code === 403) {
        // to re-login
        ElMessage({
            message: error.message.data.error.message,
            type: 'error',
            duration: 3 * 1000
        })
    } else if (error.message.status == 401) {
        ElMessage({
            message: '身份验证过期！',
            type: 'error',
            duration: 2 * 1000
        })
        setTimeout(() => {
            router.replace('/login')
        }, 500)
    } else {
        if (error.message.config.url == '/connect/token') {
            ElMessage({
                message: error.message.data.error_description,
                type: 'error',
                duration: 3 * 1000
            })
        } else {
            ElMessage({
                message: error.message.data.error.message,
                type: 'error',
                duration: 3 * 1000
            })
        }
    }
}

/**
 * 暴露给外部使用的请求工具方法
 * @param method 请求方法
 * @param url 请求地址
 * @param data 请求参数
 * @returns {Promise}  返回Promise类型
 */
export default function request(config: IRequestConfig): any {
    const method = config.method.toLowerCase()
    if (method === 'post') {
        return instance.post(config.url, config.data, { headers: config.headers })
    } else if (method === 'get') {
        return instance.get(config.url, { params: config.data })
    } else if (method === 'put') {
        return instance.put(config.url, config.data, { headers: config.headers })
    } else if (method === 'delete') {
        return instance.delete(config.url, config.data)
    } else {
        return false
    }
    // todo... 后面需要put delete直接加if else
}

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {

        instance.get(url, {
            params: params
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    });
}

export function put(url, params) {
    return new Promise((resolve, reject) => {
        instance.put(url, params).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    });
}

export function deletefn(url, params) {
    return new Promise((resolve, reject) => {
        instance.delete(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

export function patch(url, params) {
    return new Promise((resolve, reject) => {
        instance.patch(url, params).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

export function post(url: string, params: object, isUrl = false) {
    return new Promise((resolve, reject) => {
        let headers, data
        if (isUrl) {
            data = qs.stringify(params)
            headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
        } else {
            data = params
            headers = { 'Content-Type': 'application/json' }
        }
        instance.post(url, data, { headers: headers })
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
    });
}