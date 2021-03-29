#  Product options

## List of options for product

List all product options based on a product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.5/products/22287/options?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "enabled": true,
  "options": [
    {
      "id": 47204,
      "name": "size",
      "friendly_name": "Size",
      "option_type": "size",
      "price_modifier_type": "$",
      "show_in_inventory": true,
      "show_as_thumbs": false,
      "include_in_images": false,
      "required": false,
      "multiple_quantity": false,
      "position": 1
    }
  ]
}
```

### HTTP Request

`GET /api/v1.1.5/products/:product_id/options`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>


## Show option

Show a specific product option based on the option ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.5/products/22287/options/47204?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "id": 47204,
  "name": "size",
  "friendly_name": "Size",
  "option_type": "size",
  "price_modifier_type": "$",
  "show_in_inventory": true,
  "show_as_thumbs": false,
  "include_in_images": false,
  "required": false,
  "multiple_quantity": false,
  "position": 1
}
```

### HTTP Request

`GET /api/v1.1.5/products/:product_id/options/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Option ID</div><div> Must be a number. </div>


## Create option

Create a product option for a specific product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.5/products/22287/options?token=GXzAxWkkyYLsESGQTU15" \
  -X POST \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "option": {
    "name": "size",
    "friendly_name": "Size",
    "option_type": "size",
    "price_modifier_type": "$",
    "show_in_inventory": true,
    "show_as_thumbs": false,
    "include_in_images": false,
    "required": true,
    "multiple_quantity": true,
    "position": 2
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "option": {
    "id": 47204,
    "name": "size",
    "friendly_name": "Size",
    "option_type": "size",
    "price_modifier_type": "$",
    "show_in_inventory": true,
    "show_as_thumbs": false,
    "include_in_images": false,
    "required": true,
    "multiple_quantity": true,
    "position": 2
  }
}
```

### HTTP Request

`POST /api/v1.1.5/products/:product_id/options`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>option </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>option[name] </strong></div><div> required </div> | <div>Name of option</div><div> Must be a String </div>
<div><strong>option[friendly_name] </strong></div><div> optional , nil allowed </div> | <div>Friendly name</div><div> Must be a String </div>
<div><strong>option[option_type] </strong></div><div> optional , nil allowed </div> | <div>Product Option Type (general, size, color)</div><div> Must be one of: general, size, color. </div>
<div><strong>option[price_modifier_type] </strong></div><div> required </div> | <div>Price Modifier Type (“$” or “%”)</div><div> Must be one of: %, $. </div>
<div><strong>option[show_in_inventory] </strong></div><div> optional , nil allowed </div> | <div>Add ability to create an inventory for option</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>option[show_as_thumbs] </strong></div><div> optional , nil allowed </div> | <div>Display option as thumbnails</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>option[include_in_images] </strong></div><div> optional , nil allowed </div> | <div>Display sub option images on the storefront</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>option[required] </strong></div><div> optional , nil allowed </div> | <div>Required</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>option[multiple_quantity] </strong></div><div> optional , nil allowed </div> | <div>Multiple quantity</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>option[position] </strong></div><div> optional , nil allowed </div> | <div>Position of order</div><div> Must be a number. </div>


## Update option

Update a specific product option based on the option ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.5/products/22287/options/47204?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "option": {
    "name": "color",
    "option_type": "color",
    "price_modifier_type": "$",
    "show_in_inventory": true,
    "required": false,
    "multiple_quantity": false,
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "option": {
    "id": 47204,
    "name": "color",
    "friendly_name": "Size",
    "option_type": "color",
    "price_modifier_type": "$",
    "show_in_inventory": true,
    "show_as_thumbs": true,
    "include_in_images": false,
    "required": false,
    "multiple_quantity": false,
    "position": 2
  }
}
```

### HTTP Request

`PUT /api/v1.1.5/products/:product_id/options/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Option ID</div><div> Must be a number. </div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>option </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>option[name] </strong></div><div> optional </div> | <div>Name of option</div><div> Must be a String </div>
<div><strong>option[friendly_name] </strong></div><div> optional , nil allowed </div> | <div>Friendly name</div><div> Must be a String </div>
<div><strong>option[option_type] </strong></div><div> optional , nil allowed </div> | <div>Product Option Type (general, size, color)</div><div> Must be one of: general, size, color. </div>
<div><strong>option[price_modifier_type] </strong></div><div> optional </div> | <div>Price Modifier Type (“$” or “%”)</div><div> Must be one of: %, $. </div>
<div><strong>option[show_in_inventory] </strong></div><div> optional , nil allowed </div> | <div>Add ability to create an inventory for option</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>option[show_as_thumbs] </strong></div><div> optional , nil allowed </div> | <div>Display option as thumbnails</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>option[include_in_images] </strong></div><div> optional , nil allowed </div> | <div>Display sub option images on the storefront</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>option[required] </strong></div><div> optional , nil allowed </div> | <div>Required</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>option[multiple_quantity] </strong></div><div> optional , nil allowed </div> | <div>Multiple quantity</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>option[position] </strong></div><div> optional , nil allowed </div> | <div>Position of order</div><div> Must be a number. </div>


## Delete option

Delete a specific product option from a product based on the option ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.5/products/22287/options/47204?token=GXzAxWkkyYLsESGQTU15" \
  -X DELETE
```

> The above request returns JSON structured like this:

```json
{
  "option": {
    "id": 47204,
    "name": "color",
    "friendly_name": "Size",
    "option_type": "color",
    "price_modifier_type": "$",
    "show_in_inventory": true,
    "show_as_thumbs": false,
    "include_in_images": false,
    "required": false,
    "multiple_quantity": false,
    "position": 2
  }
}
```

### HTTP Request

`DELETE /api/v1.1.5/products/:product_id/options/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Option ID</div><div> Must be a number. </div>
