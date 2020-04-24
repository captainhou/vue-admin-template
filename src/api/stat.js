import request from '@/utils/request'

export function getPanelData() {
  return request({
    url: '/b/iqid/stat/get-data',
    method: 'get'
  })
}

export function idSearch(idType, idValue) {
  return request({
    url: `/b/iqid/search/get-search-data?id_type=${idType}&id_value=${idValue}`,
    method: 'get'
  })
}
