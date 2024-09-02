const validateName = (name) => {
  if(!name) return false;
  let lengthValid = name.trim().length >= 3 && name.trim().length <= 80;
  return lengthValid;
}

const validateEmail = (email) => {
  if (!email) return false;

  // validamos el formato
  let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let formatValid = re.test(email);

  // devolvemos la lógica AND de las validaciones.
  return formatValid;
};

const validatePhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return false;
  // validación de longitud
  let lengthValid = phoneNumber.length >= 8;

  // validación de formato
  let re = /^[0-9]+$/;
  let formatValid = re.test(phoneNumber);

  // devolvemos la lógica AND de las validaciones.
  return lengthValid && formatValid;
};

const validateNameDispositivo = (name) => {
  if(!name) return false;
  let lengthValid = name.trim().length >= 3;
  return lengthValid;
}

const validateAñosUso = (años) => {
  if (!años) return false;
  // validación de longitud
  let lengthValid = años.length <= 2;

  // validación de formato
  let re = /^[0-9]+$/;
  let formatValid = re.test(años);

  // devolvemos la lógica AND de las validaciones.
  return lengthValid && formatValid;
};

const validateFiles = (files) => {
  if (!files) return false;

  // validación del número de archivos
  let lengthValid = 1 <= files.length && files.length <= 3;

  // validación del tipo de archivo
  let typeValid = true;

  for (const file of files) {
    // el tipo de archivo debe ser "image/<foo>" o "application/pdf"
    let fileFamily = file.type.split("/")[0];
    typeValid &&= fileFamily == "image" || file.type == "application/pdf";
  }

  // devolvemos la lógica AND de las validaciones.
  return lengthValid && typeValid;
};

const validateSelect = (select) => {
  if(!select) return false;
  return true
}

const validateForm = () => {
  // obtener elementos del DOM usando el nombre del formulario.

  // variables auxiliares de validación y función.
  let invalidInputs = [];
  let isValid = true;
  const setInvalidInput = (inputName) => {
    invalidInputs.push(inputName);
    isValid &&= false;
  };

  let myForm = document.forms["formContacto"];
  let nombre = myForm["nombre"].value;
  let email = myForm["email"].value;
  let phoneNumber = myForm["phone"].value;
  let region = myForm["select-region"].value;
  let comuna = myForm["select-Comuna"].value;

  if (!validateName(nombre)) setInvalidInput("Nombre donante");
  if (!validateEmail(email)) setInvalidInput("Email donante");
  if (!validatePhoneNumber(phoneNumber)) setInvalidInput("Número celular donante");
  if (!validateSelect(region)) setInvalidInput("Región");
  if (!validateSelect(comuna)) setInvalidInput("Comuna");

  // lógica de validación
  document.querySelectorAll(".dispositivo-form").forEach(form => {
      let nameDispositivo = form["nombreDispositivo"].value;
      let tipo = form["tipo"].value;
      let añosUso = form["añosUso"].value;
      let estado = form["estado"].value;
      let files = form["files"].files;

      // Reutilizamos las funciones de validación existentes
      if (!validateNameDispositivo(nameDispositivo)) {
          setInvalidInput("Nombre dispositivo");
      }
      if (!validateSelect(tipo)) {
          setInvalidInput("Tipo");
      }
      if (!validateAñosUso(añosUso)) {
          setInvalidInput("Años de uso");
      }
      if (!validateSelect(estado)) {
          setInvalidInput("Estado funcionamiento");
      }
      if (!validateFiles(files)) {
          setInvalidInput("Fotos dispositivo");
      }
  });

  // finalmente mostrar la validación
  let validationBox = document.getElementById("val-box");
  let validationMessageElem = document.getElementById("val-msg");
  let validationListElem = document.getElementById("val-list");
  let formContainer = document.querySelector(".main-container");

  if (!isValid) {
    validationListElem.textContent = "";
    // agregar elementos inválidos al elemento val-list.
    for (input of invalidInputs) {
      let listElement = document.createElement("li");
      listElement.innerText = input;
      validationListElem.append(listElement);
    }
    // establecer val-msg
    validationMessageElem.innerText = "Los siguientes campos son inválidos:";

    // aplicar estilos de error
    validationBox.style.backgroundColor = "#ffdddd";
    validationBox.style.borderLeftColor = "#f44336";

    // hacer visible el mensaje de validación
    validationBox.hidden = false;
  } 
  else {
  // Ocultar todo el contenido del formulario
  Array.from(formContainer.children).forEach(child => {
    if (child !== validationBox) {
      child.style.display = "none";
    }
  });

  // Establecer mensaje de confirmación
  validationMessageElem.innerText = "¿Confirma que desea publicar esta donación?";
  validationListElem.textContent = "";

  // Aplicar estilos de éxito
  validationBox.style.backgroundColor = "#ddffdd";
  validationBox.style.borderLeftColor = "#4CAF50";

  // Crear botones para confirmar o volver
  let submitButton = document.createElement("button");
  submitButton.innerText = "Sí, confirmo";
  submitButton.style.marginRight = "10px";
  submitButton.addEventListener("click", () => {
    validationMessageElem.innerText = "Hemos recibido la información de su donación. Muchas gracias.";
    validationListElem.textContent = "";
    
    let goHomeButton = document.createElement("button");
    goHomeButton.innerText = "Volver al inicio";
    goHomeButton.addEventListener("click", () => {
      window.location.href = 'index.html';
    });
    
    validationListElem.innerHTML = ''; // Limpiar contenido anterior
    validationListElem.appendChild(goHomeButton);
  });

  let backButton = document.createElement("button");
  backButton.innerText = "No, quiero volver al formulario";
  backButton.addEventListener("click", () => {
    // Mostrar nuevamente todo el contenido del formulario
    Array.from(formContainer.children).forEach(child => {
      child.style.display = "";
    });
    validationBox.hidden = true;
  });

  validationListElem.innerHTML = ''; // Limpiar contenido anterior
  validationListElem.appendChild(submitButton);
  validationListElem.appendChild(backButton);

  // Hacer visible el mensaje de validación
  validationBox.hidden = false;
}
};


document.getElementById("add-device-btn").addEventListener("click", () => {
  const dispositivoForms = document.querySelectorAll(".dispositivo-form");
  const lastDispositivoForm = dispositivoForms[dispositivoForms.length - 1];
  const newForm = lastDispositivoForm.cloneNode(true); // Clonamos el último formulario

  // Restablecemos los valores del formulario clonado
  newForm.querySelectorAll("input, select, textarea").forEach(input => {
      input.value = ""; // Limpia los campos de texto y selects
      if (input.type === "file") {
          input.value = ""; // Resetea los campos de archivo
      }
  });

  // Actualizar los IDs para evitar duplicación de IDs
  newForm.querySelectorAll("[id]").forEach(input => {
      const newId = input.id.split("-")[0] + "-" + (dispositivoForms.length + 1); 
      input.id = newId; // Asigna un ID único al nuevo formulario
  });

  // Añadir el nuevo formulario al DOM después del último formulario existente
  lastDispositivoForm.parentNode.insertBefore(newForm, lastDispositivoForm.nextSibling);

  // Volver a enlazar el evento de "Agregar otro dispositivo" al nuevo botón en el formulario clonado
  newForm.querySelector("#add-device-btn").addEventListener("click", (event) => {
      event.preventDefault(); // Prevenir el comportamiento por defecto del botón
      document.getElementById("add-device-btn").click();
  });
});



let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", validateForm);
