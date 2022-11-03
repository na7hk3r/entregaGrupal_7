// inputs
let inputGetId = document.getElementById("inputGetId");
let inputPostNombre = document.getElementById("inputPostNombre");
let inputPostApellido = document.getElementById("inputPostApellido");
let inputPutId = document.getElementById("inputPutId");
let inputDelete = document.getElementById("inputDelete");

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


document.addEventListener("DOMContentLoaded", () => {
  fetch(urlUsers)
    .then((response) => response.json())
    .then((data) => {
      lista = data;
      console.log(data);
      resultado(lista);
    });
});


let lista = [];
let result = document.getElementById("results");

function resultado(lista) {
    let listaHTML = "";
    lista.forEach(lista => {

        listaHTML += `
        <li>ID: ${lista.id}</li>
        <li>Nombre: ${lista.name}</li>
        <li>Apellido: ${lista.lastname}</li>
        `
        result.innerHTML = listaHTML;
    })
};
