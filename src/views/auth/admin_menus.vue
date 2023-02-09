<template>
  <JsonPage v-model="amis" />
</template>

<script>

import JsonPage from '@/components/Amis/index.vue'
import AppRouter from '@/router/app'

export default {
  name: 'AdminMenus',
  components: { JsonPage },
  props: {
    viewOptions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    const form = [
      {
        'label': '父级id',
        'name': 'parent_id',
        'value': 0,
        'type': 'input-number'
      },
      {
        'label': '组件名称',
        'name': 'name',
        'placeholder': '字符串唯一',
        'type': 'input-text'
      },
      {
        'label': '组件',
        'name': 'component',
        'type': 'select',
        'placeholder': '根节点不需要组件',
        'options': this.viewOptions ?? []
      },
      {
        'label': '地址',
        'name': 'path',
        'type': 'input-text'
      },
      {
        'label': '重定向',
        'name': 'redirect',
        'type': 'input-text'
      },
      {
        'label': '元数据',
        'language': 'json',
        'name': 'meta',
        'value': '{"title": "title","icon": "example", "amis": "url"}',
        'type': 'editor'
      },
      {
        'label': '排序',
        'name': 'sort',
        'value': '500',
        'type': 'input-text'
      }
    ]
    return {
      amis: {
        'type': 'page',
        'body': [
          {
            'api': 'API_HOST/menus/list',
            'autoGenerateFilter': true,
            'columns': [
              {
                'label': 'ID',
                'name': 'id',
                'searchable': {
                  'label': '自增',
                  'name': 'id',
                  'placeholder': 'test id',
                  'type': 'input-text'
                }
              },
              {
                'type': 'text',
                'label': '父级',
                'name': 'parent_id'
              },
              {
                'label': '排序',
                'name': 'sort',
                'type': 'text'
              },
              {
                'label': '组件名称',
                'name': 'name',
                'type': 'text'
              },
              {
                'label': '组件',
                'name': 'component',
                'type': 'text'
              },
              {
                'label': '地址',
                'name': 'path',
                'type': 'text'
              },
              {
                'label': '重定向',
                'name': 'redirect',
                'type': 'text'
              },
              {
                'label': '元数据',
                'levelExpand': 0,
                'name': 'meta',
                'type': 'json'
              },
              {
                'label': '排序',
                'name': 'sort',
                'type': 'text'
              },
              {
                'buttons': [
                  {
                    'actionType': 'dialog',
                    'dialog': {
                      'body': {
                        'api': {
                          'method': 'put',
                          'url': 'API_HOST/menus/edit?id=${id}'
                        },
                        'body': form,
                        'type': 'form'
                      },
                      'size': 'lg',
                      'title': '编辑'
                    },
                    'label': '编辑',
                    'level': 'primary',
                    'type': 'button'
                  },
                  {
                    'actionType': 'ajax',
                    'api': {
                      'method': 'delete',
                      'url': 'API_HOST/menus/del?id=${id}'
                    },
                    'className': 'text-danger',
                    'confirmText': '确定要删除？',
                    'label': '删除',
                    'level': 'primary',
                    'type': 'button'
                  }
                ],
                'label': '操作',
                'type': 'operation'
              }
            ],
            'headerToolbar': [
              {
                'actionType': 'dialog',
                'dialog': {
                  'body': {
                    'api': {
                      'method': 'post',
                      'url': 'API_HOST/menus'
                    },
                    'body': form,
                    'type': 'form'
                  },
                  'size': 'lg',
                  'title': '创建'
                },
                'label': '创建',
                'level': 'primary',
                'type': 'button'
              },
              'bulkActions'
            ],
            'type': 'crud'
          }
        ]
      }
    }
  },
  mounted() {
    for (const k in AppRouter) {
      this.viewOptions.push({
        label: AppRouter[k].name,
        value: AppRouter[k].name
      })
    }
  }
}
</script>
