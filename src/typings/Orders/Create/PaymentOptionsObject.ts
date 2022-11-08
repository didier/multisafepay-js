export interface PaymentOptionsObject {
	notification_url?: string
	notification_method?: 'POST' | 'GET'
	redirect_url?: string
	cancel_url?: string
	close_window?: boolean
	settings?: object
	template_id?: string
	template?: object
}
