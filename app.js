const contenedorQR = document.getElementById('contenedorQR')
const formulario = document.getElementById('formulario')

const QR = new QRCode(contenedorQR)
formulario.addEventListener('submit',(e) =>{
    e.preventDefault()
    if(link != ''){
        QR.makeCode(formulario.link.value)
    }
    
})
function limpiar(){
    document.getElementById("link").value= ''
    document.getElementById('contenedorQR').value=''
}