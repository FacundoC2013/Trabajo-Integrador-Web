    const resultado = document.getElementById("resultado");

    function validarFormulario(e) {
      e.preventDefault(); 
      document.querySelectorAll(".error").forEach(el => el.textContent = "");
      resultado.textContent = "";

      let username = document.getElementById("username").value.trim();
      let email = document.getElementById("email").value.trim();
      let telefono = document.getElementById("telefono").value;
      let password = document.getElementById("password").value;
      let confirm = document.getElementById("confirm-password").value;
      let terms = document.getElementById("terms").checked;

      let valido = true;


      if (username.length < 10 || username.length > 20) {
        let contenedor = document.getElementById('error-username');
        let mensaje = document.createElement('p');
        mensaje.textContent = "El nombre debe tener entre 10 y 20 caracteres";
        contenedor.appendChild(mensaje);
        valido = false;
      }

      let emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!emailRegex.test(email)) {
        let contenedor = document.getElementById('error-email');
        let mensaje = document.createElement('p');
        mensaje.textContent =  "Correo Electrónico no válido"
        contenedor.appendChild(mensaje);
        valido = false;
      }

      let telefonoRegex = /^[0-9\s\-\(\)]{7,20}$/;
      if(!telefonoRegex.test(telefono)){
        let contenedor = document.getElementById("error-telefono");
        let mensaje = document.createElement('p');
        mensaje.textContent = "El telefono debe tener entre 7 y 20 numeros"
        contenedor.appendChild(mensaje);
        valido = false;
      }

      if (password.length <= 8) {
        let contenedor = document.getElementById("error-password");
        let mensaje = document.createElement('p');
        mensaje.textContent = "La contraseña debe tener más de 8 caracteres.";
        contenedor.appendChild(mensaje);
        valido = false;
      }

      if (confirm.length <= 8 || confirm !== password) {
        let contenedor = document.getElementById('error-confirm');
        let mensaje = document.createElement('p');
        mensaje.textContent = "Las contraseñas no coinciden o son cortas.";
        contenedor.appendChild(mensaje);
        valido = false;
      }

      if (!terms) {
        let contenedor = document.getElementById("error-terms");
        let mensaje = document.createElement('p');
        mensaje.textContent = "Debe aceptar los términos y condiciones.";
        contenedor.appendChild(mensaje);
        valido = false;
      }

      if (valido) {
        resultado.style.display = "block";
        resultado.textContent = "Usuario " + username + " con email " + email + " creado con éxito!";
        form.reset();
      }
    }