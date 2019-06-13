'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookSchema extends Schema {
  up () {
    this.create('books', (table) => {
			table.increments()
			table.integer('promotion_id').unsigned()
			table.integer('publisher_id').unsigned()
			table.string('title').notNullable()
			table.text('description').nullable()
			table.string('language')
			table.integer('edition').unsigned()
			table.integer('year').unsigned()
			table.integer('pages')
			table.integer('quantity').unsigned()
			table.decimal('price', 13, 2).notNullable()
			table.datetime('deleted_at').nullable()
			table.timestamps()
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BookSchema
