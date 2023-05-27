var copiarBoton = document.getElementById("copiarBoton");
var patronAcento = /á|é|í|ó|ú|´|à|è|ì|ò|ù|[A-Z]/g;

function encriptar(){
    var mensaje = document.getElementById("inputMensaje").value;
    var imagen = document.getElementById("imagenMuneco");
    var parrafoNingunMensaje = document.getElementById("parrafoNingunMensaje");
    var parrafoIngreseTexto = document.getElementById("parrafoIngreseTexto");
    if (patronAcento.test(mensaje) == true || mensaje == ""){
        alert("Ingrese un mensaje en letras minusculas sin acentos");
        document.getElementById("inputMensaje").value = ""
        document.getElementById("mensajeEncriptado").innerHTML =" ";  
        document.getElementById("inputMensaje").value = ""     
        parrafoNingunMensaje.style.display = "block";
        parrafoIngreseTexto.style.display = "block";
        document.getElementById("copiarBoton").style.display = "none"
        if(screen.width > 600){
            imagen.style.display = "block";
        } else{
            imagen.style.display = "none";
        }        
    } else if (mensaje != "" && patronAcento.test(mensaje) == false){
        imagen.style.display = "none";
        parrafoNingunMensaje.style.display = "none";
        parrafoIngreseTexto.style.display = "none";
        var mensajeProcesadoStr = mensaje;
        mensajeProcesadoStr = mensajeProcesadoStr.replace(/e/g, "enter");
        mensajeProcesadoStr = mensajeProcesadoStr.replace(/i/g, "imes");
        mensajeProcesadoStr = mensajeProcesadoStr.replace(/a/g, "ai");
        mensajeProcesadoStr = mensajeProcesadoStr.replace(/o/g, "ober");
        mensajeProcesadoStr = mensajeProcesadoStr.replace(/u/g, "ufat");
        document.getElementById("mensajeEncriptado").innerHTML = mensajeProcesadoStr;
        copiarBoton.style.display = "block"      
    } else{
        alert("Ingrese un mensaje en letras minusculas sin acentos");
        document.getElementById("mensajeEncriptado").innerHTML =" ";  
        document.getElementById("inputMensaje").value = ""     
        parrafoNingunMensaje.style.display = "block";
        parrafoIngreseTexto.style.display = "block";
        document.getElementById("copiarBoton").style.display = "none"
        if(screen.width > 600){
            imagen.style.display = "block";
        } else{
            imagen.style.display = "none";
        }
        //alert("Ingrese un mensaje");
    }
}

function desencriptar(){
    var mensaje = document.getElementById("inputMensaje").value;
    var imagen = document.getElementById("imagenMuneco");
    var parrafoNingunMensaje = document.getElementById("parrafoNingunMensaje");
    var parrafoIngreseTexto = document.getElementById("parrafoIngreseTexto");
    if (patronAcento.test(mensaje) == true || mensaje == ""){
        alert("Ingrese un mensaje en letras minusculas sin acentos");
        document.getElementById("inputMensaje").value = ""
        document.getElementById("mensajeEncriptado").innerHTML =" ";  
        document.getElementById("inputMensaje").value = ""     
        parrafoNingunMensaje.style.display = "block";
        parrafoIngreseTexto.style.display = "block";
        document.getElementById("copiarBoton").style.display = "none"
        if(screen.width > 600){
            imagen.style.display = "block";
        } else{
            imagen.style.display = "none";
        }
    } else if (mensaje  != "" && patronAcento.test(mensaje) == false ){
        imagen.style.display = "none";
        parrafoNingunMensaje.style.display = "none";
        parrafoIngreseTexto.style.display = "none";
        var mensajeProcesadoStr = mensaje;
        mensajeProcesadoStr = mensajeProcesadoStr.replace(/enter/g, "e");
        mensajeProcesadoStr = mensajeProcesadoStr.replace(/imes/g, "i");
        mensajeProcesadoStr = mensajeProcesadoStr.replace(/ai/g, "a");
        mensajeProcesadoStr = mensajeProcesadoStr.replace(/ober/g, "o");
        mensajeProcesadoStr = mensajeProcesadoStr.replace(/ufat/g, "u");
        document.getElementById("mensajeEncriptado").innerHTML = mensajeProcesadoStr; 
        copiarBoton.style.display = "block"
               
    } else{
        alert("Ingrese un mensaje en letras minusculas sin acentos");
        document.getElementById("mensajeEncriptado").innerHTML =" ";
        document.getElementById("copiarBoton").style.display = "none"
        document.getElementById("inputMensaje").value = ""  
        parrafoNingunMensaje.style.display = "block";
        parrafoIngreseTexto.style.display = "block";
        imagen.style.display = "block";
        //alert("Ingrese un mensaje");
        if(screen.width > 600){
            imagen.style.display = "block";
        } else{
            imagen.style.display = "none";
        }
    }
}

function copy(){
    var mensajeProcesado = document.getElementById("mensajeEncriptado").innerHTML
    navigator.clipboard.writeText(mensajeProcesado)
        .then(() => {
            console.log('Texto copiado al portapapeles')
    })
        .catch(err => {
        alert('Error al copiar al portapapeles:', err)
    })
}

