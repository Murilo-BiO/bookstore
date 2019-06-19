<template>
		<div class="uk-flex uk-flex-center">
			<div class="uk-card uk-card-body uk-card-default uk-width-1-3">
				<h1 class="uk-card-title">Login</h1>
				<form class="uk-form-stacked">
					<div class="uk-margin">
						<label class="uk-form-label" for="email">Email</label>
						<div class="uk-form-controls">
							<input type="text" class="uk-input" id="email" v-model="form.email">
						</div>
					</div>
					<div class="uk-margin">
							<label class="uk-form-label" for="password">Senha</label>
							<div class="uk-form-controls">
								<input type="password" class="uk-input" id="password" v-model="form.password">
							</div>
					</div>
					<button class="uk-button uk-button-primary"
						type="button"
						@click="login"
						:disabled="loading">
						Entrar
					</button>
				</form>
			</div>
		</div>
</template>

<script>

export default {
	methods: {
		async login () {
			this.loading = true
			try {
				const { data } = await this.$http.post('/api/auth/login', this.form)
				
				this.$auth.signIn(data)
				this.$router.push('/')
			} catch (e) {
				console.log(e)
				this.$alert('Credenciais inválidas!', 'danger')
			} finally {
				this.loading = false
			}
		}
	},

	data () {
		return {
			loading: false,
			form: {
				email: '',
				password: ''
			}
		}
	}
}
</script>

<style>

</style>
