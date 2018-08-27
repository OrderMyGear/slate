#  Product personalization inputs 

## List personalization inputs

```shell
 GET https://subdomain.mybrightsites.com/v1.1/products/1/personalization_forms/101/personalization_inputs?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "personalization_inputs": [ { "id": 579, "label": "Front print", "type": "text_field", "required": true, "position": 1 }, { "id": 580, "label": "Back print", "type": "text_area", "required": false, "position": 2 } ] } 
```

### HTTP Request

`GET /api/v1.1/products/:product_id/personalization_forms/:personalization_form_id/personalization_inputs`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
personalization_form_id  |  required  | Personalization form ID |  Must be a number. 


## Show personalization input

```shell
 GET https://subdomain.mybrightsites.com/v1.1/products/1/personalization_forms/101/personalization_inputs/579?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "label": "Front print", "type": "text_field", "required": true, "position": 1 } 
```

### HTTP Request

`GET /api/v1.1/products/:product_id/personalization_forms/:personalization_form_id/personalization_inputs/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
personalization_form_id  |  required  | Personalization form ID |  Must be a number. 
id  |  required  | Personalization input ID |  Must be a number. 


## Create personalization input

```shell
 POST https://subdomain.mybrightsites.com/v1.1/products/1/personalization_forms/101/personalization_inputs?token=GXzAxWkkyYLsESGQTU15 { "personalization_input": { "label": "Back print", "type": "text_area", "required": false, "position": 2 } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 580, "label": "Back print", "type": "text_area", "required": false, "position": 2 } 
```

### HTTP Request

`POST /api/v1.1/products/:product_id/personalization_forms/:personalization_form_id/personalization_inputs`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
personalization_form_id  |  required  | Personalization form ID |  Must be a number. 
personalization_input  |  required  | Validations: |  Must be a Hash 
personalization_input[label]  |  required  | Label |  Must be a String 
personalization_input[type]  |  required  | Type |  Must be one of: text_field, text_area. 
personalization_input[required]  |  required  | Required |  Must be one of: true, false, 1, 0 
personalization_input[position]  |  required  | Position |  Must be a number. 


## Update personalization input

```shell
 PUT https://subdomain.mybrightsites.com/v1.1/products/1/personalization_forms/101/personalization_inputs/579?token=GXzAxWkkyYLsESGQTU15 { "personalization_input": { "label": "Front left print", "required": false, "position": 3 } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "label": "Front left print", "type": "text_field", "required": false, "position": 3 } 
```

### HTTP Request

`PATCH /api/v1.1/products/:product_id/personalization_forms/:personalization_form_id/personalization_inputs/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
personalization_form_id  |  required  | Personalization form ID |  Must be a number. 
personalization_input  |  required  | Validations: |  Must be a Hash 
personalization_input[label]  |  optional  | Label |  Must be a String 
personalization_input[type]  |  optional  | Type |  Must be one of: text_field, text_area. 
personalization_input[required]  |  optional  | Required |  Must be one of: true, false, 1, 0 
personalization_input[position]  |  optional  | Position |  Must be a number. 


## Update personalization input

```shell
 PUT https://subdomain.mybrightsites.com/v1.1/products/1/personalization_forms/101/personalization_inputs/579?token=GXzAxWkkyYLsESGQTU15 { "personalization_input": { "label": "Front left print", "required": false, "position": 3 } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "label": "Front left print", "type": "text_field", "required": false, "position": 3 } 
```

### HTTP Request

`PUT /api/v1.1/products/:product_id/personalization_forms/:personalization_form_id/personalization_inputs/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
personalization_form_id  |  required  | Personalization form ID |  Must be a number. 
personalization_input  |  required  | Validations: |  Must be a Hash 
personalization_input[label]  |  optional  | Label |  Must be a String 
personalization_input[type]  |  optional  | Type |  Must be one of: text_field, text_area. 
personalization_input[required]  |  optional  | Required |  Must be one of: true, false, 1, 0 
personalization_input[position]  |  optional  | Position |  Must be a number. 


## Delete personalization input

```shell
 DELETE https://subdomain.mybrightsites.com/v1.1/products/1/personalization_forms/101/personalization_inputs/579?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "label": "Front left print", "type": "text_field", "required": false, "position": 3 } 
```

### HTTP Request

`DELETE /api/v1.1/products/:product_id/personalization_forms/:personalization_form_id/personalization_inputs/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
personalization_form_id  |  required  | Personalization form ID |  Must be a number. 
id  |  required  | Personalization input ID |  Must be a number. 


