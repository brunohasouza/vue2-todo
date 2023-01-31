import './set-public-path'
import Vue from 'vue'
import App from './App.vue'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

const lifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App)
  }
})

export const { boostrap, mount, unmount } = lifecycles
