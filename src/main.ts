import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n';

import './style.css'
import router from './routers/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElIcons from '@element-plus/icons'
import pinia from './store/index';

const app = createApp(App);

for (const name in ElIcons){
	app.component(name,(ElIcons as any)[name])
}
console.log(i18n)
createApp(App).use(ElementPlus).use(router).use(i18n).use(pinia).mount('#app')