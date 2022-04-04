import createStorage from '../src'
import LocalStorageMock from '../mocks/local-storage-mock'

const localStorageMock = new LocalStorageMock()
global.localStorage = localStorageMock


describe( 'createStorage', () => {
	const spies = {
		get: jest.spyOn( localStorageMock, 'getItem' ),
		set: jest.spyOn( localStorageMock, 'setItem' ),
		remove: jest.spyOn( localStorageMock, 'removeItem' ),
		clear: jest.spyOn( localStorageMock, 'clear' ),
	}

	it( 'Should create a storage object', () => {
		const storage = createStorage()

		expect( storage.get ).toBeDefined()
		expect( storage.set ).toBeDefined()
		expect( storage.remove ).toBeDefined()
		expect( storage.clear ).toBeDefined()
	} )

	describe( 'read / write operations', () => {
		it( 'Should handle a BOOLEAN value', () => {
			const storage = createStorage();
			( storage as any ).boolean = true

			expect( spies.set ).toHaveBeenCalledWith( 'boolean', 'true' )
			expect( ( storage as any ).boolean ).toBe( true )
			expect( spies.get ).toHaveBeenCalledWith( 'boolean' )
		} )

		it( 'Should handle a STRING value', () => {
			const storage = createStorage();
			( storage as any ).string = 'string'

			expect( spies.set ).toHaveBeenCalledWith( 'string', JSON.stringify( 'string' ) )
			expect( ( storage as any ).string ).toBe( 'string' )
			expect( spies.get ).toHaveBeenCalledWith( 'string' )
		} )

		it( 'Should handle a NUMBER value', () => {
			const storage = createStorage();
			( storage as any ).number = 1

			expect( spies.set ).toHaveBeenCalledWith( 'number', JSON.stringify( 1 ) )
			expect( ( storage as any ).number ).toBe( 1 )
			expect( spies.get ).toHaveBeenCalledWith( 'number' )
		} )

		it( 'Should handle an OBJECT value', () => {
			const storage = createStorage();
			( storage as any ).object = {
				key: 'value'
			}

			expect( spies.set ).toHaveBeenCalledWith( 'object', JSON.stringify( {
				key: 'value'
			} ) )
			expect( ( storage as any ).object ).toEqual( {
				key: 'value'
			} )
			expect( spies.get ).toHaveBeenCalledWith( 'object' )
		} )
	} )
} )
