import { Router } from 'vue-fancy-router'

const viewsHandler = component => {
	return require(`./pages/${component}`).default
}

const Route = new Router({ linkExactActiveClass: 'uk-active' }, viewsHandler)

Route.add('/', '').children(r => {
	r.add('', 'Home')
	r.add('product/:id', 'Product/ProductDetails')
	r.add('cart', 'Cart')
	r.add('checkout', 'Checkout')
	r.add('signup', 'Auth/Register')
	r.add('signin', 'Auth/Login')
})

export const routes = Route.build()
