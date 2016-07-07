var socket = io.connect('http://localhost:6001');

socket.on('typopup', function(data){
  $('#myModal').modal('show');
  setTimeout(function() {$('#myModal').modal('hide');}, 4000);
});
