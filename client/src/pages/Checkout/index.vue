<template>
	<div uk-grid class="uk-grid-divider">
		<div class="uk-width-1-2">
			<h1>Selecionar Endereço</h1>
			<form class="uk-form-stacked">
				<div class="uk-margin">
					<label for="address" class="uk-form-label">Endereço</label>
					<div class="uk-form-controls">
						<input type="text" id="address" class="uk-input">
					</div>
				</div>
				<div class="uk-margin">
					<label for="address_2" class="uk-form-label">Complemento</label>
					<div class="uk-form-controls">
						<input type="text" class="uk-input" id="address_2">
					</div>
				</div>
				<div class="uk-margin">
					<div uk-grid>
						<div class="uk-width-1-2">
							<label for="neighborhood" class="uk-form-label">Bairro</label>
							<div class="uk-form-controls">
								<input type="text" class="uk-input" id="neighborhood">
							</div>
						</div>
						<div class="uk-width-1-2">
							<label for="city" class="uk-form-label">Cidade</label>
							<div class="uk-form-controls">
								<input type="text" id="city" class="uk-input">
							</div>
						</div>
					</div>
				</div>
				<div class="uk-margin">
					<div uk-grid>
						<div class="uk-width-small">
							<label for="state" class="uk-form-label">Estado</label>
							<div class="uk-form-controls">
								<select id="state" class="uk-select">
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
								<input type="text" class="uk-input" id="cep">
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
		<div class="uk-width-1-2">
			<h1>Método de Pagamento</h1>
			<form class="uk-form-stacked">
				<div class="uk-margin">
					<label class="uk-form-label">Pagar com:</label>
					<div class="uk-form-controls">
						<label><input type="radio" name="payment" class="uk-radio"> Boleto Bancário</label>
						<br>
						<label><input type="radio" name="payment" class="uk-radio"> Cartão de Crédito</label>
						<br>
						<label><input type="radio" name="payment" class="uk-radio"> Débito Online</label>
					</div>
				</div>
				<div class="uk-margin">
					<button class="uk-button uk-button-primary" type="button">Finalizar Compra</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
