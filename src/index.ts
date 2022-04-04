import type { Storage } from './types'
import { withProxy } from './util'

function createStorage( _storage?: globalThis.Storage ) {
	const storage: Storage = {
		_storage: _storage || globalThis.localStorage,
		get( this: Storage, key ) {
			const value = this._storage.getItem( key.toString() )

			if ( !value ) return value

			return JSON.parse( value )
		},
		set( this: Storage, key, value ) {
			return this._storage.setItem( key.toString(), JSON.stringify( value ) )
		},
		remove( this: Storage, key ) {
			return this._storage.removeItem( key.toString() )
		},
		clear( this: Storage ) {
			return this._storage.clear()
		}
	}


	return withProxy( storage )
}

export default createStorage
