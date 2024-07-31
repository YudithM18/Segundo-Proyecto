
const correo = document.getElementById("correo")

const usuario = document.getElementById("usuario")

const contraseña = document.getElementById("contraseña")

const btonguardar = document.getElementById("btonguardar")

const texto = document.getElementById("texto")

const lista = JSON.parse(localStorage.getItem("lista") || [])




btonguardar.addEventListener("click", function () {

   if (correo.value == " " && usuario.value == " " && contraseña.value == " ") {

          texto.innerHTML= "INGRESAR DATOS SOLICITADOS"
      
   }  else{

      if (correo.value.length > 0  && usuario.value.length > 0 && contraseña.value.length > 0) {

         let guardarcorreos = correo.value
         let guardarusuarios = usuario.value
         let guardarcontraseñas = contraseña.value

           let persona = {

            gmails : guardarcorreos,
            users : guardarusuarios,
            pass : guardarcontraseñas}

            texto.innerHTML= "USTED HA SIDO REGISTRADO CON EXÍTO"

           lista.push(persona)
 
            localStorage.setItem("lista", JSON.stringify(lista))



            setTimeout(() => {
               location.href = "iniciosesion.html"
            }, 5000);

   

   
            

         
      }
   }
    
  

   
})