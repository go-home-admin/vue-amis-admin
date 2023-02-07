<template>
  <div class="box-container">
    <div id="box" />
  </div>
</template>

<script>

import request from '@/utils/request'
import { getUrlParams, ObjToUrlParams } from '@/utils/global'

export default {
  name: 'Amis',
  data() {
    return {
      // eslint-disable-next-line no-undef
      match: amisRequire('path-to-regexp').match
    }
  },
  mounted() {
    var amisUrl = this.$route.meta.amis
    if (amisUrl === '') {
      alert('路由元数据需要设置meta.amis')
      return
    }
    request(amisUrl).then(res => {
      // eslint-disable-next-line no-undef
      amisRequire('amis/embed').embed('#box', res.data, {},
        {
          updateLocation: function(to, replace) {
            const location = window.location
            const idx = location.hash.indexOf('?')
            const oldParams = ~idx ? getUrlParams(location.hash.substring(idx + 1)) : {}
            const newParams = getUrlParams(to)
            const locationHash = ~idx ? location.hash.substring(0, idx) : location.hash
            Object.assign(oldParams, newParams)
            const searchStr = ObjToUrlParams(oldParams)
            if (searchStr !== '') {
              window.history.pushState(null, '', locationHash + '?' + searchStr)
            }
          }
        })
    })
  },
  methods: {}
}
</script>

<style scoped>
#box {
  margin-top: -1px;
}

.box-container {
  margin-top: 2px;
}
</style>
