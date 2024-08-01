
const correo = document.getElementById("correo")

const usuario = document.getElementById("usuario")

const contraseña = document.getElementById("contraseña")

const btonguardar = document.getElementById("btonguardar")

const texto = document.getElementById("texto")




let lista = JSON.parse(localStorage.getItem("lista"))||[]



btonguardar.addEventListener("click", function () {

       let valor = correo.value
       let valor2 = usuario.value
       let valor3 = contraseña.value

       let resultado1 = valor.trim()
       let resultado2 = valor2.trim()
       let resultado3= valor3.trim()



   if (resultado1 === "" || resultado2 === "" || resultado3 === "") {


          texto.innerHTML= "INGRESAR DATOS SOLICITADOS"

          setTimeout(() => {
            location.reload()
           }, 3500);
   


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
 
            localStorage.setItem("lista", JSON.stringify(lista))||[]



            setTimeout(() => {
               location.href = "iniciosesion.html"
            }, 5000);

   

   
            

         
      }
   }
    
  

   
})