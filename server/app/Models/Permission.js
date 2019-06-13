'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Permission extends Model {
	users () {
		return this.belongsToMany('App/Models/User')
	}

	roles () {
		return this.belongsToMany('App/Models/Role')
	}
}

module.exports = Permission
