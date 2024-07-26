
const tarEven = document.getElementById("tarEven")

const guardar = document.getElementById("guardar")

const ingresos = document.getElementById("ingresos")

const fechas = document.getElementById("fechas")

const administTareas = document.getElementById("administTareas")

const administEventos = document.getElementById(" administEventos")


guardar.addEventListener("click",function () {

   
    
    if (tarEven.value==="tarea") {
        
        const etiquetaPTarea = document.createElement("p")

        const contenedorTarea = document.createElement("div")

        etiquetaPTarea.innerText =ingresos.value + " " + fechas.value


        contenedorTarea.appendChild(etiquetaPTarea)
        
        const btnElimT = document.createElement("button")

        btnElimT.innerHTML = "Eliminar"

        contenedorTarea.appendChild(btnElimT)

        const btnEdit = document.createElement("button")

        btnEdit.innerHTML = "Editar"

        contenedorTarea.appendChild(btnEdit)

        const inEdit = document.createElement("input")

        contenedorTarea.appendChild(inEdit)

        const btnGuard = document.createElement("button")

        btnGuard.innerHTML = "Guardar"

        contenedorTarea.appendChild(btnGuard)



        btnElimT.addEventListener("click", function () {

        contenedorTarea.removeChild(etiquetaPTarea)
        contenedorTarea.removeChild(btnEdit)
        contenedorTarea.removeChild(btnElimT)
        contenedorTarea.removeChild(btnGuard)
        contenedorTarea.removeChild(inEdit)
        })


        btnEdit.addEventListener("click",function () {
    


        btnGuard.addEventListener("click", function () {

            etiquetaPTarea.innerText = inEdit.value
            
        })

        })


        administTareas.appendChild(contenedorTarea)



    }else{
        if (tarEven.value ==="evento") {
            
        
        
        
    
    














        }
    }
   

})