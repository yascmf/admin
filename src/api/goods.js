import request from '@/utils/request'

/* ----- TAG START -----*/
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

export function getTag(id) {
  return request({
    url: '/goods/tag/' + id,
    method: 'get'
  })
}

export function updateTag(id, name, desc) {
  return request({
    url: '/goods/tag/' + id,
    method: 'put',
    data: {
      name,
      desc
    }
  })
}
/* ----- TAG END -----*/

/* ----- GOOD START -----*/
export function fetchGoodList(query) {
  return request({
    url: '/goods/good',
    method: 'get',
    params: query // page limit
  })
}

export function createGood(name, desc) {
  return request({
    url: '/goods/good/create',
    method: 'post',
    data: {
      name,
      desc
    }
  })
}

export function getGood(id) {
  return request({
    url: '/goods/good/' + id,
    method: 'get'
  })
}

export function updateGood(id, name, desc) {
  return request({
    url: '/goods/tag/' + id,
    method: 'put',
    data: {
      name,
      desc
    }
  })
}
/* ----- GOOD END -----*/
