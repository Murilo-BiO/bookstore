'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
	books () {
		return this.belongsToMany('App/Models/Book')
	}

	authors () {
		return this.belongsToMany('App/Models/Author')
	}
}

module.exports = Category
