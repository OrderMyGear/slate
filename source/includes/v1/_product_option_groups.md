#  Product option groups 

## List of option groups for product

```shell
 GET https://subdomain.mybrightsites.com/api/v1/products/22287/option_groups?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "enabled": true, "option_groups": [ { "id": 4, "name": "OptionGroup", "wrap_options": true, "option_ids": [12, 15] } ] } 
```

### HTTP Request

`GET /api/v1/products/:product_id/option_groups`



## Show option group

```shell
 GET https://subdomain.mybrightsites.com/api/v1/products/22287/option_groups/4?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 47204, "name": "OptionGroup", "wrap_options": true, "option_ids": [12, 15] } 
```

### HTTP Request

`GET /api/v1/products/:product_id/option_groups/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
id  |  required  | Group ID |  Must be a number. 


## Create group

```shell
 POST https://subdomain.mybrightsites.com/api/v1/products/22287/option_groups?token=GXzAxWkkyYLsESGQTU15 { "option_group": { "name": "OptionGroup", "wrap_options": true, "option_ids": [12, 15] } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 5, "name": "OptionGroup", "wrap_options": true, "option_ids": [12, 15] } 
```

### HTTP Request

`POST /api/v1/products/:product_id/option_groups`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
option_group  |  required  | Validations: |  Must be a Hash 
option_group[name]  |  required  | Name of option group |  Must be a String 
option_group[wrap_options]  |  optional , nil allowed  | Wrap options |  Must be one of: true, false, 1, 0 
option_group[option_ids]  |  optional , nil allowed  | Wrap options |  Must be an Array of Integer 


## Update group

```shell
 PUT https://subdomain.mybrightsites.com/api/v1/products/22287/option_groups/5?token=GXzAxWkkyYLsESGQTU15 { "option_group": { "name": "OptionGroup2", "option_ids": [12] } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 5, "name": "OptionGroup2", "wrap_options": true, "option_ids": [12] } 
```

### HTTP Request

`PATCH /api/v1/products/:product_id/option_groups/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
option_group  |  required  | Validations: |  Must be a Hash 
option_group[name]  |  optional  | Name of option group |  Must be a String 
option_group[wrap_options]  |  optional , nil allowed  | Wrap options |  Must be one of: true, false, 1, 0 
option_group[option_ids]  |  optional , nil allowed  | Wrap options |  Must be an Array of Integer 


## Update group

```shell
 PUT https://subdomain.mybrightsites.com/api/v1/products/22287/option_groups/5?token=GXzAxWkkyYLsESGQTU15 { "option_group": { "name": "OptionGroup2", "option_ids": [12] } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 5, "name": "OptionGroup2", "wrap_options": true, "option_ids": [12] } 
```

### HTTP Request

`PUT /api/v1/products/:product_id/option_groups/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
option_group  |  required  | Validations: |  Must be a Hash 
option_group[name]  |  optional  | Name of option group |  Must be a String 
option_group[wrap_options]  |  optional , nil allowed  | Wrap options |  Must be one of: true, false, 1, 0 
option_group[option_ids]  |  optional , nil allowed  | Wrap options |  Must be an Array of Integer 


## Delete group

```shell
 DELETE https://subdomain.mybrightsites.com/api/v1/products/22287/option_groups/5?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 5, "name": "OptionGroup2", "wrap_options": true, "option_ids": [] } 
```

### HTTP Request

`DELETE /api/v1/products/:product_id/option_groups/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
id  |  required  | Group ID |  Must be a number. 


