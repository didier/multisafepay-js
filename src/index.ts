import { Options } from './typings/Options'
import MultiSafepayClient from './multisafepay'

const createClient = (apiKey: string, options: Options): MultiSafepayClient => {
	return new MultiSafepayClient(apiKey, options)
}

export { createClient }
