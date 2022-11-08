import Resource from '../resource'

// Typings
import { AxiosError, AxiosInstance } from 'axios'
import { Endpoints } from '../typings/Endpoints'

export default class Orders extends Resource {
	static readonly endpoint = Endpoints.ORDERS

	constructor(client: AxiosInstance) {
		super(client, Orders.endpoint)
	}

	async capture(id: string, data: object) {
		try {
			const response = await this.client.post(`${this.endpoint}/${id}/capture`, {
				...data,
				...this.pluginInfo
			})

			return response.data
		} catch (error: any) {
			return Resource.exceptionHandle(error)
		}
	}
}
