'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DislikeSchema extends Schema {
  up () {
    this.create('dislikes', (table) => {
			table.increments()
			table.integer('user_id').unsigned().notNullable()
			table.integer('book_id').unsigned().notNullable()
			table.timestamps()
			table.unique(['user_id', 'book_id'])
    })
  }

  down () {
    this.drop('dislikes')
  }
}

module.exports = DislikeSchema
