#  Product decoration methods 

## List of decoration methods for a product

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1/products/22287/decoration_methods?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "enabled": true, "decoration_methods": [ { "id": 1, "name": "Sublimation", "enabled": true } ] } 
```

### HTTP Request

`GET /api/v1.1/products/:product_id/decoration_methods`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 


## Update decoration method

```shell
 PUT https://subdomain.mybrightsites.com/api/v1.1/products/22287/decoration_methods/1?token=GXzAxWkkyYLsESGQTU15 { "decoration_method": { "enabled": true } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 1, "name": "Sublimation", "enabled": true } 
```

### HTTP Request

`PATCH /api/v1.1/products/:product_id/decoration_methods/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
decoration_method  |  required  | Validations: |  Must be a Hash 
decoration_method[enabled]  |  optional  | Enable decoration method |  Must be one of: true, false, 1, 0 


## Update decoration method

```shell
 PUT https://subdomain.mybrightsites.com/api/v1.1/products/22287/decoration_methods/1?token=GXzAxWkkyYLsESGQTU15 { "decoration_method": { "enabled": true } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 1, "name": "Sublimation", "enabled": true } 
```

### HTTP Request

`PUT /api/v1.1/products/:product_id/decoration_methods/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
decoration_method  |  required  | Validations: |  Must be a Hash 
decoration_method[enabled]  |  optional  | Enable decoration method |  Must be one of: true, false, 1, 0 


