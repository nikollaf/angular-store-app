// store the products

function store() {
	this.products = [

		new product("APL", "Apple", "Eat one every..", 12, 90, 0, 2, 0 ,1 ,2),
		new product("AVC", "Avocado", "Guacamole", 16, 90, 0, 1, 1, 1, 2),
		new product("BAN", "Banana", "There are..", 4, 120, 0, 2, 1, 2, 2),
		// more products ..
	];
	this.dvaCaption = ["Negligible", "Low", "Average", "Good", "Great"];
	this.dvaRange = ["below 5%", "between 5 and 10%", "above 40%"];
}

store.prototype.getProduct = function (sku) {
	for (var i = 0; i < this.products.length; i++) {
		if (this.products[i].sku == sku)
			return this.products[i];
	}
	return null;
}

function product(sku, name, description, price, cal, carot, vitc, folate, potassium, fiber) {

	this.sku = sku; // product code = [SKU = stock keeping unit]
	this.name = name;
	this.description = description;
	this.price = price;
	this.cal = cal;
	this.nutrients = (
		"Carotenoid" : carot,
		"Vitamin C" : vitc,
		"Folates" : folate,
		"Potassium" : potassium,
		"Fiber" : fiber
	);
}