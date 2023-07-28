function mostrarNotificacion() {
    var notificacion = document.querySelector('.notificacion.success');
    notificacion.classList.add('mostrar');
  
    setTimeout(function () {
      cerrarNotificacion();
    }, 2000); // Cerrar la notificación automáticamente después de 5 segundos
  }
  
  function cerrarNotificacion() {
    var notificacion = document.querySelector('.notificacion.success');
    notificacion.classList.remove('mostrar');
  }