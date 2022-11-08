import Resource from '../resource'

// Typings
import { AxiosInstance } from 'axios'
import { Endpoints } from '../typings/Endpoints'

export default class PaymentMethods extends Resource {
	static readonly endpoint = Endpoints.PAYMENT_METHODS

	constructor(client: AxiosInstance) {
		super(client, PaymentMethods.endpoint)
	}
}
