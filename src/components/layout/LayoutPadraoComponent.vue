<template>
  <div class="skin-blue layout-top-nav" >
    <div class="wrapper">
      <header class="main-header">
        <nav class="navbar navbar-static-top">
          <div class="container">
            <div class="navbar-header">
              <a href class="navbar-brand">
                <b>Admin</b>LTE
              </a>
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar-collapse"
              >
                <i class="fa fa-bars"></i>
              </button>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
              <ul class="nav navbar-nav">
                <router-link tag="li" to="/home">
                  <a>Home</a> 
                </router-link> 
                <router-link tag="li" to="/clientes">
                  <a>Clientes</a>
                </router-link>
                <router-link tag="li" to="/fornecedores">
                  <a>Forncedores</a>
                </router-link>
              </ul>
            </div>
            <!-- /.navbar-collapse -->
            <!-- Navbar Right Menu -->
            <div class="navbar-custom-menu">
              <ul class="nav navbar-nav">
                <!-- User Account Menu -->
                <li class="dropdown user user-menu">
                  <!-- Menu Toggle Button -->
                  <a href="" class="dropdown-toggle" data-toggle="dropdown">
                    <!-- The user image in the navbar-->
                    <img
                      :src="usuario.imagem"
                      class="user-image"
                      alt="User Image"
                    >
                    <!-- hidden-xs hides the username on small devices so only the image appears. -->
                    <span class="hidden-xs">{{usuario.name}}</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="user-footer">
                      <div class="pull-left">
                        <router-link to="/perfil" class="btn btn-default btn-flat">Perfil</router-link>
                      </div>
                      <div class="pull-right">
                        <a class="btn btn-default btn-flat" v-on:click="sair()">Sair</a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- /.navbar-custom-menu -->
          </div>
          <!-- /.container-fluid -->
        </nav>
      </header>

      <main>
        <slot></slot>
      </main>

      <footer class="main-footer">
        <div class="container">
          <div class="pull-right hidden-xs">
            <b>Version</b> 2.4.0
          </div>
          <strong>
            Copyright &copy; 2014-2016
            <a href="https://adminlte.io">Almsaeed Studio</a>.
          </strong> All rights
          reserved.
        </div>
        <!-- /.container -->
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "LayoutPadrao",
  data(){
    return {
      usuario: false
    }
  },
  created(){
    let usuarioAux = sessionStorage.getItem('usuario');
    if(usuarioAux){
      this.usuario = JSON.parse(usuarioAux);
    }else{
      this.$router.push('/login');
    }
  },
  methods:{
    sair(){
      sessionStorage.clear();
      this.usuario = false;
      this.$router.push('/login');
    }
  }
};
</script>
<style>
</style>