import Resource from '../resource'

// Typings
import { AxiosInstance } from 'axios'

export default class Refunds {
	client: AxiosInstance
	pluginInfo = {
		shop: 'node-wrapper',
		plugin_version: '1.1.1',
		partner: 'Robin de Laater'
	}

	constructor(client: AxiosInstance) {
		this.client = client
	}

	async create(order_id: string, data: any) {
		try {
			const response = await this.client.post(`/orders/${order_id}/refunds`, {
				...data,
				...this.pluginInfo
			})
			return response.data
		} catch (error) {
			return Resource.exceptionHandle(error)
		}
	}
}
