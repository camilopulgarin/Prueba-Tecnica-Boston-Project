import Vue from 'vue';
import VueRouter from 'vue-router';
import componente from '../components/component.vue';
import App from '../components/App.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Hello from '../components/Hello.vue';

Vue.use(VueRouter);

//Definicion de rutas a vistas 

export default new VueRouter({
    routes : [
    {
      path: '/Manager',
      name: 'comp',
      component: componente
    },
    {
        path: '/App',
        name: 'App',
        component: App
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
      },
      {
        path: '/Register',
        name: 'Register',
        component: Register
      },
      {
        path: '/',
        name: 'Hello',
        component: Hello
      },
]})