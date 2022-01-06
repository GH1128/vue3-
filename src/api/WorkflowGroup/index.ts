import qs from 'qs'
import request from '@/utils/request'
import { get, post } from '@/utils/request'

// 获取所有分组
export function groups(data: any): Promise<any> {
  return post(
    process.env.VUE_APP_URL_WF + '/groups',
    data, true
  )
}

// 修改分组
export function _groupsChange(data: any): Promise<any> {
  return request({
    method: 'POST',
    url: process.env.VUE_APP_URL_WF + '/update/' + data.id,
    data: qs.stringify(data),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
}

// 新增分组
export function _groupsAdd(data: any): Promise<any> {
  return post(
    process.env.VUE_APP_URL_WF + '/add',
    data
  )
}

// 移除分组
export function _groupsDel(data: any): Promise<any> {
  return request({
    method: 'POST',
    url: process.env.VUE_APP_URL_WF + '/remove/' + data.id,
    data: qs.stringify(data),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
}

