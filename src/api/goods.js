import request from '@/utils/request'

export function fetchTagList(query) {
  return request({
    url: '/goods/tag',
    method: 'get',
    params: query // page limit
  })
}
