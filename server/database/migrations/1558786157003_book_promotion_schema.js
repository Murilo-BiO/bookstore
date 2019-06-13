'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookPromotionSchema extends Schema {
  up () {
    this.create('book_promotion', (table) => {
			table.integer('book_id').unsigned().index('book_id')
			table.integer('promotion_id').unsigned().index('promotion_id')
			table.foreign('book_id').references('books.id').onDelete('cascade')
			table.foreign('promotion_id').references('promotions.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('book_promotion')
  }
}

module.exports = BookPromotionSchema
