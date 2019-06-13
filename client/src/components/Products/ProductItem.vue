<template>
	<div class="uk-card uk-card-default uk-card-small">
		<div class="uk-card-media-top">
			<router-link :to="`/product/${id}`" tag="a" class="uk-link-reset">
				<img src="https://placehold.it/500x700" alt="">
			</router-link>
		</div>
		<div class="uk-card-body">
			<h3 class="uk-card-title">
				<router-link :to="`/product/${id}`" tag="a" class="uk-link-reset">Nome Produto</router-link>
			</h3>
			<div uk-grid>
				<div class="uk-width-expand">
					<p>R$ 39,90</p>
				</div>
				<div>
					<button class="uk-button uk-button-primary uk-button-small">Add to Cart</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['id']
}
</script>

<style>

</style>
