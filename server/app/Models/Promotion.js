'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Promotion extends Model {
	creator () {
		return this.belongsTo('App/Models/User').with('profile')
	}

	books () {
		return this.hasMany('App/Models/Book')
	}
}

module.exports = Promotion
