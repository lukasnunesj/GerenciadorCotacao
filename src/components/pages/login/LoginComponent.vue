<template>
  <div id="app" class="login-page">
    <div class="login-box">
      <div class="login-logo">
        <a href="../../index2.html">
          <b>Admin</b>LTE
        </a>
      </div>
      <!-- /.login-logo -->
      <div class="login-box-body">
        <p class="login-box-msg">Faça login para entrar no sistema</p>
          <div class="form-group has-feedback">
            <input type="email" class="form-control" placeholder="Email" v-model="email">
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input v-on:keyup.enter="login()" type="password" class="form-control" placeholder="Password" v-model="password">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <!-- /.col -->
            <div class="col-xs-offset-8 col-xs-4">
              <button v-on:click="login()" class="btn btn-primary btn-block btn-flat">Entrar</button>
            </div>
            <!-- /.col -->
          </div>
        <!-- /.social-auth-links -->
        <a href="#">Esqueci minha Senha</a>
        <br>
        <a href="register.html" class="text-center">Registrar-se</a>
      </div>
      <!-- /.login-box-body -->
    </div>
    <!-- /.login-box -->
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      email:'',
      password: ''
    }
  },
  methods:{
    login(){
      let loader = this.$loading.show({
      });
      this.$http.post(this.$urlAPI+`login`, {
        email: this.email,
        password:this.password
      })
      .then(response => {
        //console.log(response)
        if(response.data.status){
          // login com sucesso
          sessionStorage.setItem('usuario',JSON.stringify(response.data.usuario));
          this.$router.push('/');
          loader.hide()
        }else if(response.data.status == false && response.data.validacao){
          console.log('erros de validação')
          let erros = '';
          for(let erro of Object.values(response.data.erros)){
            erros += erro +" ";
          }
          alert(erros);
          loader.hide()
        }else{
          //login não existe
          alert('Login inválido!');
          loader.hide()
        }
      })
      .catch(e => {
        console.log(e)
        alert("Erro! Tente novamente mais tarde!");
        loader.hide()
      })
    }
  }
};
</script>

<style>
body{
    background: #d2d6de;
}
</style>

