'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AuthorBookSchema extends Schema {
  up () {
    this.create('author_book', (table) => {
			table.integer('author_id').unsigned().index('author_id')
			table.integer('book_id').unsigned().index('book_id')
			table.foreign('author_id').references('authors.id').onDelete('cascade')
			table.foreign('book_id').references('books.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('author_book')
  }
}

module.exports = AuthorBookSchema
