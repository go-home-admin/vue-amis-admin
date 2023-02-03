<template>
  <div id="box" />
</template>

<script>

export default {
  name: 'Amis',
  data() {
    return {}
  },
  mounted() {
    // eslint-disable-next-line no-undef
    var amis = amisRequire('amis/embed')
    console.log(amis)

    amis.embed('#box', {
      type: 'page',
      title: '表单页面',
      body: {
        type: 'form',
        mode: 'horizontal',
        api: '/saveForm',
        body: [
          {
            label: 'Name',
            type: 'input-text',
            name: 'name'
          },
          {
            label: 'Email',
            type: 'input-email',
            name: 'email'
          }
        ]
      }
    })
  }
}
</script>
