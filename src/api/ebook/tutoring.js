import request from '../../utils/request'

export const fetchGetTutoringList = query => {
  return request({
    url: 'tutoring/tutorings',
    method: 'post',
    data: query
  })
}

export const fetchDeleteTutoring = query => {
  return request({
    url: 'tutoring/delete',
    method: 'post',
    data: query
  })
}

