import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import {firebaseApp, db, auth} from '@/Firebase/firebase'

import swal from 'sweetalert2'
import vSelect from "vue-select";

import './assets/main.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import jquery from 'jquery'
import lodash from 'lodash'
import 'datatables.net-bs5'
window.$ = jquery
window.swal = swal
window._ = lodash

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.component("v-select", vSelect)

app.mount('#app')
