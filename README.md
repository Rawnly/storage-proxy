## Installation
> ⚠️ NOTE: Package not yet published.

```sh
yarn add @rawnly/storage-proxy
# or
npm install @rawnly/storage-proxy
```

## Usage
`@rawnly/storage-proxy` is very simple to use. Behind it uses the `Storage` and `Proxy` api to interact with the given storage as fallback (~always).

Example:
```ts
import createStorage from '@rawnly/storage-proxy'

declare module '@rawnly/storage-proxy' {
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
