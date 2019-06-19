'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
	static get visible () {
		return ['email', 'profile', 'id']
	}

	static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }
	
	profile () {
		return this.hasOne('App/Models/Profile')
	}

	permissions () {
		return this.belongsToMany('App/Models/Permission')
	}

	roles () {
		return this.belongsToMany('App/Models/Role')
	}

	purchases () {
		return this.hasMany('App/Models/Purchase')
	}

	carts () {
		return this.hasMany('App/Models/Cart')
	}

	likes () {
		return this.hasMany('App/Models/Like')
	}

	dislikes () {
		return this.hasMany('App/Models/Dislike')
	}
}

module.exports = User
