import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
//import Usuario from './components/usuario/Usuario'
//import UsuarioLista from './components/usuario/UsuarioLista'
//import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
//import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router)

const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioDetalhe')
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioEditar')

export default new Router({
  mode:'history',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    } else if(to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [{
    path: '/',
    component: Inicio,
    name: 'inicio'
  }, {
    path: '/usuario',
    component: Usuario,
    props: true,
    children: [
      { path: '', component: UsuarioLista },
      { path: ':id', component: UsuarioDetalhe, props: true },
      { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' }
    ]
  }, {
    path: '/redirecionar',
    redirect: '/usuario'
  }, {
    path: '*',
    redirect: '/'
  }]
})

