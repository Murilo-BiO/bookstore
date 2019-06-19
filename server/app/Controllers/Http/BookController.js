'use strict'

/** @type {typeof import('../../Models/Book')} */
const Book = use('App/Models/Book')

class BookController {
	async index ({ request, response }) {
		//const { p: page, l: limit } = request.get()

		//const books = await Book.query().paginate(page, limit)
		const books = await Book.query()
			.with('images')
			.fetch()
		
		return response.send(books)
	}

	async show ({ params, response }) {
		const book = await Book.query()
			.with('images')
			.where('id', params.id)
			.first()

		if (!book)
			return response.status(404).send('not found')
		
		return response.send(book)
	}

	async store ({ request, response }) {
		const data = request.only([
			'title', 'description', 'language', 'edition',
			'year', 'pages', 'quantity', 'price'
		])

		// receber id de autor e editora pra criar o relacionamento
		// ...
		
		const book = await Book.create(data)

		if (!book)
			return response.status(500).send('internal error')

		return response.send(book)
	}

	async update ({ request, params, response }) {
		const book = await Book.find(params.id)

		if (!book)
			return response.status(404).send('not found')

		const data = request.only([
			'title', 'description', 'language', 'edition',
			'year', 'pages', 'quantity', 'price'
		])

		book.merge(data)

		if (!(await book.save()))
			return response.status(500).send('internal error')
		
		return response.send(book)
	}

	async destroy ({ params, response }) {
		const book = await Book.find(params.id)

		if (!book)
			return response.status(404).send('not found')
		
		if (!(await book.delete()))
			return response.status(500).send('internal error')
		
		return response.send('success')
	}
}

module.exports = BookController
