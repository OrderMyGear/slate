# Product PromoStandards

## List of promostandards items

List all promostandards items based on a product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.7.0/products/22287/promostandards?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "promostandards_items": [
    {
      "size_id": 1392573,
      "color_id": 1392565,
      "part_id": "G100KSBLKSM",
      "track_inventory": true,
      "allow_negative_inventory": false
    },
    {
      "size_id": 1392574,
      "color_id": 1392565,
      "part_id": "G100KSBLKMD",
      "track_inventory": true,
      "allow_negative_inventory": false
    },
    {
      "size_id": 1392575,
      "color_id": 1392565,
      "part_id": "G100KSBLKLG",
      "track_inventory": true,
      "allow_negative_inventory": false
    }
  ]
}
```

### HTTP Request

`GET /api/v2.7.0/products/:product_id/promostandards`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>



## Batch update

Update promostandards items based on the product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.7.0/products/22287/promostandards/batch_update?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "promostandards_items": [
    {
      "size_id": 1392573,
      "color_id": 1392565,
      "part_id": "G100KSBLKS",
      "track_inventory": true,
      "allow_negative_inventory": true
    },
    {
      "size_id": 1392575,
      "color_id": 1392565,
      "part_id": "G200KSBLKLG",
      "track_inventory": true,
      "allow_negative_inventory": false
    }
  ]
}
EOF
```


> The above request returns JSON structured like this:

```json
{
  "promostandards_items": [
    {
      "size_id": 1392573,
      "color_id": 1392565,
      "part_id": "G100KSBLKS",
      "track_inventory": true,
      "allow_negative_inventory": true
    },
    {
      "size_id": 1392574,
      "color_id": 1392565,
      "part_id": "G100KSBLKMD",
      "track_inventory": true,
      "allow_negative_inventory": false
    },
    {
      "size_id": 1392575,
      "color_id": 1392565,
      "part_id": "G200KSBLKLG",
      "track_inventory": true,
      "allow_negative_inventory": false
    }
  ]
}
```

### HTTP Request

`PUT /api/v2.7.0/products/:product_id/promostandards/batch_update`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>

### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>promostandards_items </strong></div><div>required</div> | <div>Array of promostandards items</div>
<div><strong>promostandards_items[size_id] </strong></div><div>required</div> | <div>Sub option ID of Size product option</div><div>Must be a number</div>
<div><strong>promostandards_items[color_id] </strong></div><div>required</div> | <div>Sub option ID of Color product option</div><div>Must be a number</div>
<div><strong>promostandards_items[part_id] </strong></div><div>required</div> | <div>Supplier Part ID</div><div>Must be a number</div>
<div><strong>promostandards_items[track_inventory] </strong></div><div>optional</div> | <div>Enable/Disable inventory tracking</div><div>Boolean value</div>
<div><strong>promostandards_items[allow_negative_inventory] </strong></div><div>optional</div> |  <div>Allow negative value of inventories</div><div>Boolean value</div>
