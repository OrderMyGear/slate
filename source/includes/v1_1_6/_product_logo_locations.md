#  Product logo locations

## List of logo locations for a product

List all logo locations based on a product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.6/products/22287/logo_locations?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "enabled": true,
  "logo_locations": [
    {
      "id": 1,
      "name": "Right Chest",
      "enabled": true,
      "required": true,
      "chargable": true
    }
  ]
}
```

### HTTP Request

`GET /api/v1.1.6/products/:product_id/logo_locations`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>


## Update logo location

Update the logo location based on the logo locations ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.6/products/22287/logo_locations/1?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "logo_location": {
    "enabled": true,
    "required": true,
    "chargable": false
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 1,
  "name": "Right Chest",
  "enabled": true,
  "required": true,
  "chargable": false
}
```

### HTTP Request

`PUT /api/v1.1.6/products/:product_id/logo_locations/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Logo Location ID</div><div> Must be a number. </div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>logo_location </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>logo_location[enabled] </strong></div><div> optional </div> | <div>Enable location</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>logo_location[required] </strong></div><div> optional </div> | <div>Logo is required for this location</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>logo_location[charge] </strong></div><div> optional </div> | <div>Allow charge for a logo</div><div> Must be one of: true, false, 1, 0 </div>
