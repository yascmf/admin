import request from '@/utils/request'

export function getProfile() {
  return request({
    url: '/me/profile',
    method: 'get'
  })
}

export function updateProfile(form) {
  return request({
    url: '/me/profile',
    method: 'post',
    data: form
  })
}

export function logout() {
  return request({
    url: '/me/logout',
    method: 'post'
  })
}
