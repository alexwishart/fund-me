var socket = io.connect();

socket.on('typopup', function(data) {
  $('#myModal').modal('show');
  setTimeout(function() {$('#myModal').modal('hide');}, 4000);
});
