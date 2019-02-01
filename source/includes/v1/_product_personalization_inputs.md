#  Product personalization inputs

## List all personalization inputs for a specific personalization form ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1/products/1/personalization_forms/101/personalization_inputs?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "personalization_inputs": [
    {
      "id": 579,
      "label": "Front print",
      "type": "text_field",
      "required": true,
      "position": 1
    },
    {
      "id": 580,
      "label": "Back print",
      "type": "text_area",
      "required": false,
      "position": 2
    }
  ]
}
```

### HTTP Request

`GET /api/v1/products/:product_id/personalization_forms/:personalization_form_id/personalization_inputs`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>personalization_form_id </strong></div><div> required </div> | <div>Personalization form ID</div><div> Must be a number. </div>

## Show a specific product personalization input based on the personalization input ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1/products/1/personalization_forms/101/personalization_inputs/579?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "label": "Front print",
  "type": "text_field",
  "required": true,
  "position": 1
}
```

### HTTP Request

`GET /api/v1/products/:product_id/personalization_forms/:personalization_form_id/personalization_inputs/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>personalization_form_id </strong></div><div> required </div> | <div>Personalization form ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Personalization input ID</div><div> Must be a number. </div>


## Create a product personalization input for a specific personalization form based on the form ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1/products/1/personalization_forms/101/personalization_inputs?token=GXzAxWkkyYLsESGQTU15" \
  -X POST \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "personalization_input": {
    "label": "Back print",
    "type": "text_area",
    "required": false,
    "position": 2
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 580,
  "label": "Back print",
  "type": "text_area",
  "required": false,
  "position": 2
}
```

### HTTP Request

`POST /api/v1/products/:product_id/personalization_forms/:personalization_form_id/personalization_inputs`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>personalization_form_id </strong></div><div> required </div> | <div>Personalization form ID</div><div> Must be a number. </div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>personalization_input </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>personalization_input[label] </strong></div><div> required </div> | <div>Label</div><div> Must be a String </div>
<div><strong>personalization_input[type] </strong></div><div> required </div> | <div>Type</div><div> Must be one of: text_field, text_area. </div>
<div><strong>personalization_input[required] </strong></div><div> required </div> | <div>Required</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>personalization_input[position] </strong></div><div> required </div> | <div>Position</div><div> Must be a number. </div>


## Update a specific product personalization input for a specific personalization input ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1/products/1/personalization_forms/101/personalization_inputs/579?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "personalization_input": {
    "label": "Front left print",
    "required": false,
    "position": 3
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "label": "Front left print",
  "type": "text_field",
  "required": false,
  "position": 3
}
```

### HTTP Request

`PUT /api/v1/products/:product_id/personalization_forms/:personalization_form_id/personalization_inputs/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>personalization_form_id </strong></div><div> required </div> | <div>Personalization form ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Personalization input ID</div><div> Must be a number. </div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>personalization_input </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>personalization_input[label] </strong></div><div> optional </div> | <div>Label</div><div> Must be a String </div>
<div><strong>personalization_input[type] </strong></div><div> optional </div> | <div>Type</div><div> Must be one of: text_field, text_area. </div>
<div><strong>personalization_input[required] </strong></div><div> optional </div> | <div>Required</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>personalization_input[position] </strong></div><div> optional </div> | <div>Position</div><div> Must be a number. </div>


## Delete a specific product personalization input for a specific personalization input ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1/products/1/personalization_forms/101/personalization_inputs/579?token=GXzAxWkkyYLsESGQTU15" \
  -X DELETE
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "label": "Front left print",
  "type": "text_field",
  "required": false,
  "position": 3
}
```

### HTTP Request

`DELETE /api/v1/products/:product_id/personalization_forms/:personalization_form_id/personalization_inputs/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>personalization_form_id </strong></div><div> required </div> | <div>Personalization form ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Personalization input ID</div><div> Must be a number. </div>


