'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PromotionSchema extends Schema {
  up () {
    this.create('promotions', (table) => {
			table.increments()
			table.integer('user_id').unsigned() // created by
			table.string('name').unique()
			table.text('description')
			table.enum('type', ['PERCENTAGE', 'FIXED_VALUE'])
			table.decimal('value', 13, 2)
			table.datetime('deleted_at').defaultsTo(null)
      table.timestamps()
    })
  }

  down () {
    this.drop('promotions')
  }
}

module.exports = PromotionSchema
