'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.create('profiles', (table) => {
			table.increments()
			table.integer('user_id').unsigned()
			table.string('firstname')
			table.string('lastname')
			table.string('phone').nullable()
			table.string('cpf').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('profiles')
  }
}

module.exports = ProfileSchema
