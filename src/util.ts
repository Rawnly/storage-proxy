import { type Storage } from './types'


export const withProxy = ( storage: Storage ) => (
	new Proxy( storage, {
		get( target, key, receiver ) {
			if ( key in target ) {
				return Reflect.get( target, key, receiver )
			}

			return target.get( key )
		},
		set( target, key, value, receiver ) {
			if ( key in target ) {
				return Reflect.set( target, key, value, receiver )
			}

			target.set( key, value )
			return true
		},
		deleteProperty( target, p ) {
			if ( p in target ) {
				return Reflect.deleteProperty( target, p )
			}

			target.remove( p )
			return true
		},
		ownKeys( target ) {
			return Reflect
				.ownKeys( target )
				.filter( key => !key.toString().startsWith( '_' ) )
		}
	} )
)
