import { defineStore } from 'pinia'

import {
	getAuth,
	signOut,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from 'firebase/auth'

export const player = defineStore('player', {
	state: () => ({
        name: '',
        dorsal: '',
        state: '',
        // image: null,
        birthday: '',
        category: '',
        position: ''
	}),
	getters: {},
	actions: {
		signIn() {
			const auth = getAuth()
			signInWithEmailAndPassword(auth, this.email, this.password)
				.then(userCredential => {
					// alert("¡Sesión iniciada!");
					swal.fire('Sesión iniciada...', 'Sesión iniciada', 'success')
					router.push('/')
					const user = userCredential.user
				})
				.catch(error => {
					const errorCode = error.code
					this.errorMessage = error.message
					alert(this.errorMessage)
				})
		},	
	}
})
