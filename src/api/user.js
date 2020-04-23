import request from '@/utils/request'


export function getUser() {
  return request({
    url: '/a/user/get-user',
    method: 'get'
  })
}

