import { AxiosInstance } from 'axios'
import Resource from '../resource'
import { Endpoints } from '../typings/Endpoints'

export default class Tokens {
	client: AxiosInstance
	endpoint = Endpoints.TOKENS

	constructor(client: AxiosInstance) {
		this.client = client
	}

	async list(customer_reference: string) {
		try {
			const response = await this.client.get(`${this.endpoint}/${customer_reference}`)

			return response.data
		} catch (error: any) {
			return Resource.exceptionHandle(error)
		}
	}

	async get(customer_reference: string, token: string) {
		try {
			const response = await this.client.get(
				`${this.endpoint}/${customer_reference}/token/${token}`
			)

			return response.data
		} catch (error: any) {
			return Resource.exceptionHandle(error)
		}
	}

	async update(customer_reference: string, token: string, expiry_date: number) {
		try {
			const response = await this.client.patch(
				`${this.endpoint}/${customer_reference}/update/${token}`,
				{ expiry_date: expiry_date }
			)

			return response.data
		} catch (error: any) {
			return Resource.exceptionHandle(error)
		}
	}

	async delete(customer_reference: string, token: string) {
		try {
			const response = await this.client.delete(
				`${this.endpoint}/${customer_reference}/remove/${token}`
			)

			return response.data
		} catch (error: any) {
			return Resource.exceptionHandle(error)
		}
	}
}
