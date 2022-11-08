// typings
import { Resource } from './Resource'
import { AffiliateObject } from '../Orders/Create/AffiliateObject'
import { CheckoutOptionsObject } from '../Orders/Create/CheckoutOptionsObject'
import { CustomerObject } from '../Orders/Create/CustomerObject'
import { CustomInfoObject } from '../Orders/Create/CustomInfoObject'
import { DeliveryObject } from '../Orders/Create/DeliveryObject'
import { GatewayInfoObject } from '../Orders/Create/GatewayInfoObject'
import { GoogleAnalyticsObject } from '../Orders/Create/GoogleAnalyticsObject'
import { PaymentOptionsObject } from '../Orders/Create/PaymentOptionsObject'
import { SecondChanceObject } from '../Orders/Create/SecondChanceObject'
import { ShoppingCartObject } from '../Orders/Create/ShoppingCartObject'
import { UpdateOrderObject } from '../Orders/Update/UpdateOrderObject'

export interface OrdersResource extends Resource {
	get: (order_id: string) => any
	capture: (id: string, data: object) => any
	update: (order_id: string, data: UpdateOrderObject) => any
	create: (data: {
		type: 'direct' | 'redirect' | 'paymentlink'
		gateway: string
		order_id: string
		amount: number
		currency: string
		description: string
		payment_options?: PaymentOptionsObject
		customer?: CustomerObject
		delivery?: DeliveryObject
		gateway_info?: GatewayInfoObject
		checkout_options?: CheckoutOptionsObject
		shopping_cart?: ShoppingCartObject
		items?: string
		affiliate?: AffiliateObject
		second_chance?: SecondChanceObject
		custom_info?: CustomInfoObject
		days_active?: number
		seconds_active?: number
		var1?: string
		var2?: string
		var3?: string
		google_analytics?: GoogleAnalyticsObject
	}) => any
}
