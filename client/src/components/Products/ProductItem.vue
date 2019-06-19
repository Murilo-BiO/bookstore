<template>
	<div class="uk-card uk-card-default uk-card-small">
		<div class="uk-card-media-top">
			<router-link :to="`/product/${book.id}`" tag="a" class="uk-link-reset">
				<img :src="book.images[0].url" :alt="book.title">
			</router-link>
		</div>
		<div class="uk-card-body">
			<h3 class="uk-card-title">
				<router-link :to="`/product/${book.id}`" tag="a" class="uk-link-reset">{{ book.title }}</router-link>
			</h3>
			<div uk-grid>
				<div class="uk-width-expand">
					<p>R$ {{ book.price }}</p>
				</div>
				<div>
					<a class="uk-button uk-button-primary uk-button-small"
						@click="addToCart(book)">
						Add to Cart
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['book'],

	methods: {
		addToCart (book) {
			this.$cart.add(book)
			this.$alert('Carrinho Atualizado!', 'primary')
		}
	}
}
</script>

<style>

</style>
