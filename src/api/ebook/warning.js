import request from '../../utils/request'

// 查看举报列表
export const fetchProductReportList = query => {
  return request({
    url: 'reportproduct/reportproducts',
    method: 'post',
    data: query
  })
}

// 查看举报详情
export const fetchProductReportDetail = (queryId) => {
  const url = 'reportproduct/getById/' + queryId
  return request({
    url: url,
    method: 'get'
  })
}

// 删除举报
export const fetchReportMsgDelete = (query) => {
  return request({
    url: 'reportproduct/delete',
    method: 'post',
    data: query
  })
}

// 查看被举报的产品
export const fetchReportProductMsg = (query) => {
  return request({
    url: 'reportproduct/getProduct',
    method: 'post',
    data: query
  })
}

// 下架被举报的产品、处理举报
export const fetchReportProduct = (query) => {
  return request({
    url: 'reportproduct/update',
    method: 'post',
    data: query
  })
}
