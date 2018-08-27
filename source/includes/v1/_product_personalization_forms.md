#  Product personalization forms 

## List personalization forms

```shell
 GET https://subdomain.mybrightsites.com/api/v1/products/1/personalzation_forms?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "enabled": true, "personalization_forms": [ { "id": 579, "title": "Additional info", "price_modifier_type": "$", "price_modifier_value": 0.0, "position": "1" }, { "id": 580, "title": "Custom print", "price_modifier_type": "%", "price_modifier_value": 10.0, "position": "2" } ] } 
```

### HTTP Request

`GET /api/v1/products/:product_id/personalization_forms`



## Show personalization form

```shell
 GET https://subdomain.mybrightsites.com/api/v1/products/1/personalzation_forms/580?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 580, "title": "Custom print", "price_modifier_type": "%", "price_modifier_value": 10.0, "position": "2" } 
```

### HTTP Request

`GET /api/v1/products/:product_id/personalization_forms/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
id  |  required  | Personalization form ID |  Must be a number. 


## Create personalization form

```shell
 POST https://subdomain.mybrightsites.com/api/v1/products/1/personalization_forms?token=GXzAxWkkyYLsESGQTU15 { "personalization_form": { "title": "Custom print", "price_modifier_type": "%", "price_modifier_value": 10.0, "position": "2" } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 580, "title": "Custom print", "price_modifier_type": "%", "price_modifier_value": 10.0, "position": "2" } 
```

### HTTP Request

`POST /api/v1/products/:product_id/personalization_forms`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
personalization_form  |  required  | Validations: |  Must be a Hash 
personalization_form[title]  |  required  | Title |  Must be a String 
personalization_form[price_modifier_type]  |  required  | Price modifier type |  Must be one of: $, %. 
personalization_form[price_modifier_value]  |  required  | Price modifier value |  Must be a float. 
personalization_form[position]  |  required  | Position |  Must be a number. 


## Update personalization form

```shell
 PUT https://subdomain.mybrightsites.com/api/v1/products/1/personalzation_forms/580?token=GXzAxWkkyYLsESGQTU15 { "personalization_form": { "price_modifier_type": "$", "price_modifier_value": 5.0, "position": "3" } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 580, "title": "Custom print", "price_modifier_type": "$", "price_modifier_value": 5.0, "position": "3" } 
```

### HTTP Request

`PATCH /api/v1/products/:product_id/personalization_forms/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
personalization_form  |  required  | Validations: |  Must be a Hash 
personalization_form[title]  |  optional  | Title |  Must be a String 
personalization_form[price_modifier_type]  |  optional  | Price modifier type |  Must be one of: $, %. 
personalization_form[price_modifier_value]  |  optional  | Price modifier value |  Must be a float. 
personalization_form[position]  |  optional  | Position |  Must be a number. 


## Update personalization form

```shell
 PUT https://subdomain.mybrightsites.com/api/v1/products/1/personalzation_forms/580?token=GXzAxWkkyYLsESGQTU15 { "personalization_form": { "price_modifier_type": "$", "price_modifier_value": 5.0, "position": "3" } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 580, "title": "Custom print", "price_modifier_type": "$", "price_modifier_value": 5.0, "position": "3" } 
```

### HTTP Request

`PUT /api/v1/products/:product_id/personalization_forms/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
personalization_form  |  required  | Validations: |  Must be a Hash 
personalization_form[title]  |  optional  | Title |  Must be a String 
personalization_form[price_modifier_type]  |  optional  | Price modifier type |  Must be one of: $, %. 
personalization_form[price_modifier_value]  |  optional  | Price modifier value |  Must be a float. 
personalization_form[position]  |  optional  | Position |  Must be a number. 


## Delete personalization form

```shell
 DELETE https://subdomain.mybrightsites.com/api/v1/products/1/personalization_forms/580?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 580, "title": "Custom print", "price_modifier_type": "$", "price_modifier_value": 5.0, "position": "3" } 
```

### HTTP Request

`DELETE /api/v1/products/:product_id/personalization_forms/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
id  |  required  | Personalization form ID |  Must be a number. 


