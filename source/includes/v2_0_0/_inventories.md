# Inventories

## List of all inventories in the store

This API call request allows you to query for all inventory levels on items in your store.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.0.0/inventories?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "inventories": [
    {
      "product_id": 44371,
      "product_name": "District Made - Ladies Dip Dye Rounded Deep V-Neck Tee",
      "internal_id": "",
      "sku": "DM4310",
      "final_sku": "DM4310-XXS-Blk",
      "id": 2871,
      "inventory": 999,
      "trigger": 6,
      "track": true,
      "allow_negative": true,
      "sub_option_ids": [
        734290,
        734297
      ],
      "sub_sku": "XXS-Blk"
    },
    {
      "product_id": 44371,
      "product_name": "District Made - Ladies Dip Dye Rounded Deep V-Neck Tee",
      "internal_id": "",
      "sku": "DM4310",
      "final_sku": "DM4310-XXS-Dkb",
      "id": 2872,
      "inventory": 0,
      "trigger": 5,
      "track": true,
      "allow_negative": true,
      "sub_option_ids": [
        734290,
        734298
      ],
      "sub_sku": "XXS-Dkb"
    }
  ]
}
```

### HTTP Request

`GET /api/v2.0.0/inventories`

### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>sku </strong></div><div>optional</div> | <div>Filter by product  sku</div><div>Must be a String</div>
<div><strong>internal_id </strong></div><div>optional</div> | <div>Filter by product  Internal ID</div><div>Must be a String</div>
<div><strong>name </strong></div><div>optional</div> | <div>Filter by product  name</div><div>Must be a String</div>
<div><strong>categories </strong></div><div>optional</div> | <div>Filter by product categories</div><div>Must be one of: Array, String</div>
<div><strong>vendors </strong></div><div>optional</div> | <div>Filter by product  vendors</div><div>Must be one of: Array, String</div>
<div><strong>created_at_from </strong></div><div>optional</div> | <div>Filter by product date created from</div><div>Valid format is <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a>, e.g. “YYYY-MM-DDThh:mm:ss”. You can provide a time-zone when using this parameter. If no time-zone is provided, then MDT/MST will be used by default.</div>
<div><strong>created_at_to </strong></div><div>optional</div> | <div>Filter by product date created to</div><div>Valid format is <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a>, e.g. “YYYY-MM-DDThh:mm:ss”. You can provide a time-zone when using this parameter. If no time-zone is provided, then MDT/MST will be used by default.</div>
<div><strong>updated_at_from </strong></div><div>optional</div> | <div>Filter by product date updated from</div><div>Valid format is <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a>, e.g. “YYYY-MM-DDThh:mm:ss”. You can provide a time-zone when using this parameter. If no time-zone is provided, then MDT/MST will be used by default.</div>
<div><strong>updated_at_to </strong></div><div>optional</div> | <div>Filter by product date updated to</div><div>Valid format is <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a>, e.g. “YYYY-MM-DDThh:mm:ss”. You can provide a time-zone when using this parameter. If no time-zone is provided, then MDT/MST will be used by default.</div>
<div><strong>page </strong></div><div>optional</div> | <div>Pagination page number</div><div>Must be a number</div>
<div><strong>per_page </strong></div><div>optional</div> | <div>Pagination per page number</div><div>Must be a number</div>

## Batch update inventories for product

Update the inventory levels based on the product ID you supply. You can provide more than 1 inventory ID for a single product ID.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.0.0/inventories/44371/batch_update?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "inventories": [
    {
      "id": 2871,
      "inventory": 100,
      "trigger": 6,
      "track": true,
      "allow_negative": true
    },
    {
      "id": 2872,
      "inventory": 500,
      "trigger": 5,
      "track": true,
      "allow_negative": false
    }
  ]
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "inventories": [
    {
      "product_id": 44371,
      "product_name": "District Made - Ladies Dip Dye Rounded Deep V-Neck Tee",
      "internal_id": "",
      "sku": "DM4310",
      "final_sku": "DM4310-XXS-Blk",
      "id": 2871,
      "inventory": 100,
      "trigger": 6,
      "track": true,
      "allow_negative": true,
      "sub_option_ids": [
        734290,
        734297
      ],
      "sub_sku": "XXS-Blk"
    },
    {
      "product_id": 44371,
      "product_name": "District Made - Ladies Dip Dye Rounded Deep V-Neck Tee",
      "internal_id": "",
      "sku": "DM4310",
      "final_sku": "DM4310-XXS-Dkb",
      "id": 2872,
      "inventory": 500,
      "trigger": 5,
      "track": true,
      "allow_negative": false,
      "sub_option_ids": [
        734290,
        734298
      ],
      "sub_sku": "XXS-Dkb"
    }
  ]
}
```

### HTTP Request

`PUT /api/v2.0.0/inventories/:product_id/batch_update`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Inventory ID</div><div>Must be a number</div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>inventories </strong></div><div>required</div> | <div>Must be a Hash</div>
<div><strong>inventories[id] </strong></div><div>required</div> | <div>Inventory ID</div><div>Must be a number</div>
<div><strong>inventories[inventory] </strong></div><div>optional</div> | <div>Inventory Units</div><div>Must be a number</div>
<div><strong>inventories[trigger] </strong></div><div>optional</div> | <div>Inventory Trigger</div><div>Must be a number</div>
<div><strong>inventories[track] </strong></div><div>optional</div> | <div></div><div>Must be one of: true, false, 1, 0</div>
<div><strong>inventories[allow_negative] </strong></div><div>optional</div> | <div></div><div>Must be one of: true, false, 1, 0</div>
