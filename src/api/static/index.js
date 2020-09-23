import request from '../../utils/request'

export const fetchBookType = () => {
  return request({
    url: 'booktype/booktypes',
    method: 'post',
    data: {}
  })
}

export const fetchElectronicsType = () => {
  return request({
    url: 'electronicstype/electronicsTypes',
    method: 'post',
    data: {}
  })
}

export const fetchReportType = () => {
  return request({
    url: 'reporttype/reporttypeinfo',
    method: 'post',
    data: {}
  })
}
