<template>
  <layout-padrao>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>Clientes</h1>
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="row"> 
          <div class="col-xs-12">
            <div class="box">
              <div class="box-header">
                <h3 class="box-title">Listagem de Clientes</h3>
                <div class="box-tools pull-right">
                  <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modal-default">
                    <i class="fa fa-plus"></i>
                  </button>
                </div>
              </div>
              <!-- /.box-header -->
              <div class="box-body table-responsive">
                <table id="example2" class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Cód</th>
                      <th>Nome</th>
                      <th>#</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>MOUSE GAMER RAZER</td>
                      <td style="width:15%">
                        <div class="btn-group">
                          <button type="button" class="btn btn-default"><i class="fa fa-eye"></i></button>
                          <button type="button" class="btn btn-default" v-on:click="editaCliente(1)" data-toggle="modal" data-target="#modal-default"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>MOUSE GAMER RAZER</td>
                      <td style="width:15%">
                        <div class="btn-group">
                          <button type="button" class="btn btn-default"><i class="fa fa-eye"></i></button>
                          <button type="button" class="btn btn-default" v-on:click="editaCliente(1)" data-toggle="modal" data-target="#modal-default"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>MOUSE GAMER RAZER</td>
                      <td style="width:15%">
                        <div class="btn-group">
                          <button type="button" class="btn btn-default"><i class="fa fa-eye"></i></button>
                          <button type="button" class="btn btn-default" v-on:click="editaCliente(1)" data-toggle="modal" data-target="#modal-default"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>MOUSE GAMER RAZER</td>
                      <td style="width:15%">
                        <div class="btn-group">
                          <button type="button" class="btn btn-default"><i class="fa fa-eye"></i></button>
                          <button type="button" class="btn btn-default" v-on:click="editaCliente(1)" data-toggle="modal" data-target="#modal-default"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>MOUSE GAMER RAZER</td>
                      <td style="width:15%">
                        <div class="btn-group">
                          <button type="button" class="btn btn-default"><i class="fa fa-eye"></i></button>
                          <button type="button" class="btn btn-default" v-on:click="editaCliente(1)" data-toggle="modal" data-target="#modal-default"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>MOUSE GAMER RAZER</td>
                      <td style="width:15%">
                        <div class="btn-group">
                          <button type="button" class="btn btn-default"><i class="fa fa-eye"></i></button>
                          <button type="button" class="btn btn-default" v-on:click="editaCliente(1)" data-toggle="modal" data-target="#modal-default"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>MOUSE GAMER RAZER</td>
                      <td style="width:15%">
                        <div class="btn-group">
                          <button type="button" class="btn btn-default"><i class="fa fa-eye"></i></button>
                          <button type="button" class="btn btn-default" v-on:click="editaCliente(1)" data-toggle="modal" data-target="#modal-default"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>MOUSE GAMER RAZER</td>
                      <td style="width:15%">
                        <div class="btn-group">
                          <button type="button" class="btn btn-default"><i class="fa fa-eye"></i></button>
                          <button type="button" class="btn btn-default" v-on:click="editaCliente(1)" data-toggle="modal" data-target="#modal-default"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>MOUSE GAMER RAZER</td>
                      <td style="width:15%">
                        <div class="btn-group">
                          <button type="button" class="btn btn-default"><i class="fa fa-eye"></i></button>
                          <button type="button" class="btn btn-default" v-on:click="editaCliente(1)" data-toggle="modal" data-target="#modal-default"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>MOUSE GAMER RAZER</td>
                      <td style="width:15%">
                        <div class="btn-group">
                          <button type="button" class="btn btn-default"><i class="fa fa-eye"></i></button>
                          <button type="button" class="btn btn-default" v-on:click="editaCliente(1)" data-toggle="modal" data-target="#modal-default"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>MOUSE GAMER RAZER</td>
                      <td style="width:15%">
                        <div class="btn-group">
                          <button type="button" class="btn btn-default"><i class="fa fa-eye"></i></button>
                          <button type="button" class="btn btn-default" v-on:click="editaCliente(1)" data-toggle="modal" data-target="#modal-default"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>MOUSE GAMER RAZER</td>
                      <td style="width:15%">
                        <div class="btn-group">
                          <button type="button" class="btn btn-default"><i class="fa fa-eye"></i></button>
                          <button type="button" class="btn btn-default" v-on:click="editaCliente(1)" data-toggle="modal" data-target="#modal-default"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>MOUSE GAMER RAZER</td>
                      <td style="width:15%">
                        <div class="btn-group">
                          <button type="button" class="btn btn-default"><i class="fa fa-eye"></i></button>
                          <button type="button" class="btn btn-default" v-on:click="editaCliente(1)" data-toggle="modal" data-target="#modal-default"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>MOUSE GAMER RAZER</td>
                      <td style="width:15%">
                        <div class="btn-group">
                          <button type="button" class="btn btn-default"><i class="fa fa-eye"></i></button>
                          <button type="button" class="btn btn-default" v-on:click="editaCliente(1)" data-toggle="modal" data-target="#modal-default"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>MOUSE GAMER RAZER</td>
                      <td style="width:15%">
                        <div class="btn-group">
                          <button type="button" class="btn btn-default"><i class="fa fa-eye"></i></button>
                          <button type="button" class="btn btn-default" v-on:click="editaCliente(1)" data-toggle="modal" data-target="#modal-default"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <modal header="Novo Cliente">
      <section slot="body">
        <form>
          <div class="form-group">
            <label for="nome">Cliente Nome</label>
            <input type="hidden" name="id_cliente" v-model="id_cliente">
            <input type="text" class="form-control" v-model="nome_cliente" name="nome_cliente" id="nome" placeholder="Digite o nome do cliente:">
          </div>
        </form>
      </section>
      <section slot="foot-btns">
        <button class="btn btn-default">Salvar</button>
      </section>
    </modal>
  </layout-padrao>
</template>

<script>
import LayoutPadrao from "@/components/layout/LayoutPadraoComponent";
import Modal from "@/components/layout/ModalComponent";

export default {
  name: "Clientes",
  data(){
    return{
      nome_cliente: '',
      id_cliente: null
    }
  },
  components: {
    LayoutPadrao,
    Modal
  },
  mounted: function() {
    carregaPlugins();
  },
  methods: {
    editaCliente(id) {
      console.log("entrou");
      
      this.nome_cliente = "jose";
      this.id_cliente = 1;
    }
  }
};
</script>

<style>
</style>
 