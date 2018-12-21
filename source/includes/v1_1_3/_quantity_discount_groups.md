#  Quantity discount groups

## List of quantity discount groups

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.3/products/1/quantity_discount_groups?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "enabled": true,
  "quantity_discount_groups": [
    {
      id: 123,
      name: 'Default',
      type: 'fixed_price'
      product_options: [
        {
          product_option_id: 1234,
          sub_option_ids: [432, 654]
        },
        {
          product_option_id: 4443,
          sub_option_ids: [985, 765]
        }
      ],
      discounts: [
        {
          "quantity": 10,
          "modifier": 10.0
        },
        {
          "quantity": 20,
          "modifier": 8.0
        }
      ]
    }
  ]
}
```

### HTTP Request

`GET /api/v1.1.3/products/:product_id/quantity_discount_groups`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>


## Show quantity discount group

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.3/products/1/quantity_discounts/579?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  id: 123,
  name: 'Default',
  type: 'fixed_price'
  product_options: [
    {
      product_option_id: 1234,
      sub_option_ids: [432, 654]
    },
    {
      product_option_id: 4443,
      sub_option_ids: [985, 765]
    }
  ],
  discounts: [
    {
      "quantity": 10,
      "modifier": 10.0
    },
    {
      "quantity": 20,
      "modifier": 8.0
    }
  ]
}
```

### HTTP Request

`GET /api/v1.1.3/products/:product_id/quantity_discount_groups/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Quantity discount ID</div><div> Must be a number. </div>


## Create quantity discount group

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.3/products/1/quantity_discount_groups?token=GXzAxWkkyYLsESGQTU15" \
  -X POST \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "quantity_discount_group": {
    "type": "percentage",
    "name": "apitest",
    "product_options": [
      {
        "product_option_id": 85315,
        "sub_option_ids": [
          733287,
          733292
        ]
      },
      {
        "product_option_id": 85359,
        "sub_option_ids": [
          733525,
          733530
        ]
      }
    ],
    "discounts": [
      {
        "quantity": 10,
        "modifier": "10.0"
      },
      {
        "quantity": 20,
        "modifier": "15.0"
      }
    ]
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "type": "percentage",
  "id": 579,
  "name": "apitest",
  "product_options": [
    {
      "product_option_id": 85315,
      "sub_option_ids": [
        733287,
        733292
      ]
    },
    {
      "product_option_id": 85359,
      "sub_option_ids": [
        733525,
        733530
      ]
    }
  ],
  "discounts": [
    {
      "quantity": 10,
      "modifier": "10.0"
    },
    {
      "quantity": 20,
      "modifier": "15.0"
    }
  ]
}
```

### HTTP Request

`POST /api/v1.1.3/products/:product_id/quantity_discount_groups`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>quantity_discount_group </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>quantity_discount_group[name] </strong></div><div> required </div> | <div> Must be a String </div>
<div><strong>quantity_discount_group[type] </strong></div><div> required </div> | <div>Type</div><div> Must be one of: percentage, fixed_price. </div>
<div><strong>quantity_discount_group[product_options] </strong></div><div> optional , nil allowed </div> | <div> Must be an Array of nested elements </div>
<div><strong>quantity_discount_group[product_options][product_option_id] </strong></div><div> required </div> | <div> Must be a number. </div>
<div><strong>quantity_discount_group[product_options][sub_option_ids] </strong></div><div> required </div> | <div> Must be an Array of Integer </div>
<div><strong>quantity_discount_group[discounts] </strong></div><div> optional , nil allowed </div> | <div> Must be an Array of nested elements </div>
<div><strong>quantity_discount_group[discounts][quantity] </strong></div><div> optional , nil allowed </div> | <div> Must be a number. </div>
<div><strong>quantity_discount_group[discounts][modifier] </strong></div><div> optional , nil allowed </div> | <div> Must be a float. </div>


## Update quantity discount group

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.3/products/1/quantity_discounts/579?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "quantity_discount_group": {
    "name": "apitest2"
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "type": "percentage",
  "id": 579,
  "name": "apitest2",
  "product_options": [
    {
      "product_option_id": 85315,
      "sub_option_ids": [
        733287,
        733292
      ]
    },
    {
      "product_option_id": 85359,
      "sub_option_ids": [
        733525,
        733530
      ]
    }
  ],
  "discounts": [
    {
      "quantity": 10,
      "modifier": "10.0"
    },
    {
      "quantity": 20,
      "modifier": "15.0"
    }
  ]
}
```

### HTTP Request

`PUT /api/v1.1.3/products/:product_id/quantity_discount_groups/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>quantity_discount_group </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>quantity_discount_group[name] </strong></div><div> optional </div> | <div> Must be a String </div>
<div><strong>quantity_discount_group[type] </strong></div><div> optional </div> | <div>Type</div><div> Must be one of: percentage, fixed_price. </div>
<div><strong>quantity_discount_group[product_options] </strong></div><div> optional , nil allowed </div> | <div> Must be an Array of nested elements </div>
<div><strong>quantity_discount_group[product_options][product_option_id] </strong></div><div> optional </div> | <div> Must be a number. </div>
<div><strong>quantity_discount_group[product_options][sub_option_ids] </strong></div><div> optional </div> | <div> Must be an Array of Integer </div>
<div><strong>quantity_discount_group[discounts] </strong></div><div> optional , nil allowed </div> | <div> Must be an Array of nested elements </div>
<div><strong>quantity_discount_group[discounts][quantity] </strong></div><div> optional , nil allowed </div> | <div> Must be a number. </div>
<div><strong>quantity_discount_group[discounts][modifier] </strong></div><div> optional , nil allowed </div> | <div> Must be a float. </div>


## Delete quantity discount group

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.3/products/1/quantity_discounts/579?token=GXzAxWkkyYLsESGQTU15" \
  -X DELETE
```

> The above request returns JSON structured like this:

```json
{
    "type": "percentage",
    "id": 579,
    "name": "apitest",
    "product_options": [],
    "discounts": []
}
```

### HTTP Request

`DELETE /api/v1.1.3/products/:product_id/quantity_discount_groups/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Quantity discount group ID</div><div> Must be a number. </div>


