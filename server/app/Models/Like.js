'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Like extends Model {
	user () {
		return this.belongsTo('App/Models/User')
	}

	book () {
		return this.belongsTo('App/Models/Book')
	}
}

module.exports = Like
