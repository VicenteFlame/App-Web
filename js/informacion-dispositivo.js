document.querySelector('.zoomable-image').addEventListener('click', function() {
    this.classList.toggle('enlarge');
});

const validateName = (name) => {
    if(!name) return false;
    let lengthValid = name.trim().length >= 3 && name.trim().length <= 80 ;
    return lengthValid;
  }
const validateComentario = (comentario) => {
    if(!comentario) return false;
    let lengthValid = comentario.trim().length >= 5;
    return lengthValid;
  }
  


const validateForm = () => {
    // obtener elementos del DOM usando el nombre del formulario.
    let myForm = document.forms["conf-form"];
    let name = myForm["nombre"].value;
    let comentario = myForm["comentario"].value;

  
    // variables auxiliares de validación y función.
    let invalidInputs = [];
    let isValid = true;
    const setInvalidInput = (inputName) => {
      invalidInputs.push(inputName);
      isValid &&= false;
    };
  
    // lógica de validación
    if (!validateName(name)) {
      setInvalidInput("Nombre");
    }
    if (!validateComentario(comentario)) {
      setInvalidInput("Comentario");
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
        
        

  
      // establecer mensaje de éxito
      validationMessageElem.innerText = "Se agregó el comentario ";
      validationListElem.textContent = "";
  
      // aplicar estilos de éxito
      validationBox.style.backgroundColor = "#ddffdd";
      validationBox.style.borderLeftColor = "#4CAF50";
  

      // hacer visible el mensaje de validación
      validationBox.hidden = false;

      // contenedor confesion
      const confContainer = document.createElement("div");
      confContainer.className = "conf-container";


      // username
      const userNameParagraph = document.createElement("p");
      userNameParagraph.innerText = localStorage.getItem("nombre");

      // user container
      const confAuthor = document.createElement("div");
      confAuthor.className = "conf-author";
      confAuthor.appendChild(userImage);     confAuthor.appendChild(userNameParagraph);

      // texto confesion
      const confesion = document.createElement("p");
      confesion.innerText = localStorage.getItem("conf-text-area");;

      // agregamos los elementos al cont. de la confesion
      confContainer.appendChild(confAuthor);
      confContainer.appendChild(confesion);

      // agregamos la confesion a la lista
      let confList = document.getElementById("conf-list");
      confList.appendChild(confContainer);
    }
  };
  
  
  let submitBtn = document.getElementById("submit-conf-btn");
  submitBtn.addEventListener("click", validateForm);
  
  let homeBtn = document.getElementById("home-btn");
  homeBtn.addEventListener('click', function() {
    window.location.href = 'index.html'; 
});
  
  