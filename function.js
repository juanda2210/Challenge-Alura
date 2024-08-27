var botonEncriptar = document.querySelector(".boton_encriptar");
var botonDesencriptar = document.querySelector(".boton_desencriptar");
var muñeco = document.querySelector(".contenedor_muñeco");
var contenedorParrafoDerecha = document.querySelector(".contenedor_parrafo");
var resultado = document.querySelector(".texto_encriptado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    var cajaTexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajaTexto);
}

function desencriptar() {
    ocultarAdelante();
    var cajaTexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajaTexto);
}

function recuperarTexto() {
    var cajaTexto = document.querySelector(".caja_texto");
    return cajaTexto.value;
}

function ocultarAdelante() {
    muñeco.classList.add("ocultar");
    contenedorParrafoDerecha.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai";
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter";
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes";
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober";
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat";
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a";
            i += 1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e";
            i += 4;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i";
            i += 3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o";
            i += 3;
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u";
            i += 3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

const botonCopiar = document.querySelector(".boton_copiar");
botonCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto_encriptado").textContent;
    navigator.clipboard.writeText(contenido);
})