<template>
		<div class="uk-flex uk-flex-center">
			<div class="uk-card uk-card-body uk-card-default uk-width-1-2">
				<h1 class="uk-card-title">Criar conta</h1>
				<form class="uk-form-stacked">
					<div class="uk-margin">
						<label class="uk-form-label" for="firstname">Nome</label>
						<div class="uk-form-controls">
							<input type="text" class="uk-input" id="firstname" v-model="form.firstname">
						</div>
					</div>
					<div class="uk-margin">
						<label class="uk-form-label" for="lastname">Sobrenome</label>
						<div class="uk-form-controls">
							<input type="text" class="uk-input" id="lastname" v-model="form.lastname">
						</div>
					</div>
					<div class="uk-margin">
						<label class="uk-form-label" for="email">Email</label>
						<div class="uk-form-controls">
							<input type="text" class="uk-input" id="email" v-model="form.email">
						</div>
					</div>
					<div class="uk-margin">
						<div class="uk-grid-small" uk-grid>
							<div class="uk-width-1-2">
								<label class="uk-form-label" for="password">Senha</label>
								<div class="uk-form-controls">
									<input type="password" class="uk-input" id="password" v-model="form.password">
								</div>
							</div>
							<div class="uk-width-1-2">
								<label class="uk-form-label" for="password_confirmation">Confirmar Senha</label>
								<div class="uk-form-controls">
									<input type="password" class="uk-input" id="password_confirmation" v-model="form.password_confirmation">
								</div>
							</div>
						</div>
					</div>
					<button class="uk-button uk-button-primary" type="button" @click="register" :disabled="loading">Registrar</button>
				</form>
			</div>
		</div>
</template>

<script>
import { Form } from '../../common'

export default {
	data () {
		return {
			loading: false,
			form: new Form({
				email: '',
				password: '',
				password_confirmation: '',
				firstname: '',
				lastname: ''
			})
		}
	},

	methods: {
		async register () {
			this.loading = true
			try {
				const { data } = await this.form.submit('post', '/api/auth/register')

				this.$auth.signIn(data)
				this.$router.push('/')
			} catch (e) {
				console.log(e)
			} finally {
				this.loading = false
			}
		}
	}
}
</script>

<style>

</style>
