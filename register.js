const registrationForm = document.getElementById('registration-form')

registrationForm.addEventListener('submit', function(event){
  event.preventDefault()
  const formData = new FormData(this)
  // Iniciar una animación de carga
  fetch('register.php', {
    method: 'POST',
    body: formData
  }).then(response => {
    return response.text()
  }).then(text => {
    console.log(text)
    // Finalizar la animación
    // Mostrar el texto
  }).catch(error => {
    console.error(error)
    // Mostrar el mensaje de error
  })
})