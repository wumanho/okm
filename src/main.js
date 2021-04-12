import Vue from 'vue'
import router from "@/./router"
import axios from "axios";
import App from './App.vue'
import VueLazyload from "vue-lazyload";
import VueCookie from "vue-cookie"
import store from "./store"
import {Button, Message} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
//import env from "@/env.js"

const mock = false
if (mock) {
    require("@/mock/api")
}
//axios.defaults.baseURL = env.baseURL
axios.defaults.baseURL = "/api"
axios.defaults.timeout = 8000

/**
 * 接口错误拦截
 */
axios.interceptors.response.use(function (response) {
    let res = response.data
    let path = location.hash
    if (res.status === 0) {
        return res.data
    } else if (res.status === 10) {
        if (path !== "#/index") {
            window.location.href = "/#/login"
        }
        return Promise.reject(res.msg)
    } else {
        // alert(res.msg)
        Message.warning(res.msg)
        return Promise.reject(res.msg)
    }
})

Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: 'imgs/loading-svg/loading-bars.svg',
    attempt: 1
})
Vue.use(VueCookie)
// Vue.use(Message)
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.$message = Message
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
