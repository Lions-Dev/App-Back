$(document).ready(function(){
    $('#formCorreo').on('submit', function(e){
        e.preventDefault()
        let nombre = document.querySelector("#nombre").value
        let email = document.querySelector("#email").value
        let texto = document.querySelector("#mensaje").value
        $.ajax({
            method:"post",
            url: "/email",
            contentType: "application/json",
            data:JSON.stringify({'nombre': nombre,
            'email': email, 'texto': texto}),
            success: function(respuesta){
                if(respuesta == 'Email sent'){
                    let respuestaAbajo = document.querySelector("#respuesta")
                    respuestaAbajo.innerHTML = "Mensaje Enviado"
                    setTimeout(function()
                    { respuestaAbajo.innerHTML = "" }, 9000);
                } else {
                    let respuesta = document.querySelector("#respuesta")
                    respuesta.innerHTML = "No se ha podido enviar el mensaje"
                    setTimeout(function()
                    { respuestaAbajo.innerHTML = "" }, 5000);
                }
                
            }
        })
    })
})

