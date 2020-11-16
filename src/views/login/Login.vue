<template>
  <a-form id="box" layout="horizontal">
    <a-form-item
        :label="$t('username')"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
    >
      <a-input :placeholder="$t('please_input_username')"/>
    </a-form-item>
    <a-form-item
        :label="$t('password')"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
    >
      <a-input :placeholder="$t('please_input_password')"/>
    </a-form-item>
    <a-form-item :wrapper-col="wrapperCol">
      <a-button type="primary">
        {{ $t('login')  }}
        <router-link to="/foo">Go to Foo</router-link>
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      formLayout: 'horizontal',
      labelCol: {span: 4},
      wrapperCol: {span: 14}
    };
  },
  computed: {},
  methods: {},
}
</script>

<style scoped>
#box {
  width: 400px;
  margin: 0 auto;

}
</style>
