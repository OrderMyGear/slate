#  Product decoration methods

## List of decoration methods for a product

List whether decorations methods is activated for a product and what the decoration methods are on that product based on the product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.5.0/products/22287/decoration_methods?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "enabled": true,
  "decoration_methods": [
    {
      "id": 1,
      "name": "Sublimation",
      "enabled": true
    }
  ]
}
```

### HTTP Request

`GET /api/v2.5.0/products/:product_id/decoration_methods`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>


## Update decoration method

Activate decorations methods under a product based on the decoration methods ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.5.0/products/22287/decoration_methods/1?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "decoration_method": {
    "enabled": true
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 1,
  "name": "Sublimation",
  "enabled": true
}
```

### HTTP Request

`PUT /api/v2.5.0/products/:product_id/decoration_methods/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Decoration Method ID</div><div>Must be a number</div>

### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>decoration_method </strong></div><div>required</div> | <div>Must be a Hash</div>
<div><strong>decoration_method[enabled] </strong></div><div>optional</div> | <div>Enable decoration method</div><div>Must be one of: true, false, 1, 0</div>
