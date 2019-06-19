<template>
	<product-list :books="books"></product-list>
</template>

<script>
import ProductList from '../components/Products/ProductList';
import { Logger } from '../common';

export default {
	components: { ProductList },

	data () {
		return {
			books: []
		}
	},

	async created () {
		try {
			const { data } = await this.$http.get('/api/book')

			this.books = data
		} catch (e) {
			Logger.log(e)
		}
	}
}
</script>

<style>

</style>
