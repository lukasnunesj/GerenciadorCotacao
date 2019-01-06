<template>
    <table id="example3" class="table table-bordered table-hover">
        <thead>
            <tr>
                <th>FORNECEDOR</th>
                <th>QTD</th>
                <th>VALOR(s)</th>
                <th>TOTAL</th>
                <th>#</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="cotacao in cotacaoForn" :key="cotacao.id_fornecedor">
                <td>
                    <select class="form-control select_fornecedor" v-model="cotacao.id_fornecedor" style="width: 100%;">
                        <option value="5" selected="selected">Alabama</option>
                        <option value="1">Alaska</option>
                        <option value="2">California</option>
                        <option value="3">Delaware</option>
                        <option value="4">Tennessee</option>
                        <option value="5">Texas</option>
                        <option value="6">Washington</option>
                    </select>
                </td>
                <td>
                    <money class="form-control text-right" v-model="cotacao.quantidade" v-bind="money"></money>
                </td>
                <td>
                    <div class="input-group">
                        <span class="input-group-addon">R$</span>
                        <money class="form-control text-right" v-model="cotacao.valor" v-bind="money"></money>
                    </div>
                </td>
                <td>
                    R$ {{(cotacao.quantidade * cotacao.valor) | numerico(2, ',', '.')}}
                </td>
                <td>

                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import {Money} from 'v-money'

export default {
    name: "FornecedoresCotacao",
    components:{
        Money
    },
    data () {
      return {
        cotacaoForn:[],
        money: {
          decimal: ',',
          thousands: '.',
          prefix: '',
          suffix: '',
          precision: 2,
          masked: false /* doesn't work with directive */
        }
      }
    },
    methods: {
        setFornecedoresCotacao(){
            this.cotacaoForn.push({
                id_fornecedor: 1,
                quantidade: 10,
                valor: 5.6
            });
            this.cotacaoForn.push({
                id_fornecedor: 2,
                quantidade: 2,
                valor: 257.52
            });
            this.cotacaoForn.push({
                id_fornecedor: 3,
                quantidade: 7,
                valor: 8356.6
            });
        }
    },
    created: function(){
        this.setFornecedoresCotacao()
        console.log(this.cotacaoForn);
    },
    filters:{
        numerico(n, c, d, t){
            var c = isNaN(c = Math.abs(c)) ? 2 : c,
                d = d == undefined ? "." : d,
                t = t == undefined ? "," : t,
                s = n < 0 ? "-" : "",
                i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
                j = (j = i.length) > 3 ? j % 3 : 0;
            return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
        }
    }
}
</script>

<style>

</style>
