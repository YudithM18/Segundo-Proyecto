
const correo = document.getElementById("correo")

const usuario = document.getElementById("usuario")

const contraseña = document.getElementById("contraseña")

const btonguardar = document.getElementById("btonguardar")

let lista = []



btonguardar.addEventListener("click", function () {
    
   let guardarcorreos = correo.value
   let guardarusuarios = usuario.value
   let guardarcontraseñas = contraseña.value

   let persona = {

    gmails : guardarcorreos,
    users : guardarusuarios,
    pass : guardarcontraseñas,

   }

   lista.push(persona)
 
   localStorage.setItem("lista", JSON.stringify(lista))
})