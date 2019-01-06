import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home/HomeComponent'
import Login from "@/components/pages/login/LoginComponent";
import Clientes from "@/components/pages/clientes/ClientesComponent";
import Fornecedores from "@/components/pages/fornecedores/FornecedoresComponent";
import Cotacao from "@/components/pages/cotacao/CotacaoComponent";
import Perfil from "@/components/pages/perfil/PerfilComponent";

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path : '/login',
      name: 'Login',
      component: Login
    },
    {
      path : '/perfil',
      name: 'Perfil',
      component: Perfil
    },
    {
      path : '/clientes',
      name: 'Clientes',
      component: Clientes 
    },
    {
      path : '/fornecedores',
      name: 'Fornecedores',
      component: Fornecedores 
    },
    {
      path: '/cotacao',
      name: 'Cotacao',
      component: Cotacao
    }
  ]
})