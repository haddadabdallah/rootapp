import Swal from 'sweetalert2'


export  function Confirm_alert() {

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
    })
}
