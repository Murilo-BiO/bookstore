'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressSchema extends Schema {
  up () {
    this.create('addresses', (table) => {
			table.increments()
			table.integer('profile_id').unsigned()
			table.boolean('is_main').defaultsTo(false).notNullable()
			table.string('address').notNullable()
			table.string('address_2')
			table.string('neighborhood').notNullable()
			table.string('city').notNullable()
			table.enum('state', [
				'AC', 'AL', 'AP', 'AM', 'BA', 'CE',
				'DF', 'ES', 'GO', 'MA', 'MT', 'MS',
				'MG', 'PA', 'PB', 'PR', 'PE', 'PI',
				'RJ', 'RN', 'RS', 'RO', 'RR', 'SC',
				'SP', 'SE', 'TO'
			]).notNullable()
			table.string('cep').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AddressSchema
