#  Product options 

## List of options for product

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1/products/22287/options?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "enabled": true, "options": [ { "id": 47204, "name": "size", "friendly_name": "Size", "option_type": "size", "price_modifier_type": "$", "show_in_inventory": true, "show_as_thumbs": false, "include_in_images": false, "required": false, "multiple_quantity": false, "position": 1 } ] } 
```

### HTTP Request

`GET /api/v1.1/products/:product_id/options`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 


## Show option

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1/products/22287/options/47204?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 47204, "name": "size", "friendly_name": "Size", "option_type": "size", "price_modifier_type": "$", "show_in_inventory": true, "show_as_thumbs": false, "include_in_images": false, "required": false, "multiple_quantity": false, "position": 1 } 
```

### HTTP Request

`GET /api/v1.1/products/:product_id/options/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
id  |  required  | Option ID |  Must be a number. 


## Create option

```shell
 POST https://subdomain.mybrightsites.com/api/v1.1/products/22287/options?token=GXzAxWkkyYLsESGQTU15 { "option": { "name": "size", "friendly_name": "Size", "option_type": "size", "price_modifier_type": "$", "show_in_inventory": true, "show_as_thumbs": false, "include_in_images": false, "required": true, "multiple_quantity": true, "position": 2 } } 
```

> The above request returns JSON structured like this:

```json
 { "option": { "id": 47204, "name": "size", "friendly_name": "Size", "option_type": "size", "price_modifier_type": "$", "show_in_inventory": true, "show_as_thumbs": false, "include_in_images": false, "required": true, "multiple_quantity": true, "position": 2 } } 
```

### HTTP Request

`POST /api/v1.1/products/:product_id/options`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
option  |  required  | Validations: |  Must be a Hash 
option[name]  |  required  | Name of option |  Must be a String 
option[friendly_name]  |  optional , nil allowed  | Friendly name |  Must be a String 
option[option_type]  |  optional , nil allowed  | Product Option Type (general, size, color) |  Must be one of: general, size, color. 
option[price_modifier_type]  |  required  | Price Modifier Type (“$” or “%”) |  Must be one of: %, $. 
option[show_in_inventory]  |  optional , nil allowed  | Add ability to create an inventory for option |  Must be one of: true, false, 1, 0 
option[show_as_thumbs]  |  optional , nil allowed  | Display option as thumbnails |  Must be one of: true, false, 1, 0 
option[include_in_images]  |  optional , nil allowed  | Display sub option images on the storefront |  Must be one of: true, false, 1, 0 
option[required]  |  optional , nil allowed  | Required |  Must be one of: true, false, 1, 0 
option[multiple_quantity]  |  optional , nil allowed  | Multiple quantity |  Must be one of: true, false, 1, 0 
option[position]  |  optional , nil allowed  | Position of order |  Must be a number. 


## Update option

```shell
 PUT https://subdomain.mybrightsites.com/api/v1.1/products/22287/options/47204?token=GXzAxWkkyYLsESGQTU15 { "option": { "name": "color", "option_type": "color", "price_modifier_type": "$", "show_in_inventory": true, "required": false, "multiple_quantity": false, } } 
```

> The above request returns JSON structured like this:

```json
 { "option": { "id": 47204, "name": "color", "friendly_name": "Size", "option_type": "color", "price_modifier_type": "$", "show_in_inventory": true, "show_as_thumbs": true, "include_in_images": false, "required": false, "multiple_quantity": false, "position": 2 } } 
```

### HTTP Request

`PATCH /api/v1.1/products/:product_id/options/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
option  |  required  | Validations: |  Must be a Hash 
option[name]  |  optional  | Name of option |  Must be a String 
option[friendly_name]  |  optional , nil allowed  | Friendly name |  Must be a String 
option[option_type]  |  optional , nil allowed  | Product Option Type (general, size, color) |  Must be one of: general, size, color. 
option[price_modifier_type]  |  optional  | Price Modifier Type (“$” or “%”) |  Must be one of: %, $. 
option[show_in_inventory]  |  optional , nil allowed  | Add ability to create an inventory for option |  Must be one of: true, false, 1, 0 
option[show_as_thumbs]  |  optional , nil allowed  | Display option as thumbnails |  Must be one of: true, false, 1, 0 
option[include_in_images]  |  optional , nil allowed  | Display sub option images on the storefront |  Must be one of: true, false, 1, 0 
option[required]  |  optional , nil allowed  | Required |  Must be one of: true, false, 1, 0 
option[multiple_quantity]  |  optional , nil allowed  | Multiple quantity |  Must be one of: true, false, 1, 0 
option[position]  |  optional , nil allowed  | Position of order |  Must be a number. 


## Update option

```shell
 PUT https://subdomain.mybrightsites.com/api/v1.1/products/22287/options/47204?token=GXzAxWkkyYLsESGQTU15 { "option": { "name": "color", "option_type": "color", "price_modifier_type": "$", "show_in_inventory": true, "required": false, "multiple_quantity": false, } } 
```

> The above request returns JSON structured like this:

```json
 { "option": { "id": 47204, "name": "color", "friendly_name": "Size", "option_type": "color", "price_modifier_type": "$", "show_in_inventory": true, "show_as_thumbs": true, "include_in_images": false, "required": false, "multiple_quantity": false, "position": 2 } } 
```

### HTTP Request

`PUT /api/v1.1/products/:product_id/options/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
option  |  required  | Validations: |  Must be a Hash 
option[name]  |  optional  | Name of option |  Must be a String 
option[friendly_name]  |  optional , nil allowed  | Friendly name |  Must be a String 
option[option_type]  |  optional , nil allowed  | Product Option Type (general, size, color) |  Must be one of: general, size, color. 
option[price_modifier_type]  |  optional  | Price Modifier Type (“$” or “%”) |  Must be one of: %, $. 
option[show_in_inventory]  |  optional , nil allowed  | Add ability to create an inventory for option |  Must be one of: true, false, 1, 0 
option[show_as_thumbs]  |  optional , nil allowed  | Display option as thumbnails |  Must be one of: true, false, 1, 0 
option[include_in_images]  |  optional , nil allowed  | Display sub option images on the storefront |  Must be one of: true, false, 1, 0 
option[required]  |  optional , nil allowed  | Required |  Must be one of: true, false, 1, 0 
option[multiple_quantity]  |  optional , nil allowed  | Multiple quantity |  Must be one of: true, false, 1, 0 
option[position]  |  optional , nil allowed  | Position of order |  Must be a number. 


## Delete option

```shell
 DELETE https://subdomain.mybrightsites.com/api/v1.1/products/22287/options/47204?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "option": { "id": 47204, "name": "color", "friendly_name": "Size", "option_type": "color", "price_modifier_type": "$", "show_in_inventory": true, "show_as_thumbs": false, "include_in_images": false, "required": false, "multiple_quantity": false, "position": 2 } } 
```

### HTTP Request

`DELETE /api/v1.1/products/:product_id/options/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
id  |  required  | Option ID |  Must be a number. 


