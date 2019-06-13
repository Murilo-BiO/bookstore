'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Dislike extends Model {
	user () {
		return this.belongsTo('App/Models/User')
	}

	book () {
		return this.belongsTo('App/Models/Book')
	}
}

module.exports = Dislike
