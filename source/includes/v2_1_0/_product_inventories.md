#  Product inventories

## List of inventories for product

List all inventory levels and their corresponding IDs based on a product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.1.0/products/22287/inventories?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "enabled": true,
  "inventories": [
    {
      "id": 774,
      "inventory": 23,
      "trigger": 6,
      "track": false,
      "allow_negative": false,
      "sub_sku": "S-Green",
      "sub_option_ids": [
        556255,
        556155
      ]
    }
  ]
}
```

### HTTP Request

`GET /api/v2.1.0/products/:product_id/inventories`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>


## Show inventories

Show the individual inventory level for a specific inventory ID you provide.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.1.0/products/22287/inventories/774?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "id": 774,
  "inventory": 23,
  "trigger": 6,
  "track": false,
  "allow_negative": false,
  "sub_sku": "S-Green",
  "sub_option_ids": [
    556255,
    556155
  ]
}
```

### HTTP Request

`GET /api/v2.1.0/products/:product_id/inventories/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Inventory ID</div><div>Must be a number</div>


## Create inventory

Create inventory levels based on a product ID you supply.

This API call will be removed in early Q1 of 2023. The creation/deletion of inventory levels will be automatically handled based on the product sub-options (e.g. Colors and Sizes) added to an item. This is to make inventory levels generation much easier to do and manage.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.1.0/products/22287/inventories?token=GXzAxWkkyYLsESGQTU15" \
  -X POST \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "inventory": {
    "sub_option_ids": [
      556255,
      556156
    ],
    "inventory": 25,
    "trigger": 5,
    "track": false,
    "allow_negative": false
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 773,
  "inventory": 25,
  "trigger": 5,
  "track": false,
  "allow_negative": false,
  "sub_sku": "S-Red",
  "sub_option_ids": [
    556255,
    556156
  ]
}
```

### HTTP Request

`POST /api/v2.1.0/products/:product_id/inventories`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>inventory </strong></div><div>required</div> | <div>Must be a Hash</div>
<div><strong>inventory[sub_option_ids] </strong></div><div>optional</div> | <div>Array of sub_option ids. It can be blank if there are no options for this product</div><div>Must be an Array of Integer</div>
<div><strong>inventory[inventory] </strong></div><div>required</div> | <div>Available inventories</div><div>Must be a number</div>
<div><strong>inventory[trigger] </strong></div><div>required</div> | <div>Notify when inventories are low</div><div>Must be a number</div>
<div><strong>inventory[track] </strong></div><div>required</div> | <div>Enable / Disable inventory tracking</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>inventory[allow_negative] </strong></div><div>required</div> | <div>Allow negative value of inventories</div><div>Must be one of: true, false, 1, 0</div>

## Update inventory

Update the inventory levels based on an inventory ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.1.0/products/22287/inventories/774?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "inventory": {
    "inventory": 25
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 774,
  "inventory": 25,
  "trigger": 6,
  "track": false,
  "allow_negative": false,
  "sub_sku": "S-Red",
  "sub_option_ids": [
    556255,
    556156
  ]
}
```

### HTTP Request

`PUT /api/v2.1.0/products/:product_id/inventories/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Inventory ID</div><div>Must be a number</div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>inventory </strong></div><div>required</div> | <div>Must be a Hash</div>
<div><strong>inventory[inventory] </strong></div><div>optional</div> | <div>Available inventories</div><div>Must be a number</div>
<div><strong>inventory[trigger] </strong></div><div>optional</div> | <div>Notify when inventories are low</div><div>Must be a number</div>
<div><strong>inventory[track] </strong></div><div>optional</div> | <div>Enable / Disable inventory tracking</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>inventory[allow_negative] </strong></div><div>optional</div> | <div>Allow negative value of inventories</div><div>Must be one of: true, false, 1, 0</div>


## Delete inventory

Delete the inventory levels based on an inventory ID you supply.

This API call will be removed in early Q1 of 2023. The creation/deletion of inventory levels will be automatically handled based on the product sub-options (e.g. Colors and Sizes) added to an item. This is to make inventory levels generation much easier to do and manage.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.1.0/products/22287/inventories/774?token=GXzAxWkkyYLsESGQTU15" \
  -X DELETE
```

> The above request returns JSON structured like this:

```json
{
  "id": 774,
  "inventory": 25,
  "trigger": 6,
  "track": false,
  "allow_negative": false,
  "sub_sku": "S-Red",
  "sub_option_ids": [
    556255,
    556156
  ]
}
```

### HTTP Request

`DELETE /api/v2.1.0/products/:product_id/inventories/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Inventory ID</div><div>Must be a number</div>
