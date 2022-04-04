## Installation
```sh
yarn add storage-proxy
# or
npm install storage-proxy
```

## Usage
`storage-proxy` is very simple to use. Behind it uses the `Storage` and `Proxy` api to interact with the given storage as fallback (~always).

Example:
```ts
import createStorage from 'storage-proxy'

declare module 'storage-proxy' {
	interface StorageData {
		name: string
		age: number
	}
}

// the default storage is `localStorage`
// you can pass any `Storage` compatible instance.
const storage = createStorage(localStorage) // or createStorage(sessionStorage)

function saveInfos(name: string, age: number) {
	storage.name = name
	storage.age = age
}


function readInfos() {
	return {
		name: storage.name,
		age: storage.age
	}
}
```
