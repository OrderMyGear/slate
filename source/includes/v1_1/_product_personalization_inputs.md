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

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>personalization_form_id </strong></div><div> required </div> | <div>Personalization form ID</div><div> Must be a number. </div>


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

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>personalization_form_id </strong></div><div> required </div> | <div>Personalization form ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Personalization input ID</div><div> Must be a number. </div>


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

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>personalization_form_id </strong></div><div> required </div> | <div>Personalization form ID</div><div> Must be a number. </div>
<div><strong>personalization_input </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>personalization_input[label] </strong></div><div> required </div> | <div>Label</div><div> Must be a String </div>
<div><strong>personalization_input[type] </strong></div><div> required </div> | <div>Type</div><div> Must be one of: text_field, text_area. </div>
<div><strong>personalization_input[required] </strong></div><div> required </div> | <div>Required</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>personalization_input[position] </strong></div><div> required </div> | <div>Position</div><div> Must be a number. </div>


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

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>personalization_form_id </strong></div><div> required </div> | <div>Personalization form ID</div><div> Must be a number. </div>
<div><strong>personalization_input </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>personalization_input[label] </strong></div><div> optional </div> | <div>Label</div><div> Must be a String </div>
<div><strong>personalization_input[type] </strong></div><div> optional </div> | <div>Type</div><div> Must be one of: text_field, text_area. </div>
<div><strong>personalization_input[required] </strong></div><div> optional </div> | <div>Required</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>personalization_input[position] </strong></div><div> optional </div> | <div>Position</div><div> Must be a number. </div>


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

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>personalization_form_id </strong></div><div> required </div> | <div>Personalization form ID</div><div> Must be a number. </div>
<div><strong>personalization_input </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>personalization_input[label] </strong></div><div> optional </div> | <div>Label</div><div> Must be a String </div>
<div><strong>personalization_input[type] </strong></div><div> optional </div> | <div>Type</div><div> Must be one of: text_field, text_area. </div>
<div><strong>personalization_input[required] </strong></div><div> optional </div> | <div>Required</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>personalization_input[position] </strong></div><div> optional </div> | <div>Position</div><div> Must be a number. </div>


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

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>personalization_form_id </strong></div><div> required </div> | <div>Personalization form ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Personalization input ID</div><div> Must be a number. </div>


