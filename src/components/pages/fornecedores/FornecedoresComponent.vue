<template>
  <layout-padrao>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>Fornecedores</h1>
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="row">
          <div class="col-xs-12">
            <div class="box">
              <div class="box-header">
                <h3 class="box-title">Listagem de Fornecedores</h3>
                <div class="box-tools pull-right">
                  <button
                    type="button"
                    class="btn btn-info"
                    data-toggle="modal"
                    data-target="#modal-default"
                  >
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
                      <th>Localização</th>
                      <th>#</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td>1</td>
                        <td>Jose</td>
                        <td>Limeira / SP</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Felipe</td>
                        <td>Belo Horizonte / MG</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Dignissimos</td>
                        <td>Salvador / BA</td>
                        <td></td>
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
    <modal header="Novo Fornecedor">
      <section slot="body">
        <form>
          <div class="form-group">
            <label for="nome_forn">Nome</label>
            <input type="hidden" name="id_forn" v-model="fornecedor.id">
            <input type="text" class="form-control" v-model="fornecedor.nome" name="nome_forn" id="nome_forn" placeholder="Digite o nome do Fornecedor:">
          </div>
          <div class="form-group">
            <label for="telefone_forn">Telefone</label>
            <input type="tel" v-model="fornecedor.telefone" v-mask="['(##) ####-####', '(##) #####-####']" class="form-control" name="telefone_forn" id="telefone_forn" placeholder="(00) 0000-0000"  />
          </div>
          <div class="form-group">
            <label>Estado </label>
            <Select2 v-model="fornecedor.estado" nome="estado-forn">
              <option disabled value="0">Select one</option>
            </Select2>
          </div> 
          <div v-if="fornecedor.estado" class="form-froup">
            <label>Cidade </label>
            <Select2 v-model="fornecedor.cidade" nome="cidade-forn" :estado="fornecedor.estado">
              <option disabled value="0">Select one</option>
            </Select2>
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
import {mask} from 'vue-the-mask'
import Select2 from "@/components/layout/SelectComponent";

export default {
  name: "Forncedores",
  components: {
    LayoutPadrao,
    Modal,
    Select2
  },
  data(){
    return {
      fornecedor: {
        id: null,
        nome: "",
        telefone: "",
        estado: null,
        cidade: null
      }
    }
  },
  directives: {mask},
  methods:{
    log(){ 
      console.log(this.fornecedor)
    }
  },
  mounted: function(){
    carregaPlugins();
  },
  
};
</script>

<style>
</style>
