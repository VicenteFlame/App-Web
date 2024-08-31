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
    let myForm = document.forms["formContacto"];
    let name = myForm["nombre"].value;
    let email = myForm["email"].value;
    let phoneNumber = myForm["phone"].value;
    let region = myForm["select-region"].value;
    let comuna = myForm["select-Comuna"].value;

    let myForm1 = document.forms["formDispositivo"];
    let nameDispositivo = myForm1["nombreDispositivo"].value;
    let descripcionDispositivo = myForm1["descripcionDispositivo"].value;
    let tipo = myForm1["tipo"].value;
    let añosUso = myForm1["añosUso"].value;
    let estado = myForm1["estado"].value;    
    let files = myForm1["files"].files;

  
    // variables auxiliares de validación y función.
    let invalidInputs = [];
    let isValid = true;
    const setInvalidInput = (inputName) => {
      invalidInputs.push(inputName);
      isValid &&= false;
    };
  
    // lógica de validación
    if (!validateName(name)) {
      setInvalidInput("Nombre donante");
    }
    if (!validateEmail(email)) {
      setInvalidInput("Email donante ");
    }
    if (!validatePhoneNumber(phoneNumber)) {
      setInvalidInput("Número celular donante");
    }
    if (!validateSelect(region)) {
        setInvalidInput("Región");
      }
    if (!validateSelect(comuna)) {
        setInvalidInput("Comuna");
      }
    
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
    } else {
      // Ocultar el formulario
      myForm.style.display = "none";
      myForm1.style.display = "none";
  
      // establecer mensaje de éxito
      validationMessageElem.innerText = "¡Formulario válido! ¿Deseas enviarlo o volver?";
      validationListElem.textContent = "";
  
      // aplicar estilos de éxito
      validationBox.style.backgroundColor = "#ddffdd";
      validationBox.style.borderLeftColor = "#4CAF50";
  
      // Agregar botones para enviar el formulario o volver
      let submitButton = document.createElement("button");
      submitButton.innerText = "Enviar";
      submitButton.style.marginRight = "10px";
      submitButton.addEventListener("click", () => {
        // myForm.submit();
        // no tenemos un backend al cual enviarle los datos
      });
  
      let backButton = document.createElement("button");
      backButton.innerText = "Volver";
      backButton.addEventListener("click", () => {
        // Mostrar el formulario nuevamente
        myForm.style.display = "block";
        myForm1.style.display = "block";
        validationBox.hidden = true;
      });
  
      validationListElem.appendChild(submitButton);
      validationListElem.appendChild(backButton);
  
      // hacer visible el mensaje de validación
      validationBox.hidden = false;
    }
  };
  
  
  let submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", validateForm);
  