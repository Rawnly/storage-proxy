export default class LocalStorageMock implements globalThis.Storage {
	private store: any

	get length() {
		return Object.keys( this.store ).length
	}

	constructor() {
		this.store = {};
	}

	clear() {
		this.store = {};
	}

	getItem( key: string ) {
		return this.store[key] || null;
	}

	setItem( key: string, value: string ) {
		this.store[key] = String( value );
	}

	removeItem( key: string ) {
		delete this.store[key];
	}

	key( index: number ): string | null {
		return Object.entries( this.store )[index]?.[0] || null;
	}
}
