#  Quantity discounts

## List quantity discounts

List all quantity discounts under a specific product based on the product ID you supply.

```shell
 GET https://subdomain.mybrightsites.com/api/v2.1.1/products/1/quantity_discounts?token=GXzAxWkkyYLsESGQTU15
```

> The above request returns JSON structured like this:

```json
 { "enabled": true, "type": "fixed_price", "quantity_discounts": [ { "id": 579, "quantity": 5, "modifier": 1000.0 }, { "id": 580, "quantity": 10, "modifier": 990.0 }, { "id": 581, "quantity": 100, "modifier": 900.0 } ] }
```

### HTTP Request

`GET /api/v2.1.1/products/:product_id/quantity_discounts`

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>


## Show quantity discount

Show you a specific quantity discount for a product based on the quantity discount ID you supply.

```shell
 GET https://subdomain.mybrightsites.com/api/v2.1.1/products/1/quantity_discounts/579?token=GXzAxWkkyYLsESGQTU15
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "quantity": 10, "modifier": 990.0 }
```

### HTTP Request

`GET /api/v2.1.1/products/:product_id/quantity_discounts/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Quantity discount ID</div><div>Must be a number</div>


## Create quantity discount

Create a new quantity discount for a specific product based on the product ID you supply.

```shell
 POST https://subdomain.mybrightsites.com/api/v2.1.1/products/1/quantity_discounts?token=GXzAxWkkyYLsESGQTU15 { "quantity_discount": { "quantity": 10, "modifier": 990.0 } }
```

> The above request returns JSON structured like this:

```json
 { "id": 581, "quantity": 10, "modifier": 990.0 }
```

### HTTP Request

`POST /api/v2.1.1/products/:product_id/quantity_discounts`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>quantity_discount </strong></div><div>required</div> | <div>Must be a Hash</div>
<div><strong>quantity_discount[quantity] </strong></div><div>required</div> | <div>Quantity</div><div>Must be a number</div>
<div><strong>quantity_discount[modifier] </strong></div><div>required</div> | <div>Base price / Discount percentage</div><div>Must be a float</div>


## Update quantity discount

Update information for a specific quantity discount on a product based on the quantity discount ID you supply.

```shell
 PUT https://subdomain.mybrightsites.com/api/v2.1.1/products/1/quantity_discounts/579?token=GXzAxWkkyYLsESGQTU15 { "quantity_discount": { "modifier": 980.0 } }
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "quantity": 10, "modifier": 980.0 }
```

### HTTP Request

`PUT /api/v2.1.1/products/:product_id/quantity_discounts/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Quantity discount ID</div><div>Must be a number</div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>quantity_discount </strong></div><div>required</div> | <div>Must be a Hash</div>
<div><strong>quantity_discount[quantity] </strong></div><div>required</div> | <div>Quantity</div><div>Must be a number</div>
<div><strong>quantity_discount[modifier] </strong></div><div>required</div> | <div>Base price / Discount percentage</div><div>Must be a float</div>


## Delete quantity discount

Delete a specific quantity discount on a product based on the quantity discount ID you supply.

```shell
 DELETE https://subdomain.mybrightsites.com/api/v2.1.1/products/1/quantity_discounts/579?token=GXzAxWkkyYLsESGQTU15
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "quantity": 10, "modifier": 980.0 }
```

### HTTP Request

`DELETE /api/v2.1.1/products/:product_id/quantity_discounts/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Quantity discount ID</div><div>Must be a number</div>
