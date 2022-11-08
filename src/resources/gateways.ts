import Resource from '../resource'

// Typings
import { AxiosInstance } from 'axios'
import { Endpoints } from '../typings/Endpoints'

export default class Gateways extends Resource {
	static readonly endpoint = Endpoints.GATEWAYS

	constructor(client: AxiosInstance) {
		super(client, Gateways.endpoint)
	}
}
