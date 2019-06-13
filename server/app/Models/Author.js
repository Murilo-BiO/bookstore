'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Author extends Model {

	categories () {
		return this.belongsToMany('App/Models/Category')
	}

	books () {
		return this.belongsToMany('App/Models/Book')
	}

	genres () {
		return this.belongsToMany('App/Models/Genre')
	}
}

module.exports = Author
