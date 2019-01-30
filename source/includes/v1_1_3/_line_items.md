#  Line items

## List out all line items for a specific order ID you supply.

### HTTP Request

`GET /api/v1.1.3/orders/:order_id/line_items`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>order_id </strong></div><div> required </div> | <div>Order ID</div><div> Must be a number. </div>


## Show the specific line item on an order based on the line item ID you supply.

### HTTP Request

`GET /api/v1.1.3/orders/:order_id/line_items/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>order_id </strong></div><div> required </div> | <div>Order ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Line Item ID</div><div> Must be a number. </div>


