#  Product inventories

## List all inventory levels and their corresponding IDs based on a product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.2/products/22287/inventories?token=GXzAxWkkyYLsESGQTU15"
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

`GET /api/v1.1.2/products/:product_id/inventories`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>


## Show the individual inventory level for a specific inventory ID you provide.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.2/products/22287/inventories/774?token=GXzAxWkkyYLsESGQTU15"
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

`GET /api/v1.1.2/products/:product_id/inventories/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Inventory ID</div><div> Must be a number. </div>


## Create inventory levels based on a product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.2/products/22287/inventories?token=GXzAxWkkyYLsESGQTU15" \
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

`POST /api/v1.1.2/products/:product_id/inventories`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>image </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>image[primary] </strong></div><div> optional </div> | <div>Primary Image switcher</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>image[thumbnail] </strong></div><div> optional </div> | <div>Thumbnail Image switcher</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>image[position] </strong></div><div> optional </div> | <div>Image list order</div><div> Must be a number. </div>
<div><strong>image[image_data] </strong></div><div> required </div> | <div>Base64 Image representation</div><div> Must be a String </div>
<div><strong>image[filename] </strong></div><div> required </div> | <div>Image file name</div><div> Must be a String </div>


## Update the inventory levels based on an inventory ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.2/products/22287/inventories/774?token=GXzAxWkkyYLsESGQTU15" \
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

`PUT /api/v1.1.2/products/:product_id/inventories/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Inventory ID</div><div> Must be a number. </div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>inventory </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>inventory[inventory] </strong></div><div> optional </div> | <div>Available inventories</div><div> Must be a number. </div>
<div><strong>inventory[trigger] </strong></div><div> optional </div> | <div>Notify when inventories are low</div><div> Must be a number. </div>
<div><strong>inventory[track] </strong></div><div> optional </div> | <div> Must be one of: true, false, 1, 0 </div>
<div><strong>inventory[allow_negative] </strong></div><div> optional </div> | <div>Allow negative value of inventories</div><div> Must be one of: true, false, 1, 0 </div>


## Delete the inventory levels based on an inventory ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.2/products/22287/inventories/774?token=GXzAxWkkyYLsESGQTU15" \
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

`DELETE /api/v1.1.2/products/:product_id/inventories/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Inventory ID</div><div> Must be a number. </div>


