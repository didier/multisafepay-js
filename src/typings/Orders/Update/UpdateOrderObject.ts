export interface UpdateOrderObject {
	status?: string
	tracktrace_code?: string
	tracktrace_url?: string
	carrier?: string
	ship_date?: string
	reason?: string
	invoice_id?: string
	invoice_url?: string
	po_number?: string
	exclude_order?: string
	extend_expiration?: boolean
	new_order_id?: string
}
