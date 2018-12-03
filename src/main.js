import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import http from './http/http'
import { Message } from 'element-ui';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
//注入路由
import router from "./router/routers";
Vue.prototype.$message = Message;
Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.use(mavonEditor);
Vue.prototype.$http = http;
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});