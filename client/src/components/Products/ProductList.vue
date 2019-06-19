<template>
	<div class="uk-grid-small uk-child-width-1-4" uk-grid>
		<div v-for="book in books" :key="book.id">
			<product-item :book="book"></product-item>
		</div>
	</div>
</template>

<script>
import ProductItem from './ProductItem'

export default {
	props: ['books'],

	components: { ProductItem }
}
</script>

<style>

</style>
