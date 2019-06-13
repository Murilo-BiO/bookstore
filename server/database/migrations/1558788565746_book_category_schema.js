'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookCategorySchema extends Schema {
  up () {
    this.create('book_category', (table) => {
			table.integer('book_id').unsigned().index('book_id')
			table.integer('category_id').unsigned().index('category_id')
			table.foreign('book_id').references('books.id').onDelete('cascade')
			table.foreign('category_id').references('categories.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('book_category')
  }
}

module.exports = BookCategorySchema
