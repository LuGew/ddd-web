<template>
  <a-form layout="horizontal">
    <a-form-item
        :label="$t('username')"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-input :placeholder="$t('please_input_username')"/>
    </a-form-item>
    <a-form-item
        :label="$t('password')"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-input :placeholder="$t('please_input_password')"/>
    </a-form-item>
    <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary">
        {{ $t('login') }}
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
    };
  },
  computed: {
    formItemLayout() {
      const {formLayout} = this;
      return formLayout === 'horizontal'
          ? {
            labelCol: {span: 4},
            wrapperCol: {span: 14},
          }
          : {};
    },
    buttonItemLayout() {
      const {formLayout} = this;
      return formLayout === 'horizontal'
          ? {
            wrapperCol: {span: 14, offset: 4},
          }
          : {};
    },
  },
  methods: {
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
  },
}
</script>

<style scoped>

</style>
