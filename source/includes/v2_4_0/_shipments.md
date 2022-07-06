# Order Shipments

## List shipments

List all shipments based on a order ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.4.0/orders/1/shipments?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "shipments": [
    {
      "id": 14,
      "tracking_number": "1234123412",
      "ship_date": "2019-10-20",
      "note": "Lorem ipsum",
      "shipping_method": "FedEx 2 Day Freight",
      "line_items": [
        {
          "id": 1234,
          "quantity": 1
        }
      ]
    },
    {
      "id": 15,
      "tracking_number": "3443123441",
      "ship_date": "2019-10-21",
      "note": "Lorem ipsum",
      "shipping_method": "FedEx 2 Day",
      "line_items": [
        {
          "id": 1234,
          "quantity": 1
        },
        {
          "id": 1235,
          "quantity": 2
        }
      ]
    }
  ]
}
```

### HTTP Request

`GET /api/v2.4.0/orders/:order_id/shipments`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>order_id </strong></div><div>required</div> | <div>Order ID</div><div>Must be a number</div>

## Show shipment

Show a specific shipment based on the shipment ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.4.0/orders/1/shipments/14?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "id": 14,
  "tracking_number": "1234123412",
  "ship_date": "2019-10-20",
  "note": "Lorem ipsum",
  "shipping_method": "FedEx 2 Day Freight",
  "line_items": [
    {
      "id": 1234,
      "quantity": 1
    }
  ]
}
```

### HTTP Request

`GET /api/v2.4.0/orders/:order_id/shipments/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>order_id </strong></div><div>required</div> | <div>Order ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Shipment ID</div><div>Must be a number</div>


## Create shipment

Create a shipment for a specific order ID you supply.


```shell
curl "https://subdomain.mybrightsites.com/api/v2.4.0/orders/1/shipments?token=GXzAxWkkyYLsESGQTU15" \
  -X POST \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "shipment": {
    "tracking_number": "123412344123",
    "send_shipping_confirmation": true,
    "ship_date": "2019-10-20",
    "note": "Lorem ipsum",
    "shipping_method": "Ground",
    "line_items": [
      {
        "id": 1234,
        "quantity": 2
      }
    ]
  }
}

EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 39,
  "tracking_number": "123412344123",
  "ship_date": "2019-10-20",
  "note": "Lorem ipsum",
  "shipping_method": "Ground",
  "line_items": [
    {
      "id": 1234,
      "quantity": 2
    }
  ]
}
```

### HTTP Request

`POST /api/v2.4.0/orders/:order_id/shipments`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>order_id </strong></div><div>required</div> | <div>Order ID</div><div>Must be a number</div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>shipment </strong></div><div>required</div> | <div>Must be a Hash</div>
<div><strong>shipment[shipping_method] </strong></div><div>optional</div> | <div>Shipping method</div><div>Must be a String. Order's shipping method will be used if empty. See <a href="#shipping-methods">shipping methods</a></div>
<div><strong>shipment[tracking_number] </strong></div><div>optional</div> | <div>Tracking number</div><div>Must be a String</div>
<div><strong>shipment[ship_date] </strong></div><div>optional</div> | <div>Ship Date</div><div>Format: YYYY-MM-DD</div>
<div><strong>shipment[note] </strong></div><div>optional</div> | <div>Note</div><div>Must be a String (max 255 characters)</div>
<div><strong>shipment[send_shipping_confirmation] </strong></div><div>optional</div> | <div>Send shipping confirmation</div><div>If true, send a shipping confirmation email</div>
<div><strong>shipment[line_items] </strong></div><div>required</div> | <div>Line items</div><div>Must be an Array of Hashes</div>
<div><strong>shipment[line_items][0][id] </strong></div><div>required</div> | <div>Line item ID</div><div>Must be a number</div>
<div><strong>shipment[line_items][0][quantity] </strong></div><div>required</div> | <div>Line item quantity</div><div>Must be a number</div>

## Delete shipment

Delete a specific shipment from an order based on the shipment ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.4.0/orders/1/shipments/39?token=GXzAxWkkyYLsESGQTU15" \
  -X DELETE
```

> The above request returns JSON structured like this:

```json
{
  "id": 39,
  "tracking_number": "123412344123",
  "ship_date": "2019-10-20",
  "note": "Lorem ipsum",
  "shipping_method": "Ground",
  "line_items": []
}
```

### HTTP Request

`DELETE /api/v2.4.0/orders/:order_id/shipments/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>order_id </strong></div><div>required</div> | <div>Order ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Shipment ID</div><div>Must be a number</div>
