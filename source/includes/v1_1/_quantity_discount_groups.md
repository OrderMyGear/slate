#  Quantity discount groups 

## List of quantity discount groups

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1/products/1/quantity_discount_groups?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "enabled": true, "quantity_discount_groups": [ { id: 123, name: 'Default', type: 'fixed_price' product_options: [ { product_option_id: 1234, sub_option_ids: [432, 654] }, { product_option_id: 4443, sub_option_ids: [985, 765] } ], discounts: [ { "quantity": 10, "modifier": 10.0 }, { "quantity": 20, "modifier": 8.0 } ] } ] } 
```

### HTTP Request

`GET /api/v1.1/products/:product_id/quantity_discount_groups`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 


## Show quantity discount group

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1/products/1/quantity_discounts/579?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { id: 123, name: 'Default', type: 'fixed_price' product_options: [ { product_option_id: 1234, sub_option_ids: [432, 654] }, { product_option_id: 4443, sub_option_ids: [985, 765] } ], discounts: [ { "quantity": 10, "modifier": 10.0 }, { "quantity": 20, "modifier": 8.0 } ] } 
```

### HTTP Request

`GET /api/v1.1/products/:product_id/quantity_discount_groups/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
id  |  required  | Quantity discount ID |  Must be a number. 


## Create quantity discount group

```shell
 POST https://subdomain.mybrightsites.com/api/v1.1/products/1/quantity_discount_groups?token=GXzAxWkkyYLsESGQTU15 { "quantity_discount_group": { "type": "percentage", "name": "apitest", "product_options": [ { "product_option_id": 85315, "sub_option_ids": [ 733287, 733292 ] }, { "product_option_id": 85359, "sub_option_ids": [ 733525, 733530 ] } ], "discounts": [ { "quantity": 10, "modifier": "10.0" }, { "quantity": 20, "modifier": "15.0" } ] } } 
```

> The above request returns JSON structured like this:

```json
 { "type": "percentage", "id": 579, "name": "apitest", "product_options": [ { "product_option_id": 85315, "sub_option_ids": [ 733287, 733292 ] }, { "product_option_id": 85359, "sub_option_ids": [ 733525, 733530 ] } ], "discounts": [ { "quantity": 10, "modifier": "10.0" }, { "quantity": 20, "modifier": "15.0" } ] } 
```

### HTTP Request

`POST /api/v1.1/products/:product_id/quantity_discount_groups`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
quantity_discount_group  |  required  | Validations: |  Must be a Hash 
quantity_discount_group[name]  |  required  | Validations: |  Must be a String 
quantity_discount_group[type]  |  required  | Type |  Must be one of: percentage, fixed_price. 
quantity_discount_group[product_options]  |  optional , nil allowed  | Validations: |  Must be an Array of nested elements 
quantity_discount_group[product_options][product_option_id]  |  required  | Validations: |  Must be a number. 
quantity_discount_group[product_options][sub_option_ids]  |  required  | Validations: |  Must be an Array of Integer 
quantity_discount_group[discounts]  |  optional , nil allowed  | Validations: |  Must be an Array of nested elements 
quantity_discount_group[discounts][quantity]  |  optional , nil allowed  | Validations: |  Must be a number. 
quantity_discount_group[discounts][modifier]  |  optional , nil allowed  | Validations: |  Must be a float. 


## Update quantity discount group

```shell
 PUT https://subdomain.mybrightsites.com/api/v1.1/products/1/quantity_discounts/579?token=GXzAxWkkyYLsESGQTU15 { "quantity_discount_group": { "name": "apitest2" } } 
```

> The above request returns JSON structured like this:

```json
 { "type": "percentage", "id": 579, "name": "apitest2", "product_options": [ { "product_option_id": 85315, "sub_option_ids": [ 733287, 733292 ] }, { "product_option_id": 85359, "sub_option_ids": [ 733525, 733530 ] } ], "discounts": [ { "quantity": 10, "modifier": "10.0" }, { "quantity": 20, "modifier": "15.0" } ] } 
```

### HTTP Request

`PATCH /api/v1.1/products/:product_id/quantity_discount_groups/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
quantity_discount_group  |  required  | Validations: |  Must be a Hash 
quantity_discount_group[name]  |  optional  | Validations: |  Must be a String 
quantity_discount_group[type]  |  optional  | Type |  Must be one of: percentage, fixed_price. 
quantity_discount_group[product_options]  |  optional , nil allowed  | Validations: |  Must be an Array of nested elements 
quantity_discount_group[product_options][product_option_id]  |  optional  | Validations: |  Must be a number. 
quantity_discount_group[product_options][sub_option_ids]  |  optional  | Validations: |  Must be an Array of Integer 
quantity_discount_group[discounts]  |  optional , nil allowed  | Validations: |  Must be an Array of nested elements 
quantity_discount_group[discounts][quantity]  |  optional , nil allowed  | Validations: |  Must be a number. 
quantity_discount_group[discounts][modifier]  |  optional , nil allowed  | Validations: |  Must be a float. 


## Update quantity discount group

```shell
 PUT https://subdomain.mybrightsites.com/api/v1.1/products/1/quantity_discounts/579?token=GXzAxWkkyYLsESGQTU15 { "quantity_discount_group": { "name": "apitest2" } } 
```

> The above request returns JSON structured like this:

```json
 { "type": "percentage", "id": 579, "name": "apitest2", "product_options": [ { "product_option_id": 85315, "sub_option_ids": [ 733287, 733292 ] }, { "product_option_id": 85359, "sub_option_ids": [ 733525, 733530 ] } ], "discounts": [ { "quantity": 10, "modifier": "10.0" }, { "quantity": 20, "modifier": "15.0" } ] } 
```

### HTTP Request

`PUT /api/v1.1/products/:product_id/quantity_discount_groups/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
quantity_discount_group  |  required  | Validations: |  Must be a Hash 
quantity_discount_group[name]  |  optional  | Validations: |  Must be a String 
quantity_discount_group[type]  |  optional  | Type |  Must be one of: percentage, fixed_price. 
quantity_discount_group[product_options]  |  optional , nil allowed  | Validations: |  Must be an Array of nested elements 
quantity_discount_group[product_options][product_option_id]  |  optional  | Validations: |  Must be a number. 
quantity_discount_group[product_options][sub_option_ids]  |  optional  | Validations: |  Must be an Array of Integer 
quantity_discount_group[discounts]  |  optional , nil allowed  | Validations: |  Must be an Array of nested elements 
quantity_discount_group[discounts][quantity]  |  optional , nil allowed  | Validations: |  Must be a number. 
quantity_discount_group[discounts][modifier]  |  optional , nil allowed  | Validations: |  Must be a float. 


## Delete quantity discount group

```shell
 DELETE https://subdomain.mybrightsites.com/api/v1.1/products/1/quantity_discounts/579?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "type": "percentage", "id": 579, "name": "apitest", "product_options": [], "discounts": [] } 
```

### HTTP Request

`DELETE /api/v1.1/products/:product_id/quantity_discount_groups/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
id  |  required  | Quantity discount group ID |  Must be a number. 


