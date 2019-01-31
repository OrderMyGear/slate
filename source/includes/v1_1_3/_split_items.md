#  Split items

## Show you all item splits on a specific line item within an order based on the line items ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.3/orders/2089/line_items/25135/split_items?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "split_items": [
    {
      "id": 108,
      "quantity": 1,
      "tracking_number": "USPS12339292",
      "ship_date": "2018-01-17",
      "status": "in_progress",
      "shipping_method": "Ground"
    },
    {
      "id": 109,
      "quantity": 2,
      "tracking_number": "UPS9991111",
      "ship_date": "2018-01-15",
      "status": "shipped",
      "shipping_method": "Pickup"
    }
  ]
}
```

### HTTP Request

`GET /api/v1.1.3/orders/:order_id/line_items/:line_item_id/split_items`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>order_id </strong></div><div> required </div> | <div>Order ID</div><div> Must be a number. </div>
<div><strong>line_item_id </strong></div><div> required </div> | <div>Line Item ID</div><div> Must be a number. </div>


## Show you a specific split item under a line item in an order based on the split items ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.3/orders/2089/line_items/25135/split_items/108?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "id": 108,
  "quantity": 1,
  "tracking_number": "USPS12339292",
  "ship_date": "2018-01-17",
  "status": "in_progress",
  "shipping_method": "Ground"
}
```

### HTTP Request

`GET /api/v1.1.3/orders/:order_id/line_items/:line_item_id/split_items/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>order_id </strong></div><div> required </div> | <div>Order ID</div><div> Must be a number. </div>
<div><strong>line_item_id </strong></div><div> required </div> | <div>Line Item ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Split Item ID</div><div> Must be a number. </div>


## Update information for a specific split item under a line item in an order based on the split items ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.3/orders/2089/line_items/25135/split_items/108?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "split_item": {
  		"quantity": 10,
  		"tracking_number": "1111"
  	}
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 108,
  "quantity": 10,
  "tracking_number": "1111",
  "ship_date": "2018-01-15",
  "status": "in_progress",
  "shipping_method": "Ground"
}
```

### HTTP Request

`PUT /api/v1.1.3/orders/:order_id/line_items/:line_item_id/split_items/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>order_id </strong></div><div> required </div> | <div>Order ID</div><div> Must be a number. </div>
<div><strong>line_item_id </strong></div><div> required </div> | <div>Line Item ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Split Item ID</div><div> Must be a number. </div>
<div><strong>split_item </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>split_item[quantity] </strong></div><div> optional , nil allowed </div> | <div>Quantity</div><div> Must be a number. </div>
<div><strong>split_item[tracking_number] </strong></div><div> optional , nil allowed </div> | <div>Tracking Number</div><div> Must be a String </div>
<div><strong>split_item[ship_date] </strong></div><div> optional , nil allowed </div> | <div>Ship Date</div><div> Invalid date format. Valid format: “YYYY-MM-DD hh:mm:ss” or “YYYY-MM-DD” </div>
<div><strong>split_item[shipping_method] </strong></div><div> optional , nil allowed </div> | <div>Shipping Method</div><div> Must be a String </div>
<div><strong>split_item[status] </strong></div><div> optional , nil allowed </div> | <div>Item status</div>


## Delete a specific split item under a line item in an order based on the split items ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.3/orders/2089/line_items/25135/split_items/108?token=GXzAxWkkyYLsESGQTU15" \
  -X DELETE
```

> The above request returns JSON structured like this:

```json
{
  "id": 108,
  "quantity": 10,
  "tracking_number": "1111",
  "ship_date": "2018-01-15",
  "status": "in_progress",
  "shipping_method": "Ground"
}
```

### HTTP Request

`DELETE /api/v1.1.3/orders/:order_id/line_items/:line_item_id/split_items/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>order_id </strong></div><div> required </div> | <div>Order ID</div><div> Must be a number. </div>
<div><strong>line_item_id </strong></div><div> required </div> | <div>Line Item ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Split Item ID</div><div> Must be a number. </div>


