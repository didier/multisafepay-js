// Packages
import axios, { AxiosInstance } from 'axios'

// Types
import { BaseUrl } from './typings/BaseUrl'
import { Options } from './typings/Options'
import { Environment } from './typings/Environment'
import { OrdersResource } from './typings/Resources/OrdersResource'
import TokensResource from './typings/Resources/TokensResource'

// Resources
import Gateways from './resources/gateways'
import Orders from './resources/orders'
import Issuers from './resources/issuers'
import Refunds from './resources/refunds'
import PaymentMethods from './resources/payment-methods'
import Tokens from './resources/tokens'

export default class MultiSafepayClient {
	private apiKey: string

	gateways: any
	orders: OrdersResource
	issuers: any
	refunds: any
	paymentMethods: any
	tokens: TokensResource

	static baseURL: BaseUrl

	constructor(apiKey: string, options: Options) {
		this.existsApiKey(apiKey)
		this.setEnvironment(options)

		this.apiKey = apiKey

		this.gateways = new Gateways(this.createClient())
		this.orders = new Orders(this.createClient())
		this.issuers = new Issuers(this.createClient())
		this.refunds = new Refunds(this.createClient())
		this.paymentMethods = new PaymentMethods(this.createClient())
		this.tokens = new Tokens(this.createClient())
	}

	/**
	 * Checks if API key exists
	 *
	 * @param apiKey
	 */
	existsApiKey(apiKey: string) {
		if (apiKey === '' || apiKey === undefined || typeof apiKey !== 'string') {
			throw new Error('Invalid API key')
		}
	}

	/**
	 * Sets the environment
	 *
	 * @param options
	 */
	setEnvironment(options: Options) {
		if (options !== undefined && options.hasOwnProperty('environment')) {
			switch (options.environment) {
				case Environment.TEST:
					MultiSafepayClient.baseURL = BaseUrl.TEST
					break
				case Environment.LIVE:
					MultiSafepayClient.baseURL = BaseUrl.LIVE
					break
				default:
					MultiSafepayClient.baseURL = BaseUrl.TEST
					console.warn('No environment set, using TEST')
					break
			}
			return
		}

		throw new Error('Missing environment options')
	}

	createClient(): AxiosInstance {
		try {
			return axios.create({
				baseURL: MultiSafepayClient.baseURL,
				headers: {
					api_key: this.apiKey,
					'Content-Type': 'application/json; charset=UTF-8;'
				}
			})
		} catch (error: any) {
			throw new Error(error)
		}
	}
}
