#  Product inventories 

## List of inventories for product

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1/products/22287/inventories?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "enabled": true, "inventories": [ { "id": 774, "inventory": 23, "trigger": 6, "track": false, "allow_negative": false, "sub_sku": "S-Green", "sub_option_ids": [ 556255, 556155 ] } ] } 
```

### HTTP Request

`GET /api/v1.1/products/:product_id/inventories`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 


## Show inventories

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1/products/22287/inventories/774?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 774, "inventory": 23, "trigger": 6, "track": false, "allow_negative": false, "sub_sku": "S-Green", "sub_option_ids": [ 556255, 556155 ] } 
```

### HTTP Request

`GET /api/v1.1/products/:product_id/inventories/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
id  |  required  | Inventory ID |  Must be a number. 


## Create inventory

### HTTP Request

`POST /api/v1.1/products/:product_id/inventories`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
inventory  |  required  | Validations: |  Must be a Hash 
inventory[sub_option_ids]  |  optional , nil allowed  | Array of sub_option ids. It can be blank if there are no options for this product |  Must be an array of any type 
inventory[inventory]  |  required  | Available inventories |  Must be a number. 
inventory[trigger]  |  required  | Notify when inventories are low |  Must be a number. 
inventory[track]  |  required  | Validations: |  Must be one of: true, false, 1, 0 
inventory[allow_negative]  |  required  | Allow negative value of inventories |  Must be one of: true, false, 1, 0 


## Update inventory

```shell
 PUT https://subdomain.mybrightsites.com/api/v1.1/products/22287/inventories/774?token=GXzAxWkkyYLsESGQTU15 { "inventory": { "inventory": 25 } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 774, "inventory": 25, "trigger": 6, "track": false, "allow_negative": false, "sub_sku": "S-Red", "sub_option_ids": [ 556255, 556156 ] } 
```

### HTTP Request

`PATCH /api/v1.1/products/:product_id/inventories/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
inventory  |  required  | Validations: |  Must be a Hash 
inventory[inventory]  |  optional  | Available inventories |  Must be a number. 
inventory[trigger]  |  optional  | Notify when inventories are low |  Must be a number. 
inventory[track]  |  optional  | Validations: |  Must be one of: true, false, 1, 0 
inventory[allow_negative]  |  optional  | Allow negative value of inventories |  Must be one of: true, false, 1, 0 


## Update inventory

```shell
 PUT https://subdomain.mybrightsites.com/api/v1.1/products/22287/inventories/774?token=GXzAxWkkyYLsESGQTU15 { "inventory": { "inventory": 25 } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 774, "inventory": 25, "trigger": 6, "track": false, "allow_negative": false, "sub_sku": "S-Red", "sub_option_ids": [ 556255, 556156 ] } 
```

### HTTP Request

`PUT /api/v1.1/products/:product_id/inventories/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
inventory  |  required  | Validations: |  Must be a Hash 
inventory[inventory]  |  optional  | Available inventories |  Must be a number. 
inventory[trigger]  |  optional  | Notify when inventories are low |  Must be a number. 
inventory[track]  |  optional  | Validations: |  Must be one of: true, false, 1, 0 
inventory[allow_negative]  |  optional  | Allow negative value of inventories |  Must be one of: true, false, 1, 0 


## Delete inventory

```shell
 DELETE https://subdomain.mybrightsites.com/api/v1.1/products/22287/inventories/774?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 774, "inventory": 25, "trigger": 6, "track": false, "allow_negative": false, "sub_sku": "S-Red", "sub_option_ids": [ 556255, 556156 ] } 
```

### HTTP Request

`DELETE /api/v1.1/products/:product_id/inventories/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
id  |  required  | Inventory ID |  Must be a number. 


