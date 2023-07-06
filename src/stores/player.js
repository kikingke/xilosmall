import { defineStore } from 'pinia'


import {
    addDoc,
    collection,
    doc,
    getDocs,
    getDoc,
    onSnapshot,
    orderBy,
    query,
    setDoc,
    where,
    deleteDoc,
} from "firebase/firestore";

import {db} from '@/Firebase/firebase'

export const player = defineStore('player', {
	state: () => ({
		user: {
			name: '',
			dorsal: '',
			state: '',
			// image: null,
			birthday: '',
			category: '',
			position: ''
		}      
	}),
	getters: {
		
	},
	actions: {
		async addPlayer(){

			try {
				const docRef = await addDoc(collection(db, "user"), this.user);
				console.log("Document written with ID: ", docRef.id);
			} catch (e) {
				console.error("Error adding document: ", e);
			}
		},	
	}
})
