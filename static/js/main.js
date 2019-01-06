function carregaPlugins() {
  $('#example1').DataTable({
    columnDefs:[
      {"targets": [5], "orderable": false, "searchable":false}
    ]
  });
  $('#example2').DataTable({
    columnDefs:[
      {"targets": [3], "orderable": false, "searchable":false}
    ]
  });

  $('.data').datepicker({
    autoclose: true
  })

  $('#example3').DataTable({
    columnDefs:[
      {"targets": [4], "orderable": false, "searchable":false}
    ],
    'paging'      : false,
    'lengthChange': false,
    'searching'   : false,
    'ordering'    : true,
    'info'        : false,
    'autoWidth'   : false
  })

  $('.select_cliente, .select_fornecedor').select2();
  // $('.select2').select2({
  //   placeholder: "Selecione um estado",
  //   ajax: {
  //     url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
  //     dataType: 'json',
  //     data: function (params) {
  //       var query = {
          
  //       }

  //       // Query parameters will be ?search=[term]&type=public
  //       return query;
  //     },
  //     processResults: function (data) {
  //       results = $.map(data, function (obj) {
  //         obj.text = obj.nome; 
  //         return obj;
  //       });
  //       return {
  //         results: results.sort(compare)
  //       };
  //     }
  //   },
  // })
}

$(function () {
  
}) 

function compare(a,b) {
  if (a.text < b.text)
    return -1;
  if (a.text > b.text)
    return 1;
  return 0;
}