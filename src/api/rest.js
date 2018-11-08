import request from '@/utils/request'

export function resourceIndex(module, query) {
  return request({
    url: '/' + module,
    method: 'get',
    params: query // page limit
  })
}

export function resourceStore(module, form) {
  return request({
    url: '/' + module,
    method: 'post',
    data: form
  })
}

export function resourceShow(module, id) {
  return request({
    url: '/' + module + '/' + id,
    method: 'get'
  })
}

export function resourceUpdate(module, id, form) {
  return request({
    url: '/' + module + '/' + id,
    method: 'put',
    data: form
  })
}

export function resourceDestroy(module, id) {
  return request({
    url: '/' + module + '/' + id,
    method: 'delete'
  })
}
