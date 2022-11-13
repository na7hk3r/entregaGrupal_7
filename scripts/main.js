// inputs
let inputGetId = document.getElementById("inputGet1Id");
let inputPostNombre = document.getElementById("inputPostNombre");
let inputPostApellido = document.getElementById("inputPostApellido");
let inputPutId = document.getElementById("inputPutId");
let inputDelete = document.getElementById("inputDelete");

// inputs modal (modificar)
let modalNombre = document.getElementById("inputPutNombre");
let modalApellido = document.getElementById("inputPutApellido");

// botones
let btnBuscar = document.getElementById("btnGet1");
let btnAgregar = document.getElementById("btnPost");
let btnModificar = document.getElementById("btnPut");
let btnEliminar = document.getElementById("btnDelete");
let btnGuardar = document.getElementById("btnSendChanges");

// 

let urlUsers = "https://6362c2c937f2167d6f6c7564.mockapi.io/users"
// para get, post
let urlID = "https://6362c2c937f2167d6f6c7564.mockapi.io/users/:id"
// para  get1, put, delete


let lista = [];
let result = document.getElementById("results");
let listaHTML = "";

function resultado(lista) {
  lista.forEach((lista) => {

    listaHTML += `
        <li>ID: ${lista.id}</li>
        <li>Nombre: ${lista.name}</li>
        <li>Apellido: ${lista.lastname}</li>
        `
    result.innerHTML = listaHTML;
  })
};

//búsqueda
btnBuscar.addEventListener("click", () => {
  let id = inputGetId.value
  if (id != "" || id > 0) {

    fetch("https://6362c2c937f2167d6f6c7564.mockapi.io/users/" + id)
      .then((response) => response.json())
      .then((data) => {
        lista = data
        result.innerHTML = `
       <li>ID: ${lista.id}</li>
       <li>Nombre: ${lista.name}</li>
       <li>Apellido: ${lista.lastname}</li>
       `
      })

  } else {
    fetch(urlUsers)
      .then((response) => response.json())
      .then((data) => {
        lista = data;
        console.log(data);
        resultado(lista);

      });
  }

  if( id !== lista.id && id !== "") {
    swal ( "Vaya" ,  "Parece que el ID solicitado no existe" ,  "error" )
    }
    
});

//agregar
btnAgregar.addEventListener("click", () => {

  let nombre = inputPostNombre.value;
  let apellido = inputPostApellido.value;
  if (nombre != "" || apellido != "")

    fetch("https://6362c2c937f2167d6f6c7564.mockapi.io/users/", {

      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        name: nombre,
        lastname: apellido,
      })
    })

      .then((response) => response.json())
      .then((data) => {

        lista = data
        resultado(lista);


      })


})

// para modificar un usuario
btnModificar.addEventListener("click", () => {
  let id = inputPutId.value;

  if (id != "" || id > 0) {
    fetch("https://6362c2c937f2167d6f6c7564.mockapi.io/users/" + id)
      .then((response) => response.json())
      .then((data) => {
        lista = data;
        modalApellido.value = lista.lastname;
        modalNombre.value = lista.name;
      });
  }
});

//guardar
btnGuardar.addEventListener("click", () => {
  let id = inputPutId.value;
  fetch("https://6362c2c937f2167d6f6c7564.mockapi.io/users/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: modalNombre.value,
      lastname: modalApellido.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      lista = data;
      lista.lastname = modalApellido.value;
      lista.name = modalNombre.value;
    });
});

//eliminar usuario
btnEliminar.addEventListener("click", () => {
  let id = inputDelete.value
  if (id != "" || id > 0) {

    fetch("https://6362c2c937f2167d6f6c7564.mockapi.io/users/" + id, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {

        lista = data
        resultado(lista);
      });
  }

});



//Botones disabled

btnAgregar.disabled = true
btnModificar.disabled = true
btnEliminar.disabled = true
inputPostNombre.addEventListener("change", () => {

  if (inputPostNombre.value === "" && inputPostApellido.value === "") {
    btnAgregar.disabled = true
  } else {
    btnAgregar.disabled = false
  }

})

inputPutId.addEventListener("change", () => {
  if (inputPutId.value === "") {
    btnModificar.disabled = true
  } else {
    btnModificar.disabled = false
  }

})

inputDelete.addEventListener("change", () => {
  if (inputDelete.value === "") {
    btnEliminar.disabled = true
  } else {
    btnEliminar.disabled = false

  }

});