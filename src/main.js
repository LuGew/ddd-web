import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import VueI18n from "vue-i18n";
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

Vue.use(Antd);
Vue.use(VueI18n)

const messages = {
    zh: {
        input: "输入",
        username: "用户名",
        password: "密码",
        login: "登陆",
        please_input_username: "请输入用户名",
        please_input_password: "请输入密码"
    },
    en: {}
}

const i18n = new VueI18n({
    locale: "zh",
    messages
});

new Vue({
    i18n,
    render: h => h(App),
}).$mount('#app')


