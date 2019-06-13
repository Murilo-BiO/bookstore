'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Image extends Model {
	book () {
		return this.belongsTo('App/Models/Book')
	}
}

module.exports = Image
