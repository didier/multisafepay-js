import Resource from '../resource'

// Typings
import { AxiosInstance } from 'axios'
import { Endpoints } from '../typings/Endpoints'

export default class Issuers extends Resource {
	static readonly endpoint = Endpoints.ISSUERS

	constructor(client: AxiosInstance) {
		super(client, Issuers.endpoint)
	}

	async get(gateway: string) {
		try {
			const response = await this.client.get(`${Issuers.endpoint}/${gateway}`)

			return response.data
		} catch (error) {
			return Resource.exceptionHandle(error)
		}
	}
}
