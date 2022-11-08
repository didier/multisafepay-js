export default interface TokensResource {
	get: (customer_reference: string, token: string) => any
	list: (customer_reference: string) => any
	update: (customer_reference: string, token: string, expiry_date: number) => any
	delete: (customer_reference: string, token: string) => any
}
