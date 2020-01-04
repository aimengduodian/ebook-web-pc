import request from '../../utils/request'

export const fetchGetBooksList = query => {
  return request({
    url: 'book/books',
    method: 'post',
    data: query
  })
}

export const fetchDeleteBook = query => {
  return request({
    url: 'book/delete',
    method: 'post',
    data: query
  })
}

