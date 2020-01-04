import request from '../../utils/request'

export const fetchBookType = () => {
  return request({
    url: 'booktype/booktypes',
    method: 'get'
  })
}

export const fetchElectronicsType = () => {
  return request({
    url: 'electronicstype/electronicsTypes',
    method: 'get'
  })
}

export const fetchReportType = () => {
  return request({
    url: 'reporttype/reporttypeinfo',
    method: 'get'
  })
}
