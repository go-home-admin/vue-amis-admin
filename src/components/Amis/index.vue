<template>
  <div class="box-container">
    <div id="box" />
  </div>
</template>

<script>

import { getUrlParams, ObjToUrlParams } from '@/utils/global'

export default {
  name: 'JsonPage',
  props: {
    value: {
      type: Object
    }
  },
  data() {
    return {
      // eslint-disable-next-line no-undef
      match: amisRequire('path-to-regexp').match,
      amisPage: undefined
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.amisPage = amisRequire('amis/embed').embed('#box', this.value, {},
      {
        replaceText: {
          API_HOST: process.env.VUE_APP_BASE_API
        },
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
  },
  destroyed() {
    if (this.amisPage !== undefined) {
      this.amisPage.unmount()
    }
  }
}
</script>

<style scoped>
.box-container {
  margin-top: 4px;
}
</style>
