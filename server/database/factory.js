'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Book', faker => {
	return {
		title: faker.sentence({ words: 4 }),
		description: faker.paragraph(),
		language: faker.country(),
		edition: faker.natural({ min: 1, max: 100 }),
		year: faker.natural({ min: 1930, max: 2019 }),
		pages: faker.natural({ min: 30, max: 1123 }),
		quantity: faker.natural({ max: 400 }),
		price: faker.floating({ fixed: 2, min: 14.90, max: 159.90 })
	}
})

Factory.blueprint('App/Models/Image', faker => {
	return {
		url: 'http://lorempixel.com/500/700',
		is_main: true
	}
})
// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
