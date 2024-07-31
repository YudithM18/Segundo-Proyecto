
const userOrGmail = document.getElementById("userOrGmail")

const password = document.getElementById("password")

const inicio = document.getElementById("inicio")

const texto = document.getElementById("texto")

let datos = JSON.parse(localStorage.getItem("lista") || [])



" "

inicio.addEventListener("click", function () {
    
     for (let index = 0; index < datos.length; index++) {
        
    if ((datos[index].users === userOrGmail.value || datos[index].gmails === userOrGmail.value) && (datos[index].pass === password.value)  ) {
         
        texto.innerHTML = "TUS DATOS SE ENCUENTRAN REGRISTRADO... HAS ENTRADO CON EXÍTO"

        setTimeout(() => {
            location.href = "administración.html"
         }, 3500);
    } else {

        if ((datos[index].users !== userOrGmail.value || datos[index].gmails !== userOrGmail.value) && (datos[index].pass !== password.value)) {
            
            texto.innerHTML ="HAS INGRESADO DATOS INCORRECTOS.."
            
        } else{

            if ((datos[index].users == " " || datos[index].gmails == " ") || (datos[index].pass == " ")) {

                texto.innerHTML = "NO SE HA ENCONTRADO DATOS EN DONDE SE SOLICITA, POR FAVOR LLENAR CORRECTAMENTE LOS DATOS SOLICITADOS"
                
            }
        }

    }
        
    }
})