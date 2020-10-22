import Vue from 'vue';
import router from './router';
import App from './components/App.vue';
import componente from './components/component.vue';
import home from './components/Home.vue';


Vue.component('app-componente', componente);
new Vue({
    router,
    render: h => h(home)
}).$mount('#app');

