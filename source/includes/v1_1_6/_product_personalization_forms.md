#  Product personalization forms

## List personalization forms

List out all personalization forms for a specific product based on the product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.6/products/1/personalzation_forms?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "enabled": true,
  "personalization_forms": [
    {
      "id": 579,
      "title": "Additional info",
      "price_modifier_type": "$",
      "price_modifier_value": 0.0,
      "position": "1"
    },
    {
      "id": 580,
      "title": "Custom print",
      "price_modifier_type": "%",
      "price_modifier_value": 10.0,
      "position": "2"
    }
  ]
}
```

### HTTP Request

`GET /api/v1.1.6/products/:product_id/personalization_forms`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>


## Show personalization form

Show a specific product personalization form based on the personalization ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.6/products/1/personalzation_forms/580?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "id": 580,
  "title": "Custom print",
  "price_modifier_type": "%",
  "price_modifier_value": 10.0,
  "position": "2"
}
```

### HTTP Request

`GET /api/v1.1.6/products/:product_id/personalization_forms/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Personalization form ID</div><div> Must be a number. </div>


## Create personalization form

Create a product personalization form for a specific product based on the product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.6/products/1/personalization_forms?token=GXzAxWkkyYLsESGQTU15" \
  -X POST \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "personalization_form": {
    "title": "Custom print",
    "price_modifier_type": "%",
    "price_modifier_value": 10.0,
    "position": "2"
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 580,
  "title": "Custom print",
  "price_modifier_type": "%",
  "price_modifier_value": 10.0,
  "position": "2"
}
```

### HTTP Request

`POST /api/v1.1.6/products/:product_id/personalization_forms`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>personalization_form </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>personalization_form[title] </strong></div><div> required </div> | <div>Title</div><div> Must be a String </div>
<div><strong>personalization_form[price_modifier_type] </strong></div><div> required </div> | <div>Price modifier type</div><div> Must be one of: $, %. </div>
<div><strong>personalization_form[price_modifier_value] </strong></div><div> required </div> | <div>Price modifier value</div><div> Must be a float. </div>
<div><strong>personalization_form[position] </strong></div><div> required </div> | <div>Position</div><div> Must be a number. </div>


## Update personalization form

Update a specific product personalization form assigned to a product based on the personalization form ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.6/products/1/personalzation_forms/580?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "personalization_form": {
    "price_modifier_type": "$",
    "price_modifier_value": 5.0,
    "position": "3"
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 580,
  "title": "Custom print",
  "price_modifier_type": "$",
  "price_modifier_value": 5.0,
  "position": "3"
}
```

### HTTP Request

`PUT /api/v1.1.6/products/:product_id/personalization_forms/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Personalization form ID</div><div> Must be a number. </div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>personalization_form </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>personalization_form[title] </strong></div><div> required </div> | <div>Title</div><div> Must be a String </div>
<div><strong>personalization_form[price_modifier_type] </strong></div><div> required </div> | <div>Price modifier type</div><div> Must be one of: $, %. </div>
<div><strong>personalization_form[price_modifier_value] </strong></div><div> required </div> | <div>Price modifier value</div><div> Must be a float. </div>
<div><strong>personalization_form[position] </strong></div><div> required </div> | <div>Position</div><div> Must be a number. </div>


## Delete personalization form

Delete a personalization form from a product based on the personalization form ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.6/products/1/personalization_forms/580?token=GXzAxWkkyYLsESGQTU15" \
  -X DELETE
```

> The above request returns JSON structured like this:

```json
{
  "id": 580,
  "title": "Custom print",
  "price_modifier_type": "$",
  "price_modifier_value": 5.0,
  "position": "3"
}
```

### HTTP Request

`DELETE /api/v1.1.6/products/:product_id/personalization_forms/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Personalization form ID</div><div> Must be a number. </div>
