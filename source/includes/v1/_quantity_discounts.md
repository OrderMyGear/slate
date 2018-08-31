#  Quantity discounts 

## List quantity discounts

```shell
curl "https://subdomain.mybrightsites.com/api/v1/products/1/quantity_discounts?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "enabled": true,
  "type": "fixed_price",
  "quantity_discounts": [
    {
      "id": 579,
      "quantity": 5,
      "modifier": 1000.0
    },
    {
      "id": 580,
      "quantity": 10,
      "modifier": 990.0
    },
    {
      "id": 581,
      "quantity": 100,
      "modifier": 900.0
    }
  ]
}
```

### HTTP Request

`GET /api/v1/products/:product_id/quantity_discounts`



## Show quantity discount

```shell
curl "https://subdomain.mybrightsites.com/api/v1/products/1/quantity_discounts/579?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "quantity": 10,
  "modifier": 990.0
}
```

### HTTP Request

`GET /api/v1/products/:product_id/quantity_discounts/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>id </strong></div><div> required </div> | <div>Quantity discount ID</div><div> Must be a number. </div>


## Create quantity discount

```shell
curl "https://subdomain.mybrightsites.com/api/v1/products/1/quantity_discounts?token=GXzAxWkkyYLsESGQTU15" \
  -X POST \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "quantity_discount": {
    "quantity": 10,
    "modifier": 990.0
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 581,
  "quantity": 10,
  "modifier": 990.0
}
```

### HTTP Request

`POST /api/v1/products/:product_id/quantity_discounts`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>quantity_discount </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>quantity_discount[quantity] </strong></div><div> required </div> | <div>Quantity</div><div> Must be a number. </div>
<div><strong>quantity_discount[modifier] </strong></div><div> required </div> | <div>Base price / Discount percentage</div><div> Must be a float. </div>


## Update quantity discount

```shell
curl "https://subdomain.mybrightsites.com/api/v1/products/1/quantity_discounts/579?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "quantity_discount": {
    "modifier": 980.0
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "quantity": 10,
  "modifier": 980.0
}
```

### HTTP Request

`PATCH /api/v1/products/:product_id/quantity_discounts/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>quantity_discount </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>quantity_discount[quantity] </strong></div><div> optional </div> | <div>Quantity</div><div> Must be a number. </div>
<div><strong>quantity_discount[modifier] </strong></div><div> optional </div> | <div>Base price / Discount percentage</div><div> Must be a float. </div>


## Update quantity discount

```shell
curl "https://subdomain.mybrightsites.com/api/v1/products/1/quantity_discounts/579?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "quantity_discount": {
    "modifier": 980.0
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "quantity": 10,
  "modifier": 980.0
}
```

### HTTP Request

`PUT /api/v1/products/:product_id/quantity_discounts/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>quantity_discount </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>quantity_discount[quantity] </strong></div><div> optional </div> | <div>Quantity</div><div> Must be a number. </div>
<div><strong>quantity_discount[modifier] </strong></div><div> optional </div> | <div>Base price / Discount percentage</div><div> Must be a float. </div>


## Delete quantity discount

```shell
curl "https://subdomain.mybrightsites.com/api/v1/products/1/quantity_discounts/579?token=GXzAxWkkyYLsESGQTU15" \
  -X DELETE
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "quantity": 10,
  "modifier": 980.0
}
```

### HTTP Request

`DELETE /api/v1/products/:product_id/quantity_discounts/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>id </strong></div><div> required </div> | <div>Quantity discount ID</div><div> Must be a number. </div>


