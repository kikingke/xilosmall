<template>
	<div class="modal fade modal-lg" id="registerPlayer">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Registrar jugador</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form @submit.prevent="datos.signIn">
						<div class="row g-3">
                            <div class="col-sm-6">
                                <input type="text" v-model="registerPlayer.name" class="form-control" placeholder="Nombre">
                            </div>
                            <div class="col-sm-6">
                                <input type="number" v-model="registerPlayer.dorsal" class="form-control" placeholder="Dorsal">
                            </div>
                            <div class="col-sm-6">
                                <!-- <input type="text" class="form-control" placeholder="Estado"> -->
                                <v-select class="" v-model="registerPlayer.state" :options="state" placeholder="Estado">
									<template #search="{ attributes, events }">
										<input class="vs__search" :required="registerPlayer.state" v-bind="attributes" v-on="events" />
									</template>
								</v-select>
                            </div>
                            <div class="col-sm-6">
                                <!-- <input type="file" class="form-control" placeholder="Imagen"> -->
                            </div>
                            <div class="col-sm-6">
                                <input type="date" v-model="registerPlayer.birthday" class="form-control" placeholder="Fecha nacimiento">
                            </div>
                            <div class="col-sm-6">
                                <!-- <input type="text" class="form-control" placeholder="Categoria"> -->
                                <v-select class="" v-model="registerPlayer.category" :options="category" placeholder="Categoria">
									<template #search="{ attributes, events }">
										<input class="vs__search" :required="registerPlayer.category" v-bind="attributes" v-on="events" />
									</template>
								</v-select>
                            </div>
                            <div class="col-sm-6">
                                <!-- <input type="text" class="form-control" placeholder="Posición"> -->
                                <v-select class="" v-model="registerPlayer.position" :options="position" placeholder="Posición">
									<template #search="{ attributes, events }">
										<input class="vs__search" :required="registerPlayer.position" v-bind="attributes" v-on="events" />
									</template>
								</v-select>
                            </div>
                        </div>

                        // Nombre, dorsal, estado, foto, fnc(para calcular edad), categoria, y posicion.
					</form>
				</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
			</div>
		</div>
	</div>
</template>

<script>
import {category, position, state} from "@/Helpers/PositionSoccerPlayer";
import { player } from '@/stores/player.js'
	
export default {
    props: [],
    data() {
        return {
            category: category,
            position: position,
            state: state,
            registerPlayer: null
        }
    },
    created() {
        this.registerPlayer = player()
    },
    mounted() {
        console.log(category, position)
    }
}
</script>
