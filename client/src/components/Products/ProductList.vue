<template>
	<div class="uk-grid-small uk-child-width-1-4" uk-grid>
		<div v-for="n in [1, 2, 3, 4, 5]" :key="n">
			<product-item :id="n"></product-item>
		</div>
	</div>
</template>

<script>
import ProductItem from './ProductItem'

export default {
	components: { ProductItem }
}
</script>

<style>

</style>
