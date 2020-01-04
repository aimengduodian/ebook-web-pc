import request from '../../utils/request'

export const fetchGetElectronicsList = query => {
  return request({
    url: 'electronics/electronics',
    method: 'post',
    data: query
  })
}

export const fetchDeleteElectronics = query => {
  return request({
    url: 'electronics/delete',
    method: 'post',
    data: query
  })
}
