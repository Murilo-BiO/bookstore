'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PurchaseSchema extends Schema {
  up () {
    this.create('purchases', (table) => {
			table.increments()
			table.integer('user_id')
			table.integer('address_id')
			table.enum('status', ['ORDER_REVIEW', 'SHIPPING_DETAILS', 'WAITING_GATEWAY', 'CANCELED', 'APPROVED']).notNullable()
			table.decimal('total', 13, 2)
			table.decimal('discount', 13, 2)
			table.decimal('final_value', 13, 2)
      table.timestamps()
    })
  }

  down () {
    this.drop('purchases')
  }
}

module.exports = PurchaseSchema
