'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookCartSchema extends Schema {
  up () {
    this.create('book_cart', (table) => {
			table.integer('book_id').unsigned()
			table.integer('cart_id').unsigned()
			table.integer('quantity').unsigned()
			table.foreign('book_id').references('books.id').onDelete('cascade')
			table.foreign('cart_id').references('carts.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('book_cart')
  }
}

module.exports = BookCartSchema
