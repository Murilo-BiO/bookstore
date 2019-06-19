import { Event } from './Event'
import { Http } from './Http';

const LOCAL_STORAGE_KEY = 'bookstore-cart'

Event.listen('auth-state-changed', user => {
	if (!user)
		return Cart.flush()
})

export const Cart = {
	_items: {},
	
	get items () {
		return this._items
	},
	
	save () {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.items))
	},

	get length () {
		return Object.keys(this.items).length
	},

	add (item) {
		if (this._items[item.id])
			this._items[item.id]++
		else
			this._items[item.id] = 1
		Event.fire('cart-updated', this.items)
	},

	flush () {
		for (const key in this.items)
			delete this.items[key]
		Event.fire('cart-updated', this.items)
		localStorage.removeItem(LOCAL_STORAGE_KEY)
	}
}
