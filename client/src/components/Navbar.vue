<template>
	<div class="uk-section uk-section-primary uk-padding-remove">
		<div class="uk-container uk-container-expand">
			<nav uk-navbar>
				<div class="uk-navbar-left">
					<ul class="uk-navbar-nav">
						<router-link to="/" tag="li">
							<a>Home</a>
						</router-link>
					</ul>
				</div>
				<div class="uk-navbar-right">
					<ul class="uk-navbar-nav">
						<!-- TODO: Adicionar Router Links -->
						<router-link to="/cart" tag="li">
							<a>
								<span uk-icon="cart"></span>
								<sup>
									<span class="uk-badge">3</span>
								</sup>
							</a>
						</router-link>
						<router-link to="/signup" tag="li">
							<a>Sign Up</a>
						</router-link>
						<router-link to="/signin" tag="li">
							<a>Sign In</a>
						</router-link>
					</ul>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
