<template>
	<div class="uk-grid-large" uk-grid v-if="book">
		<div>
			<div class="uk-card uk-card-default">
				<div class="uk-card-media-top">
					<img :src="book.images[0].url" :alt="book.title">
				</div>
			</div>
		</div>
		<div class="uk-width-1-2">
			<h1>{{ book.title }}</h1>
			<p class="uk-text-break">{{ book.description }}</p>
			<h3>R$ {{ book.price }}</h3>
			<button class="uk-button uk-button-primary" @click="purchase">Comprar</button>
		</div>
	</div>
</template>

<script>
import { Logger } from '../../common';
export default {
	async created () {
		try {
			const { data } = await this.$http.get(`/api/book/${this.$route.params.id}`)

			this.book = data
		} catch (e) {
			Logger.log(e)
		}
	},

	data () {
		return {
			book: null
		}
	},

	methods: {
		purchase () {
			this.$cart.add(this.book)
			this.$alert('Carrinho atualizado', 'primary')
		}
	}
}
</script>

<style>

</style>
