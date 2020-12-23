$(function() {
    var data = $.ajax('http://34.122.140.150:5001/verClientes')
    .done(function(response) {
        response.forEach(user => {
          $('#usuarios').append(
            '<tr>' +
              '<td>' + user.Nombre + '</td>' +
              '<td>' + user.Cargo + '</td>' +
              '<td>' + user.Edad + '</td>' +
              '<td><button data-id="'+user.Nombre+'" class="deletor">Borrar</button></td>' +
            '</tr>'
          )
        })
        bindDeletes()
    })
  
    const bindDeletes = () => {
      $('.deletor').click(function() {
          const name =  $(this).data('id')
          const c = confirm('Seugro que queres borrar este usuario?')
          if(c) {
            $.ajax({
              url: 'http://34.122.140.150:5001/mongodb',
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              },
              dataType: 'json',
              data: JSON.stringify({
                database: "ERP",
                collection: "Clientes",
                Filter: {
                  "Nombre": name
                }
              })
            }).done(function() {
              alert('se fue')
              window.location.reload()
            })
          }
      })
    }
    
    $('#save-user').click(function() {
      var name = $('#nombre').val()
      var role = $('#role').val()
      var age = $('#age').val()
      
      $.ajax({
        url: 'http://34.122.140.150:5001/mongodb',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        dataType: 'json',
        data: JSON.stringify({
          database: "ERP",
          collection: "Clientes",
          Document: {
            "Nombre": name,
            "Cargo": role,
            "Edad": age
          }
        })
      }).done(function() {
        alert('Guardado')
      })
    })
  })