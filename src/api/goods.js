import request from '@/utils/request'

export function fetchTagList(query) {
  return request({
    url: '/goods/tag',
    method: 'get',
    params: query // page limit
  })
}

export function createTag(name, desc) {
  return request({
    url: '/goods/tag/create',
    method: 'post',
    data: {
      name,
      desc
    }
  })
}
