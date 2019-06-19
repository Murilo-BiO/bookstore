<template>
	<div uk-grid>
		<div class="uk-width-3-5">
			<div class="uk-overflow-auto">
				<table class="uk-table uk-table-middle uk-table-divider">
					<thead>
						<tr>
							<th class="uk-table-shrink"></th>
							<th class="uk-table-expand">Nome</th>
							<th class="uk-width-small">Preço</th>
							<th class="uk-width-small">Quantidade</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="book in books" :key="book.id">
							<td>
								<img :src="book.images[0].url" :alt="book.title" class="uk-preserve-width" width="50">
							</td>
							<td class="uk-text-truncate">{{ book.title }}</td>
							<td>R$ {{ book.price }}</td>
							<td>{{ book.amount }}</td>
							<td>
								<a class="uk-icon-link uk-text-danger" uk-icon="trash"></a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="uk-width-2-5">
			<div class="uk-card uk-card-body uk-card-default">
				<h1 class="uk-heading-divider">Resumo</h1>
				<div uk-grid class="uk-grid-small">
					<div class="uk-width-expand" uk-leader>Valor Total</div>
					<div>R$ {{ price }}</div>
				</div>
				<!--<div uk-grid class="uk-grid-small">
					<div class="uk-width-expand" uk-leader>Desconto</div>
					<div>R$ 0,00</div>
				</div>
				<div uk-grid class="uk-grid-small">
					<div class="uk-width-expand" uk-leader>Valor Final</div>
					<div>R$ 39,90</div>
				</div>
				-->
				<div class="uk-margin">
					<router-link class="uk-button uk-width-1-1 uk-button-primary uk-button-large" tag="a" to="/checkout" v-if="books.length > 1">Finalizar Compra</router-link>
					<button class="uk-button uk-width-1-1 uk-button-primary uk-button-large" disabled="true" v-else>Finalizar Compra</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			books: [],
			price: 0.0
		}
	},

	async created () {
		const books = []
		for (const item in this.$cart.items) {
			const { data: book } = await this.$http.get(`/api/book/${item}`)

			book.amount = this.$cart.items[item]
			books.push(book)
			this.price += book.price * book.amount
		}

		this.books = books
		return books
	}
}
</script>

<style>

</style>
