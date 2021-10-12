#  Line items

## List line items

List all line items for a specific order ID you supply.
Keep in mind, the response will return up to 500 records on a single page and you will need to use "per_page" and "page" URL parameters to see all the records.

### HTTP Request

`GET /api/v2.2.0/orders/:order_id/line_items`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>order_id </strong></div><div>required</div> | <div>Order ID</div><div>Must be a number</div>


## Show line item

Show the specific line item on an order based on the line item ID you supply.

### HTTP Request

`GET /api/v2.2.0/orders/:order_id/line_items/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>order_id </strong></div><div>required</div> | <div>Order ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Line Item ID</div><div>Must be a number</div>
