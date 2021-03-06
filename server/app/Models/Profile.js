'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Profile extends Model {
  static get visible () {
    return ['cpf', 'addresses', 'firstname', 'lastname', 'phone']
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  addresses () {
    return this.hasMany('App/Models/Address')
  }

}

module.exports = Profile
