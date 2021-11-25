$(document).ready(function(){
    $('#formCorreo').on('submit', function(event){
        event.preventDefault();
        $.ajax({
            url: "/mail",
            method:"post",
            contentType: "application/json",
            success: function(res){
                $("#respuesta").html("Listo")
            }
        })
    })
})