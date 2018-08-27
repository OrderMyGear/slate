#  Line items 

## List line items

### HTTP Request

`GET /api/v1.1/orders/:order_id/line_items`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
order_id  |  required  | Order ID |  Must be a number. 


## Show line item

### HTTP Request

`GET /api/v1.1/orders/:order_id/line_items/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
order_id  |  required  | Order ID |  Must be a number. 
id  |  required  | Line Item ID |  Must be a number. 


