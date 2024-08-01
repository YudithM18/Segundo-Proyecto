
const tarEven = document.getElementById("tarEven")

const guardar = document.getElementById("guardar")

const ingresos = document.getElementById("ingresos")

const fechas = document.getElementById("fechas")

const administTareas = document.getElementById("administTareas")

const administEventos = document.getElementById("administEventos")


let listaTarea = JSON.parse(localStorage.getItem("listaTarea"))||[]

let listaEvento = JSON.parse(localStorage.getItem("listaEvento"))||[]


guardar.addEventListener("click",function () {


     

    if (tarEven.value==="tarea") {

        listaTarea.push(ingresos.value + " " + fechas.value)

        localStorage.setItem("listaTarea",JSON.stringify(listaTarea))||[]

        
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
    
                etiquetaPTarea.textContent = inEdit.value
                
            })
    
            })
    

       

        administTareas.appendChild(contenedorTarea)



    }else{
        if (tarEven.value ==="evento") {

            listaEvento.push(ingresos.value + " " + fechas.value)

            localStorage.setItem("listaEvento",JSON.stringify(listaEvento))||[]

            
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

                etiquetaPEvento.textContent = inpEvent.value
                
            })
            
        })

        administEventos.appendChild(contenedorEvento)


        }

    }

  

})













function cargarR() {


    const datosTarea = JSON.parse(localStorage.getItem("listaTarea"))||[]

   
   for (let index = 0; index < datosTarea.length; index++) {
  
    const etiquetaT = document.createElement("p")

    const contenedorT =  document.createElement("div")

        etiquetaT.innerHTML = datosTarea[index]

        contenedorT.appendChild(etiquetaT)

    const elimT = document.createElement("button")

        elimT.innerHTML = "Eliminar"

        contenedorT.appendChild(elimT)

    const editT = document.createElement("button")

        editT.innerHTML = "Editar"
    
        contenedorT.appendChild(editT)

    const inT = document.createElement("input")

        contenedorT.appendChild(inT)

    const guarT = document.createElement("button")

        guarT.innerHTML = "Guardar"

        contenedorT.appendChild(guarT)

    elimT.addEventListener("click", function () {

        contenedorT.removeChild(etiquetaT)
        contenedorT.removeChild(elimT)
        contenedorT.removeChild(editT)
        contenedorT.removeChild(inT)
        contenedorT.removeChild(guarT)


        const datosTarea= JSON.parse(localStorage.getItem("listaTarea"))||[]

        let valoresT = datosTarea.filter(element => element !== etiquetaT.textContent);


          localStorage.setItem("listaTarea", JSON.stringify(valoresT))

        

    })

    editT.addEventListener("click", function () {
        
        guarT.addEventListener("click", function () {


            const listaTarea= JSON.parse(localStorage.getItem("listaTarea"))||[]

               for (let index = 0; index < listaTarea.length; index++) {
               
                  if (listaTarea[index]===etiquetaT.textContent) {

                    listaTarea[index] = inT.value
 
                    localStorage.setItem("listaTarea", JSON.stringify(listaTarea))

                    etiquetaT.textContent= inT.value
                    
                }
                
                 

               }



            
        })
    })

    administTareas.appendChild(contenedorT)


    }




    const datosEvento = JSON.parse(localStorage.getItem("listaEvento"))||[]



    for (let index = 0; index < datosEvento.length; index++) {
    
        const contenedorE = document.createElement("div")

        const etiquetaE = document.createElement("p")
        
             etiquetaE.innerHTML=datosEvento[index]

             contenedorE.appendChild(etiquetaE)

        const elimE = document.createElement("button")

             elimE.innerHTML= "Eliminar"

             contenedorE.appendChild(elimE)

        const editE = document.createElement("button")

             editE.innerHTML="Editar"

             contenedorE.appendChild(editE)

        const inE = document.createElement("input")

             contenedorE.appendChild(inE)

        const guarE = document.createElement("button")

             guarE.innerHTML="Guardar"

             contenedorE.appendChild(guarE)

        elimE.addEventListener("click", function () {

            contenedorE.removeChild(etiquetaE)
            contenedorE.removeChild(elimE)
            contenedorE.removeChild(editE)
            contenedorE.removeChild(guarE)
            contenedorE.removeChild(inE)


            const datosEvento = JSON.parse(localStorage.getItem("listaEvento"))||[]

            let valoresE = datosEvento.filter(element => element !== etiquetaE.textContent);

            
          localStorage.setItem("listaEvento",JSON.stringify(valoresE))

    
        })

    
        editE.addEventListener("click", function () {

            guarE.addEventListener("click", function () {

              

                let listaEvento = JSON.parse(localStorage.getItem("listaEvento"))||[]
                

                  for (let index = 0; index < listaEvento.length; index++) {

                    if (listaEvento[index] === etiquetaE.textContent) {

                        listaEvento[index] = inE.value

                         localStorage.setItem("listaEvento", JSON.stringify(listaEvento))

                         etiquetaE.textContent= inE.value

                    }
                    
                    
                  }
                
                
            })
            
        })

        administEventos.appendChild(contenedorE)


    }
    




}