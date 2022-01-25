# Hello VuePress

```vue
<template>
  <component v-if="dynamicComponent" :is="dynamicComponent"></component>
</template>
<script>
export default {
  data() {
    return {
      dynamicComponent: null
    }
  },
  mounted () {
    import('./lib-that-access-window-on-import').then(module => {
      this.dynamicComponent = module.default
    })
  }
}
</script>
```
<el-button>hello</el-button>
  