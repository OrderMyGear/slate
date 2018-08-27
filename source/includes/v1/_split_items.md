#  Split items 

## List split items

### HTTP Request

`GET /api/v1/orders/:order_id/line_items/:line_item_id/split_items`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
order_id  |  required  | Order ID |  Must be a number. 
line_item_id  |  required  | Line Item ID |  Must be a number. 


## Show split item

### HTTP Request

`GET /api/v1/orders/:order_id/line_items/:line_item_id/split_items/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
order_id  |  required  | Order ID |  Must be a number. 
line_item_id  |  required  | Line Item ID |  Must be a number. 
id  |  required  | Split Item ID |  Must be a number. 


## Update split item

### HTTP Request

`PATCH /api/v1/orders/:order_id/line_items/:line_item_id/split_items/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
order_id  |  required  | Order ID |  Must be a number. 
line_item_id  |  required  | Line Item ID |  Must be a number. 
split_item  |  required  | Validations: |  Must be a Hash 
split_item[quantity]  |  optional , nil allowed  | Quantity |  Must be a number. 
split_item[tracking_number]  |  optional , nil allowed  | Tracking Number |  Must be a String 
split_item[ship_date]  |  optional , nil allowed  | Ship Date |  Invalid date format. Valid format: “YYYY-MM-DD hh:mm:ss” or “YYYY-MM-DD” 
split_item[shipping_method]  |  optional , nil allowed  | Shipping Method |  Must be a String 
split_item[status]  |  optional , nil allowed  | Item status | 


## Update split item

### HTTP Request

`PUT /api/v1/orders/:order_id/line_items/:line_item_id/split_items/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
order_id  |  required  | Order ID |  Must be a number. 
line_item_id  |  required  | Line Item ID |  Must be a number. 
split_item  |  required  | Validations: |  Must be a Hash 
split_item[quantity]  |  optional , nil allowed  | Quantity |  Must be a number. 
split_item[tracking_number]  |  optional , nil allowed  | Tracking Number |  Must be a String 
split_item[ship_date]  |  optional , nil allowed  | Ship Date |  Invalid date format. Valid format: “YYYY-MM-DD hh:mm:ss” or “YYYY-MM-DD” 
split_item[shipping_method]  |  optional , nil allowed  | Shipping Method |  Must be a String 
split_item[status]  |  optional , nil allowed  | Item status | 


## Delete split item

### HTTP Request

`DELETE /api/v1/orders/:order_id/line_items/:line_item_id/split_items/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
order_id  |  required  | Order ID |  Must be a number. 
line_item_id  |  required  | Line Item ID |  Must be a number. 
id  |  required  | Split Item ID |  Must be a number. 


