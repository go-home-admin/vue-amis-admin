export function getUrlParams(search) {
  search = search || location.search
  const paramsSplit = search.replace(/^[^\?]*\?/i, '').split('&')
  const params = {}

  if (Array.isArray(paramsSplit)) {
    paramsSplit.forEach(function(item) {
      const itemSplit = item.split('=')
      if (itemSplit.length === 2) {
        params[itemSplit[0]] = itemSplit[1]
      }
    })
  }
  return params
}

export function ObjToUrlParams(data) {
  let url = ''
  for (const i in data) {
    url += '&' + i + '=' + data[i]
  }
  return url.substring(1)
}
