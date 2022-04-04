type Nullable<T> = T | null;

interface StorageData extends Record<string | number | symbol, Nullable<string | number | object>> {

}

export interface Storage {
	_storage: globalThis.Storage
	get: <K extends keyof StorageData = keyof StorageData>( key: K ) => Nullable<StorageData[K]>
	set: <K extends keyof StorageData = keyof StorageData>( key: K, value: StorageData[K] ) => void
	remove: <K extends keyof StorageData = keyof StorageData>( key: K ) => void
	clear: () => void
}
