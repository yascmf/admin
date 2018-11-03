import request from '@/utils/request'

/* ----- TAG START -----*/
export function fetchTagList(query) {
  return request({
    url: '/tag',
    method: 'get',
    params: query // page limit
  })
}

export function createTag(name, desc) {
  return request({
    url: '/tag/create',
    method: 'post',
    data: {
      name,
      desc
    }
  })
}

export function getTag(id) {
  return request({
    url: '/tag/' + id,
    method: 'get'
  })
}

export function updateTag(id, name, desc) {
  return request({
    url: '/tag/' + id,
    method: 'put',
    data: {
      name,
      desc
    }
  })
}
/* ----- TAG END -----*/

/* ----- Article START -----*/
export function fetchArticleList(query) {
  return request({
    url: '/article',
    method: 'get',
    params: query // page limit
  })
}

export function createArticle(name, desc) {
  return request({
    url: '/article/create',
    method: 'post',
    data: {
      name,
      desc
    }
  })
}

export function getArticle(id) {
  return request({
    url: '/article/' + id,
    method: 'get'
  })
}

export function updateArticle(id, name, desc) {
  return request({
    url: '/article/' + id,
    method: 'put',
    data: {
      name,
      desc
    }
  })
}
/* ----- Article END -----*/
