#  Quantity discounts

## List quantity discounts

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1.1/products/1/quantity_discounts?token=GXzAxWkkyYLsESGQTU15
```

> The above request returns JSON structured like this:

```json
 { "enabled": true, "type": "fixed_price", "quantity_discounts": [ { "id": 579, "quantity": 5, "modifier": 1000.0 }, { "id": 580, "quantity": 10, "modifier": 990.0 }, { "id": 581, "quantity": 100, "modifier": 900.0 } ] }
```

### HTTP Request

`GET /api/v1.1.1/products/:product_id/quantity_discounts`



## Show quantity discount

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1.1/products/1/quantity_discounts/579?token=GXzAxWkkyYLsESGQTU15
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "quantity": 10, "modifier": 990.0 }
```

### HTTP Request

`GET /api/v1.1.1/products/:product_id/quantity_discounts/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
id  |  required  | Quantity discount ID |  Must be a number.


## Create quantity discount

```shell
 POST https://subdomain.mybrightsites.com/api/v1.1.1/products/1/quantity_discounts?token=GXzAxWkkyYLsESGQTU15 { "quantity_discount": { "quantity": 10, "modifier": 990.0 } }
```

> The above request returns JSON structured like this:

```json
 { "id": 581, "quantity": 10, "modifier": 990.0 }
```

### HTTP Request

`POST /api/v1.1.1/products/:product_id/quantity_discounts`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
quantity_discount  |  required  | Validations: |  Must be a Hash
quantity_discount[quantity]  |  required  | Quantity |  Must be a number.
quantity_discount[modifier]  |  required  | Base price / Discount percentage |  Must be a float.


## Update quantity discount

```shell
 PUT https://subdomain.mybrightsites.com/api/v1.1.1/products/1/quantity_discounts/579?token=GXzAxWkkyYLsESGQTU15 { "quantity_discount": { "modifier": 980.0 } }
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "quantity": 10, "modifier": 980.0 }
```

### HTTP Request

`PUT /api/v1.1.1/products/:product_id/quantity_discounts/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
quantity_discount  |  required  | Validations: |  Must be a Hash
quantity_discount[quantity]  |  optional  | Quantity |  Must be a number.
quantity_discount[modifier]  |  optional  | Base price / Discount percentage |  Must be a float.


## Delete quantity discount

```shell
 DELETE https://subdomain.mybrightsites.com/api/v1.1.1/products/1/quantity_discounts/579?token=GXzAxWkkyYLsESGQTU15
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "quantity": 10, "modifier": 980.0 }
```

### HTTP Request

`DELETE /api/v1.1.1/products/:product_id/quantity_discounts/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
id  |  required  | Quantity discount ID |  Must be a number.


