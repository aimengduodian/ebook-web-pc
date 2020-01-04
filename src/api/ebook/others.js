import request from '../../utils/request'

export const fetchGetOthersList = query => {
  return request({
    url: 'other/others',
    method: 'post',
    data: query
  })
}

export const fetchDeleteOthers = query => {
  return request({
    url: 'other/delete',
    method: 'post',
    data: query
  })
}

