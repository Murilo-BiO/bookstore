<template>
		<div class="uk-flex uk-flex-center">
			<div class="uk-card uk-card-body uk-card-default uk-width-1-2">
				<h1 class="uk-card-title">Criar conta</h1>
				<form class="uk-form-stacked">
					<div class="uk-margin">
						<label class="uk-form-label" for="firstname">Nome</label>
						<div class="uk-form-controls">
							<input type="text" class="uk-input" id="firstname">
						</div>
					</div>
					<div class="uk-margin">
						<label class="uk-form-label" for="lastname">Sobrenome</label>
						<div class="uk-form-controls">
							<input type="text" class="uk-input" id="lastname">
						</div>
					</div>
					<div class="uk-margin">
						<label class="uk-form-label" for="email">Email</label>
						<div class="uk-form-controls">
							<input type="text" class="uk-input" id="email">
						</div>
					</div>
					<div class="uk-margin">
						<div class="uk-grid-small" uk-grid>
							<div class="uk-width-1-2">
								<label class="uk-form-label" for="password">Senha</label>
								<div class="uk-form-controls">
									<input type="password" class="uk-input" id="password">
								</div>
							</div>
							<div class="uk-width-1-2">
								<label class="uk-form-label" for="password_confirmation">Confirmar Senha</label>
								<div class="uk-form-controls">
									<input type="password" class="uk-input" id="password_confirmation">
								</div>
							</div>
						</div>
					</div>
					<button class="uk-button uk-button-primary" type="button">Registrar</button>
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
