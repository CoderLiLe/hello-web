<template>
  <div>
    <h3>需求1：不用v-model实现双向绑定</h3>
    <input type="text" />
    <hr />

    <h3>需求2：实现输入框组件的v-model</h3>
    <MyInput></MyInput>
    <hr />

    <h3>需求3：实现下拉框组件的v-model</h3>
    <MySelect></MySelect>
  </div>
</template>

<script>
import MyInput from './components/MyInput.vue'
import MySelect from './components/MySelect.vue'
export default {
  data () {
    return {}
  },
  components: {
    MyInput,
    MySelect
  }
}
</script>

<style lang="less" scoped></style>
