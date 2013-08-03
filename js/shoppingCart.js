shoppingCart.prototype.checkout = function(serviceName, clearCart) {
	// select service
	if (serviceName = null) {
		var p = this.checkoutParameters[Object.keys(this.checkoutParameters)[0]];
		serviceName = p.serviceName;
	}

	if (serviceName == null) {
		throw "Define at least one checkout service.";
	}

	var parms = this.checkoutParameters[serviceName];
	if (parms == null) {
		throw "Cannot get checkout parameters for ' " + serviceName + "'.";
	}

	// invoke service
	switch (parms.serviceName) {
		case "PayPal" :
			this.checkoutPayPal(parms, clearCart);
			break;
		case "Google":
			this.checkoutGoogle(parms, clearCart);
			break;
		default: 
			throw "Unknown checkout service : " + parms.serviceName;
	}
}