#  Product logo locations 

## List of logo locations for a product

```shell
 GET https://subdomain.mybrightsites.com/api/v1/products/22287/logo_locations?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "enabled": true, "logo_locations": [ { "id": 1, "name": "Right Chest", "enabled": true, "required": true, "chargable": true } ] } 
```

### HTTP Request

`GET /api/v1/products/:product_id/logo_locations`



## Update logo location

```shell
 PUT https://subdomain.mybrightsites.com/api/v1/products/22287/logo_locations/1?token=GXzAxWkkyYLsESGQTU15 { "logo_location": { "enabled": true, "required": true, "chargable": false } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 1, "name": "Right Chest", "enabled": true, "required": true, "chargable": false } 
```

### HTTP Request

`PATCH /api/v1/products/:product_id/logo_locations/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
logo_location  |  required  | Validations: |  Must be a Hash 
logo_location[enabled]  |  optional  | Enable location |  Must be one of: true, false, 1, 0 
logo_location[required]  |  optional  | Logo is required for this location |  Must be one of: true, false, 1, 0 
logo_location[charge]  |  optional  | Allow charge for a logo |  Must be one of: true, false, 1, 0 


## Update logo location

```shell
 PUT https://subdomain.mybrightsites.com/api/v1/products/22287/logo_locations/1?token=GXzAxWkkyYLsESGQTU15 { "logo_location": { "enabled": true, "required": true, "chargable": false } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 1, "name": "Right Chest", "enabled": true, "required": true, "chargable": false } 
```

### HTTP Request

`PUT /api/v1/products/:product_id/logo_locations/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
logo_location  |  required  | Validations: |  Must be a Hash 
logo_location[enabled]  |  optional  | Enable location |  Must be one of: true, false, 1, 0 
logo_location[required]  |  optional  | Logo is required for this location |  Must be one of: true, false, 1, 0 
logo_location[charge]  |  optional  | Allow charge for a logo |  Must be one of: true, false, 1, 0 


