'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CartSchema extends Schema {
  up () {
    this.create('carts', (table) => {
			table.increments()
			table.integer('user_id').unsigned()
			table.integer('purchase_id').unsigned()
			table.datetime('last_used_at')
			table.enum('status', ['ACTIVE', 'INACTIVE', 'PURCHASED']).defaultsTo('ACTIVE').notNullable()
			table.timestamps()
			table.unique(['id', 'user_id'])
    })
  }

  down () {
    this.drop('carts')
  }
}

module.exports = CartSchema
