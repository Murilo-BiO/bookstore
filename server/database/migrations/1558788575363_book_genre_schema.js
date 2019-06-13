'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookGenreSchema extends Schema {
  up () {
    this.create('book_genre', (table) => {
			table.integer('book_id').unsigned().index('book_id')
			table.integer('genre_id').unsigned().index('genre_id')
			table.foreign('book_id').references('books.id').onDelete('cascade')
			table.foreign('genre_id').references('genres.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('book_genre')
  }
}

module.exports = BookGenreSchema
