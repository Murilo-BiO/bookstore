'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cart extends Model {
	user () {
		return this.belongsTo('App/Models/User')
	}

	purchase () {
		return this.belongsTo('App/Models/Purchase')
	}

	books () {
		return this.belongsToMany('App/Models/Book').withPivot(['quantity'])
	}
}

module.exports = Cart
