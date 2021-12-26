import { ref, readonly } from 'vue'

const cart = ref([])

export const state = readonly(cart)

export const addToCart = product => {
	let found = false
	cart.value.forEach((item) => {
		if (item.id === product.id) {
			item.quantity += 1
			found = true
		}
	})

	if (!found) cart.value.push(product)
}

export const plusItem = product => {
	cart.value.forEach((item) => {
		if (item.id === product.id) {
			item.quantity += 1;
		}
	})
}

export const minusItem = product => {
	let last = false
	cart.value.forEach((item) => {
		if (item.id === product.id) {
			if (item.quantity > 1) {
				item.quantity -= 1
			} else {
				last = true
			}
		}
	})

	if (last) cart.value = cart.value.filter((item) => item.id !== product.id)
}