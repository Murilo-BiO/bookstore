'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Book extends Model {
	authors () {
		return this.belongsToMany('App/Models/Author')
	}

	genres () {
		return this.belongsToMany('App/Models/Genre')
	}

	categories () {
		return this.belongsToMany('App/Models/Category')
	}

	publisher () {
		return this.belongsTo('App/Models/Publisher')
	}

	likes () {
		return this.hasMany('App/Models/Like')
	}

	dislikes () {
		return this.hasMany('App/Models/Dislike')
	}

	promotion () {
		return this.belongsTo('App/Models/Promotion')
	}

	images () {
		return this.hasMany('App/Models/Image')
	}
}

module.exports = Book
