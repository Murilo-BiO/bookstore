'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


const Address = use('App/Models/Address')
const Purchase = use('App/Models/Purchase')
const User = use('App/Models/Purchase')
const Book = use('App/Models/Book')
const Cart = use('App/Models/Cart')

Route.group('auth', () => {
	Route.post('login', 'AuthController.signin').validator('AuthLogin')
	Route.post('register', 'AuthController.signup').validator('AuthRegister')
}).prefix('api/auth')

Route.group('api', () => {
	Route.get('profile', 'ProfileController.index').middleware(['auth:jwt'])
	Route.resource('author', 'AuthorController').only(['index', 'store', 'show', 'update', 'destroy'])
	Route.resource('book', 'BookController').only(['index', 'store', 'show', 'update', 'destroy'])

	Route.post('purchase', async ({ response, request, auth }) => {
		const user = await auth.getUser()
		const profile = await user.profile().first()
		const address = new Address
		const purchase = new Purchase
		const cart = new Cart

		const addressPayload = request.only(['address', 'address_2', 'city', 'neighborhood', 'state', 'cep'])
		const { books: booksPayload } = request.only(['books'])

		address.fill(addressPayload)
		await profile.addresses().save(address)
		
		const books = await Book.query()
			.whereIn('id', Object.keys(booksPayload))
			.fetch()

		cart.fill({
			last_used_at: new Date,
			status: 'PURCHASED'
		})
		await user.carts().save(cart)
		await cart.books().attach(Object.keys(booksPayload), row => {
			row.quantity = booksPayload[row.book_id]
		})

		let totalValue = 0
		for (const book of books.rows) {
			totalValue += book.price * booksPayload[book.id]
		}

		purchase.fill({
			total: totalValue,
			discount: 0,
			final_value: totalValue,
			status: 'APPROVED'
		})
		
		await user.purchases().save(purchase)
		await purchase.address().associate(address)

		await purchase.cart().save(cart)

		const pur = await Purchase.query()
			.where('id', purchase.id)
			.with('address')
			.with('cart.books')
			.with('user.profile')
			.first()

		response.send(pur)
	})
	Route.get('purchase', async ({ response }) => {
		const pur = await Purchase.query()
			.with('address')
			.with('cart.books')
			.with('user.profile')
			.fetch()

		response.send(pur)
	})
}).prefix('api')

