'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Purchase extends Model {
	cart () {
		return this.hasOne('App/Models/Cart')
	}

	user () {
		return this.belongsTo('App/Models/User')
	}

	address () {
		return this.belongsTo('App/Models/Address')
	}
}

module.exports = Purchase
