<template>
  <select class="form-control" style="width:100%" v-bind:name="nome">
    <slot></slot>
  </select>
</template>

<script>
import axios from 'axios';

export default {
  name: "Select2",
  props: ["value", "nome", "estado"],
  data: function () {
      return {
          vm : this
      }
  },
  mounted: function() {
    this.carregaDados();
  },
  methods:{
      carregaDados(){
        var opt = [];
        var vm = this;
          if(this.nome == 'estado-forn'){
                axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
                    .then(response => {
                        response.data.forEach(estado => {
                            var estados = {
                                id: estado.id,
                                text: estado.nome+' - '+estado.sigla,
                            }
                            opt.push(estados);
                        });
                        // opt = opt.sort(compare); 
                        $(this.$el)
                            // init select2
                            .select2({ data: opt.sort(compare), placeholder: "Selecione um Estado" })
                            .val(this.value)
                            .trigger("change")
                            // emit event on change.
                            .on("change", function() {
                                vm.$emit("input", this.value);
                            });
                    })
                    .catch(e => {
                        alert("Aconteceu um problema ao carregar os estados. Por favor consulte o suporte!");
                        console.log(e);
                    })  
            } else if(this.nome == 'cidade-forn') {
                var url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+this.estado+'/municipios'
                axios.get(url)
                    .then(response => {
                        response.data.forEach(cidade => {
                            var cidades = {
                                id: cidade.id,
                                text: cidade.nome,
                            }
                            opt.push(cidades);
                        });
                        // opt = opt.sort(compare); 
                        if ($(this.$el).hasClass("select2-hidden-accessible")) {
                            $(this.$el).select2('destroy');
                            $(this.$el).find('option').remove();
                        }
                        $(this.$el)
                            // init select2
                            .select2({ data: opt.sort(compare), placeholder: "Selecione uma Cidade" })
                            .val(this.value)
                            .trigger("change")
                            // emit event on change.
                            .on("change", function() {
                                vm.$emit("input", this.value);
                            });
                    })
                    .catch(e => {
                        alert("Aconteceu um problema ao carregar as cidades. Por favor consulte o suporte!");
                        console.log(e);
                    })
            }
      }
  },
  watch: {
    value: function(value) {
      // update value
        $(this.$el)
            .val(value)
            .trigger("change");
        
    },
    estado: function(){
        this.carregaDados();
    }
  },
  destroyed: function() {
    $(this.$el)
      .off()
      .select2("destroy");
  }
};
</script>

<style>
</style>
