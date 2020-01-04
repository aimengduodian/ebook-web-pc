import request from '../../utils/request'

// 查看用户举报列表
export const fetchUsersReportList = query => {
  return request({
    url: 'reportuser/reportusers',
    method: 'post',
    data: query
  })
}

// 查看举报详情
export const fetchUsersReportDetail = (queryId) => {
  const url = 'reportuser/getById/' + queryId
  return request({
    url: url,
    method: 'get'
  })
}

// 删除举报
export const fetchUsersReportMsgDelete = (query) => {
  return request({
    url: 'reportuser/delete',
    method: 'post',
    data: query
  })
}

// 下架被举报的产品、处理举报
export const fetchReportUsers = (query) => {
  return request({
    url: 'reportuser/update',
    method: 'post',
    data: query
  })
}
