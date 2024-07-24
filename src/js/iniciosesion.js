
const userOrGmail = document.getElementById("userOrGmail")

const password = document.getElementById("password")

const inicio = document.getElementById("inicio")

let datos = JSON.parse(localStorage.getItem("lista") || [])



inicio.addEventListener("click", function () {
    
    


    console.log(datos);

    for (let index = 0; index < datos.length; index++) {
        
  
   
    if ((datos[index].users === userOrGmail.value || datos[index].gmails === userOrGmail.value) && (datos[index].pass === password.value)  ) {
        

    window.location.href = "/src/administración.html"
    } 
        
    }
})