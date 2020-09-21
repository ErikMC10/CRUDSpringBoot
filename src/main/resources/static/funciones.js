function eliminar(id){
    swal({
        title: "¿Estas seguro de eliminar?",
        text: "Una vez eliminado, No podras recuperar esta información!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((OK) => {
            if (OK) {
                $.ajax({
                    url:"/eliminar/"+id,
                    success: function (res){
                        console.log(res)
                    }
                });
                swal("Poof! Tu registro a sido eliminado", {
                    icon: "success",
                }).then((ok)=>{
                    if (ok){
                        location.href="/listar";
                    }
                });
            } else {
                swal("Tu registro esta a salvo!");
            }
        });
}