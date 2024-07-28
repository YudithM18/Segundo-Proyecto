
const tarEven = document.getElementById("tarEven")

const guardar = document.getElementById("guardar")

const ingresos = document.getElementById("ingresos")

const fechas = document.getElementById("fechas")

const administTareas = document.getElementById("administTareas")

const administEventos = document.getElementById("administEventos")


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
            
        const etiquetaPEvento = document.createElement("p")

        const contenedorEvento = document.createElement("div")

        etiquetaPEvento.innerText = ingresos.value + " " + fechas.value


        contenedorEvento.appendChild(etiquetaPEvento)

        const evenElim = document.createElement("button")

        evenElim.innerHTML = "Eliminar"

        contenedorEvento.appendChild(evenElim)

        const editEvent = document.createElement("button")

        editEvent.innerHTML ="Editar"

        contenedorEvento.appendChild(editEvent)

        const inpEvent = document.createElement("input")

        contenedorEvento.appendChild(inpEvent)

        const guardEvent = document.createElement("button")

        guardEvent.innerHTML= "Guardar"

        contenedorEvento.appendChild(guardEvent)

        evenElim.addEventListener("click", function () {

            contenedorEvento.removeChild(etiquetaPEvento)
            contenedorEvento.removeChild(editEvent)
            contenedorEvento.removeChild(evenElim)
            contenedorEvento.removeChild(inpEvent)
            contenedorEvento.removeChild(guardEvent)
        })

        editEvent.addEventListener("click", function () {

            guardEvent.addEventListener("click", function () {

                etiquetaPEvento.innerText = inpEvent.value
                
            })
            
        })

        administEventos.appendChild(contenedorEvento)

        
        
    
    














        }
    }
     
    
    
})