<template>
	<div class="modal fade modalLogin" id="registerPlayer">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Iniciar sesión</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form @submit.prevent="datos.signIn">
						<p>Hola</p>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    
}
</script>
