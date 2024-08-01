
const userOrGmail = document.getElementById("userOrGmail")

const password = document.getElementById("password")

const inicio = document.getElementById("inicio")

const texto = document.getElementById("texto")

let datos = JSON.parse(localStorage.getItem("lista")) || []





inicio.addEventListener("click", function () {
    
   
    for (let index = 0; index < datos.length; index++) {
        
        

    let valor = userOrGmail.value
    let valor2 = password.value
    let resultadopassword = valor2.trim()
    let resultadoGmail = valor.trim()

   
      
       if (resultadoGmail === ""  || resultadopassword === "" ) {

    

         texto.innerHTML = "NO SE HA ENCONTRADO DATOS EN DONDE SE SOLICITA, POR FAVOR LLENAR CORRECTAMENTE LOS DATOS SOLICITADOS"
            
          

           setTimeout(() => {
            location.reload()
           }, 3500);
         break
        
        }  else {

            if ((datos[index].users !== userOrGmail.value || datos[index].gmails !== userOrGmail.value) && (datos[index].pass !== password.value)) {
                
                texto.innerHTML = "SE HAN INGRESADOS DATOS INCORRECTOS O INEXISTENTES POR FAVOR REVISAR DATOS O REGISTRASE NUEVAMENTE"

                setTimeout(() => {
                    location.reload()
                   }, 3500);
                 break

                
            } 
                
        
            else{
                
                if ((datos[index].users === userOrGmail.value || datos[index].gmails === userOrGmail.value) && (datos[index].pass === password.value)){

                    texto.innerHTML = "TUS DATOS SE ENCUENTRAN REGRISTRADO... HAS ENTRADO CON EXÍTO"
            
                    setTimeout(() => {
                        location.href = "administración.html"
                     }, 3500);
            
                
                }

            }

        }

            
            
        
    }

                      

     
})



















 