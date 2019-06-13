'use strict'

/** @type {typeof import('../../Models/Author')} */
const Author = use('App/Models/Author')

class AuthorController {
	async index ({ response, request }) {
		// Mover para Middleware
		let { p: page, l: limit } = request.get()

		if (!page || isNaN(page) || page < 1)
			page = 1
		if (limit) {
			if (limit < 10)
				limit = 10
			else if (limit > 200)
				limit = 200
		}
		const authors = await Author.query().paginate(page, limit)

		response.send(authors)
	}

	async store ({ request, response }) {
		const data = request.only(['firstname', 'lastname'])

		const author = await Author.create(data)

		if (!author)
			return response.status(500).send('internal error')

		return response.send(author)
	}

	async show ({ params, response }) {
		const author = await Author.find(params.id)

		if (!author)
			return response.status(404).send()
		return response.send(author)
	}

	async update ({ request, params, response }) {
		const author = await Author.find(params.id)
		
		const data = request.only(['firstname', 'lastname'])

		if (!author)
			return response.status(404).send('not found')
		
		author.merge(data)

		if (!(await author.save()))
			return response.status(500).send('internal error')
		return response.send(author)
	}

	async destroy ({ params, response }) {
		const author = await Author.find(params.id)

		if (!author)
			return response.status(404).send('not found')
		if (!(await author.delete()))
			return response.status(500).send('internal error')
		return response.send('success')
	}
}

module.exports = AuthorController
