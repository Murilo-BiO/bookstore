'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImageSchema extends Schema {
  up () {
    this.create('images', (table) => {
			table.increments()
			table.integer('book_id').unsigned()
			table.string('url')
			table.boolean('is_main').notNullable().defaultsTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('images')
  }
}

module.exports = ImageSchema
