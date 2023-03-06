import { createApp } from 'vue'
import App from './App.vue'

import './style.css'
import router from './routers/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElIcons from '@element-plus/icons'

const app = createApp(App)
for (const name in ElIcons){
	app.component(name,(ElIcons as any)[name])
}

createApp(App).use(ElementPlus).use(router).mount('#app')
