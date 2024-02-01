

function actualizarTitulo() {
    fetch('./datos.json')
        .then(response => response.json())
        .then(data => {
            for (let key in data){
                let nuevoDIV = document.createElement("div")
                nuevoDIV.className = "miNuevaClase"
                // Titulo de los mods
                let nuevoH1 = document.createElement("h1")
                let textoH1 = document.createTextNode(data[key]["title"])
                nuevoH1.appendChild(textoH1)
                //Imagen de los mods
                let nuevaImg = document.createElement("img");
                nuevaImg.src = data[key]["img"];
                //Description de los mods
                let nuevaDescription = document.createElement("p");
                let textoDescription = document.createTextNode(data[key]["description"])
                nuevaDescription.appendChild(textoDescription)
                //Botton de mas informacion
                let buttonMoreInfo = document.createElement("button");
                buttonMoreInfo.textContent = "More Info"
                buttonMoreInfo.className = "miButtonInf"

                nuevoDIV.appendChild(nuevaImg)
                nuevoDIV.appendChild(nuevoH1)
                nuevoDIV.appendChild(nuevaDescription)
                nuevoDIV.appendChild(buttonMoreInfo)

                var contenedor = document.getElementById("container")
                contenedor.appendChild(nuevoDIV) 
                console.log(`Clave:${key}, Valor: ${data[key]["title"]}`);
            }
        })
        .catch(error => console.error('Error:',error)); 
}

actualizarTitulo();