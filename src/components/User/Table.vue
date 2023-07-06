<template>
    <table id="table" class="table table-striped">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>dorsal</th>
                <th>estado</th>
                <th>foto</th>
                <th>edad</th>
                <th>categoria</th>
                <th>posicion</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user, index) in users" :key="index">
                <td>{{ user.name }}</td>
                <td>{{ user.dorsal }}</td>
                <td>{{ user.state }}</td>
                <td>imagen</td>
                <td>{{ user.birthday }}</td>
                <td>{{ user.category }}</td>
                <td>{{ user.position }}</td>
                <td>
                    <div class="text-center">
                        <button class="btn btn-primary" @click="editUser(user.name)">editar</button>
                        <button class="btn btn-danger" @click="deleteUser(user.name)">Eliminar</button>
                    </div>
                </td>
            </tr>        
        </tbody>
    </table>
</template>

<script>
import {
    collection,
    getDocs,
} from "firebase/firestore";
import {db} from '@/Firebase/firebase'

import { player } from '@/stores/player.js'

export default {
    data(){
        return {
            datatable: null,
            users: []
        }
    },
    created() {
        this.getUsers()
    },
    mounted() {
        setTimeout(() => {
            this.datatable = $('#table').DataTable();
        }, 1000);     
    },
    methods: {
        async getUsers() {
			const querySnapshot = await getDocs(collection(db, "user"));
		
			querySnapshot.forEach((doc) => {
				this.users.push(doc.data())			
			})
        },
        editUser(id) {
            let user = _.find(this.users, ['name', id])

            this.registerPlayer = player()
            this.registerPlayer.user = user
            $('#registerPlayer').modal('show');
        }
    }
    // Nombre, dorsal, estado, foto, fnc(para calcular edad), categoria, y posicion.
}
</script>
