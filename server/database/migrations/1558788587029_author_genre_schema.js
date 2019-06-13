'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AuthorGenreSchema extends Schema {
  up () {
    this.create('author_genre', (table) => {
			table.integer('author_id').unsigned().index('author_id')
			table.integer('genre_id').unsigned().index('genre_id')
			table.foreign('author_id').references('authors.id').onDelete('cascade')
			table.foreign('genre_id').references('genres.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('author_genre')
  }
}

module.exports = AuthorGenreSchema
