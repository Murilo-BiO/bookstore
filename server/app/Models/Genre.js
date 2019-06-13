'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Genre extends Model {
	authors () {
		return this.belongsToMany('App/Models/Author')
	}

	books () {
		return this.belongsToMany('App/Models/Book')
	}
}

module.exports = Genre
