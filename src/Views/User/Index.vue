<template>
    <div>
        <navbar />

        <div class="container">
            <div class="w-100 my-3">
                <button class="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#registerPlayer">
                    Registrar jugador
                </button>
            </div>

            <table-user />

        </div>
        <modal-register-player />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import TableUser from '@/components/User/Table.vue';
import ModalRegisterPlayer from '@/components/User/RegisterSoccerPlayer.vue';

export default {
    data(){
        return {
            users: [0, 1, 2, 3]
        }
    },
    components: {
        Navbar,
        TableUser,
        ModalRegisterPlayer
    },
    // Nombre, dorsal, estado, foto, fnc(para calcular edad), categoria, y posicion.
}
</script>
