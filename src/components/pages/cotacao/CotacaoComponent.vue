<template>
    <layout-padrao>
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <h1>Cotações</h1>
            </section>
            <section class="content">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">Nova Cotação</h3>
                            </div>
                            <form>
                                <div class="box-body">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-sm-6 col-md-3">
                                                <label class="form-label">Data</label>
                                                <div class="input-group">
                                                    <div class="input-group-addon">
                                                        <i class="fa fa-calendar"></i>
                                                    </div>
                                                    <input type="text" class="form-control data" id="data">
                                                </div>
                                            </div>

                                            <div class="col-sm-6 col-md-9">
                                                <label class="form-label">Item</label>
                                                <input type="text" name="name" class="form-control" value>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-sm-12 col-md-6">
                                                <label>Minimal</label>
                                                <div class="input-group">
                                                    <select class="form-control select_cliente" style="width: 100%;">
                                                        <option selected="selected">Alabama</option>
                                                        <option>Alaska</option>
                                                        <option>California</option>
                                                        <option>Delaware</option>
                                                        <option>Tennessee</option>
                                                        <option>Texas</option>
                                                        <option>Washington</option>
                                                    </select>
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-success btn-flat"
                                                            data-toggle="modal" data-target="#modal-default">
                                                            <i class="fa fa-plus"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <label class="form-label">Ação</label>
                                                <input type="text" name="acao" class="form-control" value>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <label class="form-label">Pedido cliente</label>
                                                <div class="input-group">
                                                    <span class="input-group-addon">
                                                        <input type="checkbox" v-model="tem_pedido">
                                                    </span>
                                                    <input type="text" class="form-control" v-bind:disabled="!tem_pedido">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-sm-6 col-md-3">
                                                <label class="form-label">Data Vencimento</label>
                                                <div class="input-group">
                                                    <div class="input-group-addon">
                                                        <i class="fa fa-calendar"></i>
                                                    </div>
                                                    <input type="text" class="form-control data" id="vencimento">
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-4">
                                                <label class="form-label">Forma de pagamento</label>
                                                <input type="text" name="forma_pagamento" class="form-control" value>
                                            </div>
                                            <div class="col-sm-12 col-md-5">
                                                <label class="form-label">Justificativa</label>
                                                <input type="text" name="justificativa" class="form-control" value>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /.box-body -->
                                <div class="box-footer">
                                    <button type="submit" class="btn btn-success pull-rigth">Salvar</button>
                                </div>
                            </form>
                        </div>
                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">Fornecedores</h3>
                            </div>
                            <div class="box-body">
                                
                                    <FornecedoresCotacao>

                                    </FornecedoresCotacao>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <modal header="Novo Cliente">
            <section slot="body">
                <form>
                    <div class="form-group">
                        <label for="nome">Cliente Nome</label>
                        <input type="hidden" name="id_cliente" v-model="cliente.id_cliente">
                        <input type="text" class="form-control" 
                            v-model="cliente.nome_cliente" 
                            name="nome_cliente" id="nome" 
                            placeholder="Digite o nome do cliente:">
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
import FornecedoresCotacao from "@/components/pages/fornecedores-cotacao/FornecedoresCotacaoComponent";

export default {
  name: "Cotacao",
  data: function() {
    return {
      tem_pedido: false,
      cliente: {
        id_cliente: null,
        nome_cliente: ""
      }
    };
  },
  components: {
    LayoutPadrao,
    Modal,
    FornecedoresCotacao
  },
  mounted: function() {
    carregaPlugins();
  }
};
</script>

<style>
</style>
