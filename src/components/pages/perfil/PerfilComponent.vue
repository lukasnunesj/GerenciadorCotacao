<template>
    <layout-padrao>
        <div class="content-wrapper">
            <section class="content-header">
                <h1>
                    Perfil
                </h1>
            </section>
            <section class="content">
                <div class="row">
                    <div class="col-md-3">
                        <div class="box box-primary">
                            <div class="box-body box-profile">
                                <img class="profile-user-img img-responsive img-circle" :src="usuario.imagem" alt="User profile picture">
                                <h3 class="profile-username text-center">{{usuario.name}}</h3>
                            </div>
                            <!-- /.box-body -->
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="nav-tabs-custom">
                            <ul class="nav nav-tabs">
                                <li class="active"><a href="#settings" data-toggle="tab">Configurações</a></li>
                            </ul>
                            <div class="tab-content">
                                <div class="active tab-pane" id="settings">
                                    <form class="form-horizontal">
                                        <div class="form-group">
                                            <label for="inputName" class="col-sm-2 control-label">Nome</label>

                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" id="inputName" v-model="name" placeholder="Nome">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="inputAvatar" class="col-sm-2 control-label">Avatar</label>

                                            <div class="col-sm-10">
                                                <input type="file" class="form-control" id="inputAvatar" v-on:change="salvaImagem" placeholder="Avatar">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-offset-2 col-sm-10">
                                                <button class="btn btn-danger" v-on:click.prevent="perfil()">Atualizar</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </layout-padrao>
</template>

<script>
import LayoutPadrao from "@/components/layout/LayoutPadraoComponent";

export default {
    name: 'Perfil',
    data () {
        return {
            usuario:false,
            name:'',
            imagem:''
        }
    },
    components: {
        LayoutPadrao
    },
    created(){
        let usuarioAux = sessionStorage.getItem('usuario');
        if(usuarioAux){
            this.usuario = JSON.parse(usuarioAux);
            this.name = this.usuario.name;
        }
    },
    methods:{
        salvaImagem(e){
            let arquivo = e.target.files || e.dataTransfer.files;
            if(!arquivo.length){
                return;
            }

            let reader = new FileReader();
            reader.onloadend = (e) => {
                this.imagem = e.target.result;
            };
            reader.readAsDataURL(arquivo[0]);
        },
        perfil(){
            this.$http.put(this.$urlAPI+`perfil`, {
                name: this.name,
                imagem: this.imagem,
            },{"headers":{"authorization":"Bearer "+this.usuario.token}})
            .then(response => {
                //console.log(response)
                if(response.data.status){
                    // login com sucesso
                    //console.log(response.data);
                    this.usuario = response.data.usuario;
                    sessionStorage.setItem('usuario',JSON.stringify(this.usuario));
                    alert('Perfil atualizado!');

                }else if(response.data.status == false && response.data.validacao){
                    // erros de validação
                    //console.log('erros de validação')
                    let erros = '';
                    for(let erro of Object.values(response.data.erros)){
                        erros += erro +" ";
                    }
                    alert(erros);
                }
            })
            .catch(e => {
                console.log(e)
                alert("Erro! Tente novamente mais tarde!");
            })
        }
    }
}
</script>

<style>

</style>
