const LOCAL_STORAGE_KEY = 'bookstore-cart'

export class Cart {
	static items = []
	static save () {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.items))
	}
}
