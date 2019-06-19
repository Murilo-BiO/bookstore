<template>
	<div uk-grid class="uk-grid-divider">
		<div class="uk-width-1-2">
			<h1>Selecionar Endereço</h1>
			<form class="uk-form-stacked">
				<div class="uk-margin">
					<label for="address" class="uk-form-label">Endereço</label>
					<div class="uk-form-controls">
						<input type="text" id="address" class="uk-input" v-model="form.address">
					</div>
				</div>
				<div class="uk-margin">
					<label for="address_2" class="uk-form-label">Complemento</label>
					<div class="uk-form-controls">
						<input type="text" class="uk-input" id="address_2" v-model="form.address_2">
					</div>
				</div>
				<div class="uk-margin">
					<div uk-grid>
						<div class="uk-width-1-2">
							<label for="neighborhood" class="uk-form-label">Bairro</label>
							<div class="uk-form-controls">
								<input type="text" class="uk-input" id="neighborhood" v-model="form.neighborhood">
							</div>
						</div>
						<div class="uk-width-1-2">
							<label for="city" class="uk-form-label">Cidade</label>
							<div class="uk-form-controls">
								<input type="text" id="city" class="uk-input" v-model="form.city">
							</div>
						</div>
					</div>
				</div>
				<div class="uk-margin">
					<div uk-grid>
						<div class="uk-width-small">
							<label for="state" class="uk-form-label">Estado</label>
							<div class="uk-form-controls">
								<select id="state" class="uk-select" v-model="form.state">
									<option value="AC">AC</option>
									<option value="AL">AL</option>
									<option value="AP">AP</option>
									<option value="AM">AM</option>
									<option value="BA">BA</option>
									<option value="CE">CE</option>
									<option value="DF">DF</option>
									<option value="ES">ES</option>
									<option value="GO">GO</option>
									<option value="MA">MA</option>
									<option value="MT">MT</option>
									<option value="MS">MS</option>
									<option value="MG">MG</option>
									<option value="PA">PA</option>
									<option value="PB">PB</option>
									<option value="PR">PR</option>
									<option value="PE">PE</option>
									<option value="PI">PI</option>
									<option value="RJ">RJ</option>
									<option value="RN">RN</option>
									<option value="RS">RS</option>
									<option value="RO">RO</option>
									<option value="RR">RR</option>
									<option value="SC">SC</option>
									<option value="SP">SP</option>
									<option value="SE">SE</option>
									<option value="TO">TO</option>
								</select>
							</div>
						</div>
						<div class="uk-width-expand">
							<label for="cep" class="uk-form-label">CEP</label>
							<div class="uk-form-controls">
								<input type="text" class="uk-input" id="cep" v-model="form.cep">
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
		<div class="uk-width-1-2">
			<h1>Método de Pagamento</h1>
			<h2>Valor: </h2>
			<form class="uk-form-stacked">
				<div class="uk-margin">
					<label class="uk-form-label">Pagar com:</label>
					<div class="uk-form-controls">
						<label><input type="radio" name="payment" class="uk-radio" v-model="form.paymentType" value="Boleto"> Boleto Bancário</label>
						<br>
						<label><input type="radio" name="payment" class="uk-radio" v-model="form.paymentType" value="Credito"> Cartão de Crédito</label>
						<br>
						<label><input type="radio" name="payment" class="uk-radio" v-model="form.paymentType" value="Debito"> Débito Online</label>
					</div>
				</div>
				<div class="uk-margin">
					<a @click="purchase" class="uk-button uk-button-primary" type="button">Finalizar Compra</a>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { Form } from '../../common';
export default {
	async created () {
		for (const key in this.$cart.items) {
			const { [key]: amount } = this.$cart.items
			const { data: book } = await this.$http.get(`/api/book/${key}`)

			this.total += book.price * amount
			this.books.push(book)
		}
	},

	data () {
		return {
			total: 0,
			books: [],
			form: new Form({
				address: '',
				address_2: '',
				neighborhood: '',
				city: '',
				state: '',
				cep: '',
				paymentType: ''
			})
		}
	},

	methods: {
		async purchase () {

			const books = this.$cart.items

			const payload = {
				books,
				...this.form.data()
			}

			await this.$http.post('/api/purchase', payload)

			this.$cart.flush()
			window.open(this.$router.resolve('/GateWay').href, '_blank')
			this.$router.push('/')
		}
	}
}
</script>

<style>

</style>
