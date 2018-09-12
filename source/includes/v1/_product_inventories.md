#  Product inventories

## List of inventories for product

```shell
curl "https://subdomain.mybrightsites.com/api/v1/products/22287/inventories?token=GXzAxWkkyYLsESGQTU15"
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

`GET /api/v1/products/:product_id/inventories`



## Show inventories

```shell
curl "https://subdomain.mybrightsites.com/api/v1/products/22287/inventories/774?token=GXzAxWkkyYLsESGQTU15"
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

`GET /api/v1/products/:product_id/inventories/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>id </strong></div><div> required </div> | <div>Inventory ID</div><div> Must be a number. </div>


## Create inventory

### HTTP Request

`POST /api/v1/products/:product_id/inventories`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>inventory </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>inventory[sub_option_ids] </strong></div><div> optional , nil allowed </div> | <div>Array of sub_option ids. It can be blank if there are no options for this product</div><div> Must be an array of any type </div>
<div><strong>inventory[inventory] </strong></div><div> required </div> | <div>Available inventories</div><div> Must be a number. </div>
<div><strong>inventory[trigger] </strong></div><div> required </div> | <div>Notify when inventories are low</div><div> Must be a number. </div>
<div><strong>inventory[track] </strong></div><div> required </div> | <div> Must be one of: true, false, 1, 0 </div>
<div><strong>inventory[allow_negative] </strong></div><div> required </div> | <div>Allow negative value of inventories</div><div> Must be one of: true, false, 1, 0 </div>


## Update inventory

```shell
curl "https://subdomain.mybrightsites.com/api/v1/products/22287/inventories/774?token=GXzAxWkkyYLsESGQTU15" \
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

`PUT /api/v1/products/:product_id/inventories/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>inventory </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>inventory[inventory] </strong></div><div> optional </div> | <div>Available inventories</div><div> Must be a number. </div>
<div><strong>inventory[trigger] </strong></div><div> optional </div> | <div>Notify when inventories are low</div><div> Must be a number. </div>
<div><strong>inventory[track] </strong></div><div> optional </div> | <div> Must be one of: true, false, 1, 0 </div>
<div><strong>inventory[allow_negative] </strong></div><div> optional </div> | <div>Allow negative value of inventories</div><div> Must be one of: true, false, 1, 0 </div>


## Delete inventory

```shell
curl "https://subdomain.mybrightsites.com/api/v1/products/22287/inventories/774?token=GXzAxWkkyYLsESGQTU15" \
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

`DELETE /api/v1/products/:product_id/inventories/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>id </strong></div><div> required </div> | <div>Inventory ID</div><div> Must be a number. </div>


